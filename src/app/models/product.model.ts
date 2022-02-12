import { Customer } from "./customer.model";
import { Process } from './process.model';

export interface Product {
    _id: string;
    productName: string;
    customerName: string;
    customerDrawingNo:number;
    // revisionNo:string;
    customerDrawing:string;
    // partNo:string;
    isSelected: any;
    process: Process[];
   
}