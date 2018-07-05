import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'flight', component: FlightComponent },
  { path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
export const routingComponents = [FlightComponent,PageNotFoundComponent]

//export const RoutingRoutes = RouterModule.forChild(routes);