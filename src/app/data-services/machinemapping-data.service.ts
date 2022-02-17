import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MachineMapping } from "../models/machinemapping.model";

@Injectable({
    providedIn: 'root'
})


export class MachineMappingDataService {

    private machineMaps: MachineMapping[] = [];

    machineMapUpdated$ = new BehaviorSubject<MachineMapping[]>([])

    getMachineMap() {
        return [...this.machineMaps]
    }

    loadMachineMap(machineMaps: MachineMapping[]) {
        this.machineMaps = machineMaps;
        this.machineMapUpdated$.next(this.machineMaps);
    }

    addMachineMap(machineMap: MachineMapping) {
        this.machineMaps = [...this.machineMaps, machineMap]
        this.machineMapUpdated$.next(this.machineMaps);
    }

    updateMachineMap(machineMapResponse: MachineMapping) {

        const updateMachineMap = this.machineMaps.find(machineMap => machineMap.id === machineMapResponse.id)
        const updateMachineMapIndex = this.machineMaps.findIndex(machineMap => machineMap.id === machineMapResponse.id)
        const updatedMachineMap = { ...updateMachineMap, ...machineMapResponse }
        this.machineMaps[updateMachineMapIndex] = updatedMachineMap
        this.machineMapUpdated$.next(this.machineMaps);
    }

    deleteMachineMap(id: string) {

        this.machineMaps = this.machineMaps.filter(machineMap => machineMap.id !== id);
        this.machineMapUpdated$.next(this.machineMaps);

    }
}
