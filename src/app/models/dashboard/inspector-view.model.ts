import { CustomerView } from "./customer-view.model";
import { Admin } from "./admin.model";

// export interface InspectorView{
//     _id:string;
//     machineName:ManagementView;
//     customerName:ManagementView;
//     ProductName:ManagementView;
//     PartNo:CustomerView;
//     TimeSchedule:String;
//     Entry:string;
//     status:string;
// }

export interface InspectorView{
    _id:string;
    machineName:string;
    customerName:string;
    productName:string;
    partNo:string;
    timeSchedule:String;
    entry:string;
    status:string;
}