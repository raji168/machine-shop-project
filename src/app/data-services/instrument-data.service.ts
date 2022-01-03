import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { InstrumentModel } from "../models/instrument.model";

@Injectable({
    providedIn:'root'
})
export class InstrumentDataService{ 

    private instruments : InstrumentModel[] = []
    instrumentUpdated$ = new Subject<InstrumentModel[]>()

    getInstrument(){
        return[...this.instruments]
    }

    loadInstrument(instruments :InstrumentModel[]){
        this.instruments =instruments;
    }

    
    addInstrument(instrument : InstrumentModel){
        this.instruments = [...this.instruments,instrument]
        this.instrumentUpdated$.next(this.instruments);
    }
    updateInstrument(instrumentResponse :InstrumentModel){
        const updateInstrument = this.instruments.find(instrument => instrument._id === instrument._id)
        const updateInstrumentIndex  =this.instruments.findIndex(instrument => instrument._id === instrument._id)
        const updateInstruments = { ...updateInstrument, ...instrumentResponse}
        this.instruments[updateInstrumentIndex] =updateInstruments
        this.instrumentUpdated$.next(this.instruments);
    }

        
}