import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InstrumentService } from 'src/app/services/instrument.service';

@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
  styleUrls: ['./add-instrument.component.scss']
})
export class AddInstrumentComponent implements OnInit {

  form:FormGroup;
  constructor(public instrumentService:InstrumentService) { }

  ngOnInit(): void {
  }

  
    
  
  // onClear() {
  //   console.log(this.instrumentService.form.reset());
   
  // }
}