import { Machine } from "./machine.model";
import { Drawing, Process } from "./process.model";
import { Product } from "./product.model";

export interface MachineMapping{
    id?:string,
    productName: Product,
    processName: Process,
    drawingNo:Drawing,
    machine:Machine
}