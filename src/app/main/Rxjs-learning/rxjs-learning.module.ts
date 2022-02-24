import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RxjsLearningComponent } from "./rxjs-learning.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RxjsLearningRoutingModule } from "./rxjs-learning-routing.module";


@NgModule({
    declarations: [
      RxjsLearningComponent,
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
