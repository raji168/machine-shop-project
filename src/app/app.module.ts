import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { MatConfirmDialogComponent } from './shared/mat-confirm-dialog/mat-confirm-dialog.component';
<<<<<<< HEAD
import { ProductLibraryComponent } from './product-library/product-library.component';
=======
import { MainModule } from './main/main.module';
>>>>>>> d1d70c53707e0cdbbfd15c221496f4b21a45d6ca

@NgModule({

  declarations: [

    AppComponent,
    MatConfirmDialogComponent,
<<<<<<< HEAD
    ProductLibraryComponent,
=======
>>>>>>> d1d70c53707e0cdbbfd15c221496f4b21a45d6ca

  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MainModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })

  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent]
})

export class AppModule { }
