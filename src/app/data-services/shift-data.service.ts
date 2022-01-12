import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Shift } from "../models/shift.model";

@Injectable({
    providedIn: 'root'
})


export class ShiftDataService {

    private shifts: Shift[] = [];

    shiftUpdated$ = new BehaviorSubject<Shift[]>([])


    getShift() {

        return [...this.shifts]
    }

    loadShift(shifts: Shift[]) {

        this.shifts = shifts;
        this.shiftUpdated$.next(this.shifts);
    }

    addShift(shift: Shift) {

        this.shifts = [...this.shifts, shift]
        this.shiftUpdated$.next(this.shifts);
    }

    updateShift(shiftResponse: Shift) {

        const updateShift = this.shifts.find(shift => shift._id === shiftResponse._id)
        const updateShiftIndex = this.shifts.findIndex(shift => shift._id === shiftResponse._id)
        const updatedShift = { ...updateShift, ...shiftResponse }
        this.shifts[updateShiftIndex] = updatedShift
        this.shiftUpdated$.next(this.shifts);

    }

    deleteShift(id: string) {

        this.shifts = this.shifts.filter(shift => shift._id !== id)
        this.shiftUpdated$.next(this.shifts);
    }

} 