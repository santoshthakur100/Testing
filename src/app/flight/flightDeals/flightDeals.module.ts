import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightDealsComponent } from './flightDeals.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FlightDealsComponent],
  exports: [FlightDealsComponent]
})
export class FlightDealsModule { }
