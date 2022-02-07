import { Customer } from "./customer.model";
import { Process } from './process.model';

export interface Product {
    _id: string;
    name: string;
    customer: Customer;
    processes: Process[];
    // status: boolean;
    // isSelected: any;

}