export interface Process {
    name: string;
    drawing: Drawing;
    jsirDoc: string;
    pmsDoc: string;
    pdirDoc: string;
    isirDoc: string;
}


export interface Drawing {
    no: string;
    path: string;
}