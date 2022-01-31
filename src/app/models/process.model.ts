export interface Process {
    name: string;
    drawing: Drawing;
    jsirDoc: string;
    pirDoc:string;
    pmsDoc: string;
    pdirDoc: string;
    isirDoc: string;
}


export interface Drawing {
    no: string;
    path: string;
}