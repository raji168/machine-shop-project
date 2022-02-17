import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { machineGroup } from "../models/machinegroup.models";


@Injectable({
    providedIn: 'root'
})
export class MachineGroupDataService {

    private machineGroups: machineGroup[] = [];

    machineGroupUpdated$ = new BehaviorSubject<machineGroup[]>([])

    getMachineGroup() {
        return [...this.machineGroups] // copy
    }

    loadMachineGroups(machineGroups: machineGroup[]) {
        this.machineGroups = machineGroups;
        this.machineGroupUpdated$.next(this.machineGroups)
    }

    addMachineGroup(machinegroup: machineGroup) {
        this.machineGroups = [...this.machineGroups, machinegroup]
        this.machineGroupUpdated$.next(this.machineGroups);
    }

    updateMachineGroup(machinegroupResponse: machineGroup) {
        const updateMachinegroup = this.machineGroups.find(machinegroup => machinegroup._id === machinegroupResponse._id)
        const updateMachinegroupIndex = this.machineGroups.findIndex(machinegroup => machinegroup._id === machinegroupResponse._id)
        const updatedMachinegroup = { ...updateMachinegroup, ...machinegroupResponse }
        this.machineGroups[updateMachinegroupIndex] = updatedMachinegroup
        // console.log(this.machineGroups)
        this.machineGroupUpdated$.next(this.machineGroups);
    }

    deleteMachineGroup(id: string) {
        this.machineGroups = this.machineGroups.filter(machinegroup => machinegroup._id !== id);
        this.machineGroupUpdated$.next(this.machineGroups);
    }

}