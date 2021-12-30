import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from "@angular/material/core";
<<<<<<< HEAD
=======
import {MatCheckboxModule} from '@angular/material/checkbox';

>>>>>>> 5474b9e668c0d4026b65892784658879d8d5ecc4
import { FormsModule } from "@angular/forms";
@NgModule({
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatDatepickerModule,
        MatPaginatorModule,
        MatGridListModule,
        MatSortModule,
        MatSnackBarModule,
        MatSelectModule,
        MatNativeDateModule,
        FormsModule,MatCheckboxModule
    ]
})


export class MaterialModule {

}