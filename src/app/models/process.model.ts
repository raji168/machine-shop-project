import { Drawing } from "./drawing.model";

export interface Process {
    _id: string;
    operationName: string;
    processDrawing: Drawing;
    processDrawingNo: string;
    jsirDoc: string;
    pmsDoc: string;
    pirDoc:string;
    pdirDoc: string;
    isirDoc: string;
}


