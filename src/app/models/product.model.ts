import { Customer } from "./customer.model";
import { Process } from './process.model';

export interface Product {
    _id: string;
    productName: string;
    customer: Customer;
    DrawingNo:number;
    // revisionNo:string;
    Drawing:string;
    // partNo:string;
    isSelected: any;
    process: Process[];
   
}