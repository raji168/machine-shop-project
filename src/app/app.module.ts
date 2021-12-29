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
import { AlertMessageComponent } from './shared/alert-message/alert-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    AlertMessageComponent
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
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmDialogComponent]
})
export class AppModule { }
