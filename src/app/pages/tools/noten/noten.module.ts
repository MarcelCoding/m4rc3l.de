import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotenRoutingModule} from './noten-routing.module';
import {NotenComponent} from './noten.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TextFieldComponent} from "@feel/form";


@NgModule({
  declarations: [
    NotenComponent
  ],
  imports: [
    CommonModule,
    NotenRoutingModule,
    ReactiveFormsModule,
    TextFieldComponent
  ]
})
export class NotenModule {
}
