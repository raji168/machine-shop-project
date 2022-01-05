import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Shift } from "../models/shift.model";

@Injectable({
    providedIn: 'root'
})


export class ShiftDataService  {

    private shifts: Shift[] = [];

    shiftUpdated$ = new Subject<Shift[]>()

    shiftDeleted$ = new Subject<Shift[]>()

    getShift() {

        return [...this.shifts]
    }

    loadShift(shifts: Shift[]) {

        this.shifts = shifts;
    }
    
    addShift(shift : Shift){

        this.shifts = [...this.shifts,shift]
        this.shiftUpdated$.next(this.shifts);
    }

    updateShift(shiftResponse : Shift){
        const updateShift = this.shifts.find(shift => shift._id === shift._id)
        const updateShiftIndex = this.shifts.findIndex(shift => shift._id === shift._id)
        const updatedShift = {...updateShift,...shiftResponse}
        this.shifts[updateShiftIndex]= updatedShift
        this.shiftUpdated$.next(this.shifts);
    }

    deleteShift(shiftResponse : Shift){
        const deleteShift = this.shifts.filter(shift => shift._id === shift._id)
        const deleteShiftIndex = this.shifts.findIndex(shift => shift._id === shift._id)
        const deletedShift = {...deleteShift,...shiftResponse}
        this.shifts[deleteShiftIndex] = deletedShift
        this.shiftDeleted$.next(this.shifts);
    }
  
} 