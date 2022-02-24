import { Component, OnInit } from '@angular/core';
import { asyncScheduler, combineLatest, concat, forkJoin, from, fromEvent, generate, interval, merge, Observable, of, partition, race, range, timer, zip } from 'rxjs';
import { GenerateOptions } from 'rxjs/internal/observable/generate';
import { buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, concatMap, concatMapTo, filter, map, mapTo, mergeMap, mergeMapTo, switchMap, take, tap, toArray } from 'rxjs/operators';

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
        // generate
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
        // const input1$ = new Observable((result) =>{
        //     let number = 0;
        //     for(let i=1000;i<10000;i +=1000){
        //         setTimeout(()=> {
        //             result.next(number++);
        //         },i);
        //     }
        // });
        // const input2$ = new Observable((result) =>{
        //     setTimeout(() => {
        //         result.next(10);
        //     },5000);
        // });
        // combineLatest([input1$,input2$]).subscribe((data)=>{
        //     console.log(data);
        // });
        //concat
        // let input1$ =new Observable((source) =>{
        //     source.next(1);
        //     source.next(2);
        //     setTimeout(()=>{
        //         source.next(3);
        //         source.complete();
        //         source.error();
        //     },1000);
        // });
        // let input2$ = of('a','b','c','d');
        // concat(input1$,input2$).subscribe((data)=>{
        //     console.log(data);
        // });
        //forkjoin
        // let input1$ =of(1,2,3,4);
        // let input1$ =new Observable((source)=>{
        //     source.next(1);
        //     source.next(2);
        //     source.complete();
        //     source.error();

        // })
        // let input2$ =of('a','b');
        // forkJoin({input1 : input1$, input2: input2$ }).subscribe((data)=>{
        //     console.log(data);
        // });
        //merge
        // let input1$ = interval(1000);
        // let input2$ = of('a','b');
        // let input3$ = of(100,200,300);
        // let input4$ = new Observable((source=>{
        //     source.next('prabha');
        //     source.complete();
        //     source.error();
        // }))
        // merge(input1$,input2$,input3$,input4$).subscribe((data)=>{
        //     console.log(data);
        // });
        //partition
        // let input1$ =of(1,2,3,4,5,6,7,8,9);
        // let data =partition(input1$,(value) => value % 2 == 0);
        // console.log(data);
        // data[0].subscribe((d)=> {
        //     console.log(d);
        // });
        // data[1].subscribe((d)=>{
        //     console.log(d);
        // });
        // from(data).pipe(concatMap((d)=>d.pipe(toArray()))).subscribe((value) => {
        //     console.log(value);
        // });
        //race
        // let input1$ = interval(4000);
        // let input2$ = interval(3000);
        // let input3$ = interval(5000);
        // race(input1$,input2$,input3$).subscribe((data)=>{
        //     console.log(data);
        // })
        // let input1$ = interval(4000).pipe(map((v)=>'first one' +v));
        // let input2$ = interval(1000).pipe(map((v)=>'second one' +v));
        // let input3$ = interval(5000).pipe(map((v)=>'third one' +v));
        // race(input1$,input2$,input3$).subscribe((data)=>{
        //     console.log(data);
        // })
        // let input1$ = interval(1000).pipe(
        //     tap((v)=>{
        //     throw 'error';
        //    })
        // );
        // let input2$ = interval(3000).pipe(
        //     tap((v)=>{
        //  throw 'error';
        // })
        // );
        // let input3$ = interval(5000).pipe(map((v)=>'third one' +v));
        // race(input1$,input3$,input2$).subscribe((data)=>{
        //     console.log(data);
        // })
        //zip
        // let input1$ = of(1,2,3,4,);
        // let input2$ = of('a','b','c','d');
        // let input3$ = of(100,200,300,400,500)
        // zip(input1$,input2$,input3$).subscribe((data)=>{
        //     console.log(data);
        // });
        //buffer
        // const clicks = fromEvent(document, 'click');
        // const intervalEvents = interval(1000);
        // const buffered = intervalEvents.pipe(buffer(clicks));
        // buffered.subscribe(x => console.log(x));
        //buffer count
        // of(1,2,3,4).subscribe((data)=>console.log(data));
        // of(1,2,3,4).pipe(bufferCount(2)).subscribe((data)=>console.log(data));
        // interval(1000)
        // .pipe(bufferCount(3))
        // .subscribe((data)=>console.log(data));
        // interval(1000)
        // .pipe(bufferCount(3,2))
        // .subscribe((data)=>console.log(data));
        //buffer time
        // const clicks = fromEvent(document, 'click');
        // const buffered = clicks.pipe(bufferTime(1000));
        // buffered.subscribe(x => console.log(x));
        // interval(1000).subscribe((data=>{
        //     console.log(data);
        // }));
        // interval(1000).pipe(bufferTime(3000,1000))
        // .subscribe((data)=>{
        //     console.log(data);
        // });
        //buffer toogle
        // let opening = interval(6000).pipe(tap(() => console.log('open')));
        // let closing = () => interval(3000).pipe(tap(() => console.log('close')))
        // interval(1000)
        // .pipe(
        //     tap((data) => console.log(data)),
        //     bufferToggle(opening,closing),
        //     take(3)
        // )
        //     .subscribe((data)=> console.log(data));
        //bufferwhen
        // let x=0;
        // interval(500) 
        // .pipe(
        //     tap((i)=>(x=i)),
        //     bufferWhen(()=>{
        //         if(x>5){
        //             return interval(1000);
        //         }
        //         return interval(2000);
        //     })
        // )
        // .subscribe((data)=>{
        //     console.log(data);
        // });
        //concatMap
        // const clicks = fromEvent(document, 'click');
        // const result = clicks.pipe(
        // concatMap(ev => interval(1000).pipe(take(4)))
        // );
        // result.subscribe(x => console.log(x));
        // let sourceObservable= of(1,2,3,4)
        // let innerObservable1= of('A','B','C','D')
        // sourceObservable.pipe(
        // concatMap( val => {
        //     console.log('Source value '+val)
        //     console.log('starting new observable')
        //     return innerObservable1
        // })
        // )
        // .subscribe(ret=> {
        // console.log('concatMap ' + ret);
        // })
        //merge Map
        // let srcObservable= of(1,2,3,4)
        // let innerObservable= of('A','B','C','D')
        
        // srcObservable.pipe(
        // mergeMap( val => {
        //     console.log('Source value '+val)
        //     console.log('starting new observable')
        //     return innerObservable
        // })
        // )
        // .subscribe(ret=> {
        // console.log('merge Map ' + ret);
        // })
        // const letters = of('a','b','c');
        // const result = letters.pipe(
        //     mergeMap(x => interval(1000).pipe(map(i =>x+i))));
        // result.subscribe(x => console.log(x));
        //switchMap
        // const letters = of('a','b','c');
        // const result = letters.pipe(
        //     switchMap(x => interval(1000).pipe(map(i =>x+i)))
        //     );
        // result.subscribe(x => console.log('switchmap'+x));
        //concatMapTo
        // const clicks = fromEvent(document, 'click');
        // const result = clicks.pipe(
        // concatMapTo(interval(1000).pipe(take(4))),
        // );
        // result.subscribe(x => console.log('concatmap'+x));
        //map
        // of(1,2,3,4)
        // .pipe(
        //     map((value)=>{
        //         return value*10;
        //     })
        // )
        // .subscribe((data)=>{
        //     console.log(data);
        // });
        // console.log('ending');
        // of(1,2,3,4)
        // .pipe(
        //     filter((value)=> value %2==0),
        //     map((value)=> {
        //         return value*10;
        //     })
        // )
        // .subscribe((data)=>{
        //     console.log(data);
        // })
        //mapTo
        // const clicks = fromEvent(document, 'click');
        // const source = clicks.pipe(mapTo('Hi'));
        // source.subscribe(x => console.log(x));
        //mergeMapTo
        // const clicks = fromEvent(document, 'click');
        // const result = clicks.pipe(mergeMapTo(interval(1000)));
        // result.subscribe(x => console.log(x));
    }
}



