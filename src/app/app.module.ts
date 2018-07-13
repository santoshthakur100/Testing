import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { InterceptorModule } from './interceptor.module';

import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { JustTravelModule } from './flight/justTravel/justTravel.module';
import { WeAreAvailableModule } from './flight/weAreAvailable/weAreAvailable.module';
import { FlightDealsModule } from './flight/flightDeals/flightDeals.module';




@NgModule({
   declarations: [
      AppComponent,
      routingComponents
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      InterceptorModule,

      FooterModule,
      HeaderModule,
      JustTravelModule,
      WeAreAvailableModule,
      FlightDealsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
}) 
export class AppModule { } 
