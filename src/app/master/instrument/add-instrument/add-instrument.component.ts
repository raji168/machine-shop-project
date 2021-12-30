import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { InstrumentService } from 'src/app/services/instrument.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
  styleUrls: ['./add-instrument.component.scss']
})
export class AddInstrumentComponent implements OnInit {

  form:FormGroup;

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
  }
  
  onSubmit(){
    console.log(this.form.value);
    this.instrumentService.addInstrument(this.form.value).subscribe((data) => {
      this.dialogRef.close(data);
      this.notification.success("successfullly data added!!");
    })
  } 
  
}
