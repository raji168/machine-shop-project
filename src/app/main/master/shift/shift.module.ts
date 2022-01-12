import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftRoutingModule } from '../shift/shift-routing.module';
import { ShiftComponent } from './shift.component';
import { AddShiftComponent } from './add-shift/add-shift.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShiftComponent,
    AddShiftComponent
  ],
  imports: [
    CommonModule,
    ShiftRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    [NgxMatTimepickerModule.setLocale('en-IN')]

  ]
})
export class ShiftModule { }
