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
import { MainModule } from './main/main.module';
<<<<<<< HEAD
import { StoreModule } from '@ngrx/store';
import { _RESOLVED_META_REDUCERS } from '@ngrx/store/src/tokens';
import { EffectsModule } from '@ngrx/effects';
import { RoleEffects } from './store/effects/role.effects';
import { roleReducer } from 'src/app/store/reducers/role.reducers'
=======
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
>>>>>>> 4f2906ba440fa4ba796bd547e290ff0613be2d63

@NgModule({

  declarations: [
    AppComponent,
    MatConfirmDialogComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MainModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    StoreModule.forRoot({
      roleState: roleReducer
    }),
    
    EffectsModule.forRoot([
      RoleEffects
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent]
})

export class AppModule { }
