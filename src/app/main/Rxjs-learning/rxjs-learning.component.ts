import { Component, OnInit } from '@angular/core';
import { asyncScheduler, combineLatest, from, fromEvent, generate, interval, observable, Observable, of, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { range } from 'rxjs';
import { GenerateOptions } from 'rxjs/internal/observable/generate';

@Component({
    selector: 'rxjs-learning',
    templateUrl: './rxjs-learning.component.html',
    styleUrls: ['./rxjs-learning.component.scss']
})
export class RxjsLearningComponent implements OnInit {

    nameList = ['prabha', 'raji', 'sara', 'sana', 'priya']
    //convert array into Observable 
    name: Observable<string[]> = of(this.nameList);

    employeeName: Observable<string> = of('prabha');

    employeeObj = {
        id: 9,
        employeeName: 'raji'
    }
    employee$: Observable<any> = of(this.employeeObj);

    daysArr = ['sunday', 'monday', 'wednesday', 'friday']
    days$: Observable<string> = from(this.daysArr);



    constructor() { }
    ngOnInit(): void {
        //of
        //    this.name.subscribe(data =>{
        //     console.log(data);
        //    })
        //    this.employeeName.subscribe(data =>{
        //     console.log(data);
        //    })
        //     this.employee$.subscribe(result =>{
        //         console.log(result);
        //     })
        //from
            // this.days$.subscribe(data =>{
            //     console.log(data);
            // })
        //fromEvent
            // const clicks = fromEvent(document, 'click');
            // clicks.subscribe(x => console.log(x));

        //interval
            // const numbers = interval(1000);
            // const takeFourNumbers = numbers.pipe(take(4));
            // takeFourNumbers.subscribe(x => console.log('Count: ', x));
        //range
            // const rangeNumbers = range(1, 14);
            // rangeNumbers.subscribe({
            // next: value => { console.log(value) },
            // complete: () => { console.log('Complete!') }
            // });
        //timer
            // const input$ = timer(1000,2000);
            // input$.subscribe((data) => {
            //     console.log(data);
            // });
        //timer vs interval
            // interval(1000).subscribe((data) => {
            //     console.log(data);
            // });
            // timer(2000,5000).subscribe((data) => {
            //     console.log(data);
            // });

        //for (x=0;x<5;i++){}
        //generate
            // const result = generate(0, x => x < 5, x => x + 1, x => x);
            // result.subscribe(data => console.log(data));

            // const resultvalue = generate({
            //     initialState: 0,
            //     condition: x => x < 10,
            //     iterate: x => x + 1,
            //     resultSelector: x => x,
            // });
            // resultvalue.subscribe({
            //     next: value => console.log(value),
            //     complete: () => console.log('complete!')
            // });
        //Use options object with condition and iterate function
            // console.log('Starting');
            // const generateSource: GenerateOptions<string, number> = {
            //     initialState: 0,
            //     condition: x => x < 3,
            //     iterate: x => x + 1,
            //     resultSelector: x => 'prabha' + 1,
            //         scheduler : asyncScheduler,
            // };
            // const source$ = generate(generateSource);
            // source$.subscribe((data) => {
            //     console.log(data)
            // });
            // console.log('Ending');
        //combineLatest
        const input1$ = new Observable((result) =>{
            let number = 0;
            for(let i=1000;i<10000;i +=1000){
                setTimeout(()=> {
                    result.next(number++);
                },i);
            }
        });
        const input2$ = new Observable((result) =>{
            setTimeout(() => {
                result.next(10);
            },5000);
        });
        combineLatest([input1$,input2$]).subscribe((data)=>{
            console.log(data);
        });
    }
}



