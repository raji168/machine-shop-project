import { Machine } from "./machine.model";
import { Product } from "./product.model";

export interface MachineMapping{
    id:string;
    product: Product;
    // process: Process,
    // drawingNo:Drawing,
    machine:Machine;
}