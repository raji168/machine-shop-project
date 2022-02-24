import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RxjsLearningComponent } from "./rxjs-learning.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RxjsLearningRoutingModule } from "./rxjs-learning-routing.module";
import { CreationJoincreationOperatorComponent } from './creation-joincreation-operator/creation-joincreation-operator.component';


@NgModule({
    declarations: [
      RxjsLearningComponent,
      CreationJoincreationOperatorComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RxjsLearningRoutingModule
       
    ],
})


export class RxjdLearningModule {
}
