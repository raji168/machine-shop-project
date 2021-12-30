import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterRoutingModule } from './master/master-routing.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
<<<<<<< HEAD

=======
import { AlertMessageComponent } from './shared/alert-message/alert-message.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
>>>>>>> 7697c5382d06ad86cf25dfe42fc624842b29d682

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
<<<<<<< HEAD
=======
    AlertMessageComponent,
    MatConfirmDialogComponent
>>>>>>> 7697c5382d06ad86cf25dfe42fc624842b29d682
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MasterRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    })

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmDialogComponent,MatConfirmDialogComponent]
})
export class AppModule { }
