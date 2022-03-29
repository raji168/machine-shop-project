import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MachineCategory } from "../models/machine-category.model";

@Injectable({
    providedIn: 'root'
})
export class MachineCategoryDataService {

    private machineCategories : MachineCategory[] = [];
    
    machineCategoryUpdated$ = new BehaviorSubject<MachineCategory[]>([])
    
    getMachineCategory(){
        return[...this.machineCategories]
    }

    loadMachineCategory(machineCategories : MachineCategory[]){
        this.machineCategories = machineCategories;
        this.machineCategoryUpdated$.next(this.machineCategories)
    }
    addMachineCategory(machineCategory : MachineCategory) {
        this.machineCategories = [...this.machineCategories , machineCategory]
        this.machineCategoryUpdated$.next(this.machineCategories);
    }
    updateMachineCategory(machineCategoryResponse : MachineCategory){
        const updateMachineCategory = this.machineCategories.find(machineCategory => machineCategory._id === machineCategoryResponse._id)
        const updateMachineCategoryIndex = this.machineCategories.findIndex(machineCategory => machineCategory._id === machineCategoryResponse._id)
        const updatedMachineCategory = {...updateMachineCategory, ...machineCategoryResponse}
        this.machineCategories[updateMachineCategoryIndex] = updatedMachineCategory
        this.machineCategoryUpdated$.next(this.machineCategories)
    }

    deleteMachineCategory(id: string) {
        this.machineCategories = this.machineCategories.filter(machineCategory => machineCategory._id !== id);
        this.machineCategoryUpdated$.next(this.machineCategories)
    }
}