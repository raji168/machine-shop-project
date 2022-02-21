import { MachineCategory } from "./machine-category.model";

export interface Machine {
    _id?: string;
    machinename: string;
    machineno: string;
    brand: string;
    machinecategory: MachineCategory;
    isSelected: any;
}

