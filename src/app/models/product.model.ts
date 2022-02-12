import { Customer } from "./customer.model";
import { Drawing, Process } from './process.model';

export interface Product {
    _id?: string;
    productName: string;
    customerName: Customer;
    customerDrawingNo:number;
    revisionNo:string;
    customerDrawing:string;
    partNo:string;
    processes: Process[];
   
}