import { Role } from "./role.model";

export interface User {
    _id?: string;
    sno: number;
    name: string;
    role:Role;
    emailId:string;
    phoneNo:number;
    userName:string;
   
}
