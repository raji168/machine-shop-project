export interface Process {
    id:string;
    name: string;
    drawing: Drawing;
    jsirDoc: string;
    pirDoc:string;
    pmsDoc: string;
    pdirDoc: string;
    isirDoc: string;
}


export interface Drawing {
    id:string;
    no: string;
    path: string;
}