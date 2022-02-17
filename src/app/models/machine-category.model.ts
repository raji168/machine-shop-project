import { machineGroup } from "./machinegroup.models";

export interface MachineCategory {
    _id : string;
    machineCategoryName : string;
    machineGroupName : machineGroup;
}