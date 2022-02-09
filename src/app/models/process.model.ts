export interface Process {
    _id?: string;
    operationName: string;
    drawingNo: string;
    drawing: string;
    jsirDoc: string;
    pmsDoc: string;
    pirDoc:string;
    pdirDoc: string;
    isirDoc: string;
}


export interface Drawing {
    id:string;
    customerdrawingNo: string;
    processdrawingNo: string;
    customerDrawing:string;
    processDrawing:string;
}