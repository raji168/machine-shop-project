import { Product } from "../product.model";

export interface CustomerView {
    _id:string;
    lotID:number;
    productName:string;
    partNo:string;
    status:string;
}