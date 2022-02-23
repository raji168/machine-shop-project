import { Customer } from "./customer.model";
import { Drawing } from "./drawing.model";
import { Process } from './process.model';

export interface Product {
    _id: string;
    productName: string;
    customer: Customer;
    DrawingNo:string;
    // revisionNo:string;
    Drawing:Drawing;
    // partNo:string;
    isSelected: any;
    process: Process[];
   
}