import { Customer } from "./customer.model";
import { Drawing, Process } from './process.model';

export interface Product {
    _id?: string;
    productName: string;
    customerName: Customer;
    customerDrawingNo:string;
    revisionNo:string;
    customerDrawing:Drawing;
    partNo:string;
    processes: Process[];
    // status: boolean;
    // isSelected: any;

}