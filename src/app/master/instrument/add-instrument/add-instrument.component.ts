import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { InstrumentService } from 'src/app/services/instrument.service';

@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
  styleUrls: ['./add-instrument.component.scss']
})
export class AddInstrumentComponent implements OnInit {

  constructor(public _service:InstrumentService,public _dialogRef: MatDialogRef<AddInstrumentComponent>) { }

  ngOnInit(): void {
  }
  onClose() {
    this._service.form.reset();
    this._service.initializeFromGroup();
    this._dialogRef.close();
  }
  onClear() {
    this._service.form.reset();
    this._service.initializeFromGroup();
  }

}
