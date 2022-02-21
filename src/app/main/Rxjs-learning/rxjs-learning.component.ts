import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.scss']
})
export class RxjsLearningComponent implements OnInit {

    nameList = ['prabha','raji','sara','sana','priya']
    //convert array into Observable 
    name : Observable<string[]> = of(this.nameList);
    employeeName :Observable<string> = of('prabha');
    employeeObj ={
        id: 9,
        employeeName : 'raji'
    }
    employee$ :Observable<any> = of(this.employeeObj);

    daysArr = ['sunday','monday','wednesday','friday'];
    days$ :Observable<string> = from(this.daysArr);

    dayList : string;

  constructor() { }
    ngOnInit(): void {
        
       this.name.subscribe(data =>{
        console.log(data);
       })
       this.employeeName.subscribe(data =>{
        console.log(data);
       })
        this.employee$.subscribe(result =>{
            console.log(result);
        })
        this.days$.subscribe(data =>{
            console.log(data);
        })
        // this.days$.subscribe(response =>{
        //    this.dayList = response;
          
        // })









    }
    

  
}


