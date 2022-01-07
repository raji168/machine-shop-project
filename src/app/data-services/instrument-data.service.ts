import { Injectable } from "@angular/core";
import { BehaviorSubject,  } from "rxjs";
import { InstrumentModel } from "../models/instrument.model";


@Injectable({
    providedIn:'root'
})

export class InstrumentDataService{ 

    private instruments : InstrumentModel[] = []

    instrumentUpdated$ = new BehaviorSubject<InstrumentModel[]>([])

    getInstruments(){
        return[...this.instruments]
    }

    loadInstruments(instruments : InstrumentModel[]) {
        this.instruments = instruments;
        this.instrumentUpdated$.next(this.instruments)
    }

    
    addInstrument(instrument : InstrumentModel){
        this.instruments = [...this.instruments,instrument]
        this.instrumentUpdated$.next(this.instruments);
    }
    
    updateInstrument(instrumentResponse :InstrumentModel){
        const updateInstrument = this.instruments.find(instrument => instrument._id === instrumentResponse._id)
        const updateInstrumentIndex  = this.instruments.findIndex(instrument => instrument._id === instrumentResponse._id)
        const updatedInstrument = { ...updateInstrument, ...instrumentResponse}
        this.instruments[updateInstrumentIndex] = updatedInstrument
        this.instrumentUpdated$.next(this.instruments);
    }
    deleteInstrument(id:string){
        this.instruments = this.instruments.filter(instrument => instrument._id!==id);
        this.instrumentUpdated$.next(this.instruments);
    }
    
        
}