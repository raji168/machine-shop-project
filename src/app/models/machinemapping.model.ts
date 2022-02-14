import { Machine } from "./machine.model";
import {Process } from "./process.model";
import { Product } from "./product.model";

export interface MachineMapping{
    id:string;
    product: Product;
    // process: Process,
    // drawingNo:Drawing,
    machine:Machine;
}