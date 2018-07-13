import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight.component';
import { FooterModule } from '../footer/footer.module';
import { JustTravelModule } from './justTravel/justTravel.module';
import { WeAreAvailableModule } from './weAreAvailable/weAreAvailable.module';
import { FlightDealsModule } from './flightDeals/flightDeals.module';

@NgModule({ 
  imports: [ 
    CommonModule,
    FooterModule,
    JustTravelModule,
    WeAreAvailableModule,
    FlightDealsModule
  ],
  exports: [], 
  declarations: [FlightComponent]
})
export class FlightModule { }
