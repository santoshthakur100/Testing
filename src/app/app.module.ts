import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import {InterceptorModule} from './interceptor.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
   declarations: [
      AppComponent,
      routingComponents,
      PageNotFoundComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      InterceptorModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
