import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule} from '@angular/material/button';
import { MaterialModule } from "../../material/material.module";
import { MasterRoutingModule } from "./master-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
<<<<<<< HEAD:src/app/master/master.module.ts
import { InstrumentComponent } from './instrument/instrument.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AddInstrumentComponent } from './instrument/add-instrument/add-instrument.component';
import { AddRoleComponent } from './role/add-role/add-role.component';



=======
import { FormsModule } from "@angular/forms";
import { MasterComponent } from "./master.component";
>>>>>>> d1d70c53707e0cdbbfd15c221496f4b21a45d6ca:src/app/main/master/master.module.ts


@NgModule({
    declarations: [
        MasterComponent

    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        MasterRoutingModule,
        MatButtonModule
    ],
})


export class MasterModule {
}
