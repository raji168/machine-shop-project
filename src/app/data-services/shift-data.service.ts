import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { Shift } from "../models/shift.model";

@Injectable({
    providedIn:'root'
})


export class ShiftDataService implements OnInit{

    private shifts : Shift[] = []; 

    shiftUpdated$ = new Subject<Shift[]>()

    getShifts(){
        
    }

    ngOnInit(): void {

    }
}