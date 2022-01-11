import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder} from '@angular/forms';
import { InstrumentService } from 'src/app/services/instrument.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { InstrumentModel } from 'src/app/models/instrument.model';



@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
  styleUrls: ['./add-instrument.component.scss']
})
export class AddInstrumentComponent implements OnInit {

  instrument: InstrumentModel;
  dataInstrument: InstrumentModel[] = [];
  form:FormGroup;
  _id: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : {instrument: InstrumentModel},
    public instrumentService:InstrumentService,
    public dialogRef: MatDialogRef<AddInstrumentComponent>,
    public notification : NotificationService,
    private fb :FormBuilder
  ) { }

  ngOnInit(): void {
    
    this.form = this.fb.group({
      sno:  '' ,
      name:  '' ,
      referenceno:  '' ,
      range:  '' ,
      calibratedon:  '' ,
      calibratedue:  '' 
    });

    this.instrument = this.data?.instrument;

    // this.instrumentService.get().subscribe(data => {
    //   this.dataInstrument = data;
    // });

    if(this.instrument) {
      this.form.patchValue(this.instrument);
    }
  }
 
  onSubmit(){
   
    if (this.instrument ) {
      this.instrumentService.updateInstrument(this.form.value, this.instrument._id).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success("Edited successfullly  ");
      });
    } else {
      this.instrumentService.addInstrument(this.form.value).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success("Added  successfullly  ");

      });

    }
  } 
  
}