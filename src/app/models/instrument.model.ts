export interface InstrumentModel {
    _id?: string;
    sno: number;
    name: string;
    referenceno: number;
    range: string;
    calibratedon: Date;
    calibratedue: Date;
    isDelete: boolean;
}

