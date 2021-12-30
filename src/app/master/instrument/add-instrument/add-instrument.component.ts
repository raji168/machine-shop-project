import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { InstrumentService } from 'src/app/services/instrument.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { BehaviorSubject, Observable} from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
  styleUrls: ['./add-instrument.component.scss']
})
export class AddInstrumentComponent implements OnInit {

  form:FormGroup;

  reFresh =new BehaviorSubject<Boolean>(true);
  add:Observable<any>
  constructor(
    public instrumentService:InstrumentService,
    public dialogRef: MatDialogRef<AddInstrumentComponent>,
    public notification : NotificationService
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      sno: new FormControl(''),
      name: new FormControl(''),
      referenceno: new FormControl(''),
      range: new FormControl(''),
      calibratedon: new FormControl(''),
      calibratedue: new FormControl('')
    });
    this.add=this.reFresh.pipe(switchMap(_ =>this.instrumentService.addInstrument(this.form.value)));
  }
  
  onSubmit(){
    console.log(this.form.value);
    this.instrumentService.addInstrument(this.form.value).subscribe((data) => {
      this.dialogRef.close(data);
      this.reFresh.next(false);
      this.notification.success("successfullly data added!!");
    })
  } 
  
}
