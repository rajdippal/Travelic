import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PackagesComponent } from './components/packages/packages.component';
import { AddPackageFormComponent } from './components/add-package-form/add-package-form.component';
import { FlightsComponent } from './components/flights/flights.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { AllBookingsComponent } from './components/all-bookings/all-bookings.component';

const routes : Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'packages', component: PackagesComponent},
  {path: 'flights', component: FlightsComponent},
  {path: 'bookings', component: BookingsComponent},
  {path: 'all-bookings', component: AllBookingsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagesComponent,
    AddPackageFormComponent,
    FlightsComponent,
    BookingsComponent,
    AllBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
