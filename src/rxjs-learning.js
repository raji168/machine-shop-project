import { of } from 'rxjs';

let ints = of(2,4,6,8,10,12);
ints.subscribe(x => console.log(x));