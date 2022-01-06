import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Shift } from "../models/shift.model";

@Injectable({
    providedIn: 'root'
})


export class ShiftDataService {

    private shifts: Shift[] = [];

    shiftUpdated$ = new Subject<Shift[]>()


    getShift() {

        return [...this.shifts]
    }

    loadShift(shifts: Shift[]) {

        this.shifts = shifts;
    }

    addShift(shift: Shift) {

        this.shifts = [...this.shifts, shift]
        this.shiftUpdated$.next(this.shifts);
    }

    updateShift(shiftResponse: Shift) {

        const updateShift = this.shifts.find(shift => shift._id === shift._id)
        const updateShiftIndex = this.shifts.findIndex(shift => shift._id === shift._id)
        const updatedShift = { ...updateShift, ...shiftResponse }
        this.shifts[updateShiftIndex] = updatedShift
        this.shiftUpdated$.next(this.shifts);

    }

    deleteShift(id:string) {
        this.shifts = this.shifts.filter(shift => shift._id !== shift._id)
        this.shiftUpdated$.next(this.shifts);
    }

} 