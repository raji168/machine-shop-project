export interface Process {
    _id?: string;
    processCount:string,
    processName: string;
    processDrawingNo: Drawing;
    processDrawing: Drawing;
    jsirDoc: string;
    pmsDoc: string;
    pirDoc:string;
    pdirDoc: string;
    isirDoc: string;
}


export interface Drawing {
    _id?: string;
    no: string;
    path: string;
}