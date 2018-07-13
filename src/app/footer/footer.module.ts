import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCheckboxModule} from '@angular/material/checkbox';


import { FooterComponent } from './footer.component';


@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  declarations: [FooterComponent],
  exports: [
    FooterComponent
  ]
})

export class FooterModule {} 