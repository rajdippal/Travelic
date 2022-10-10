import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookings } from '../common/bookings';
import { Packages } from '../common/packages';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  baseUrl = 'http://localhost:8080/booking';
  currentPackage : Packages = new Packages(1,'a',1,'a');

  constructor(private httpClient: HttpClient) { }

  addPackage(booking : Bookings) : Observable<Object>{
    const addBookingUrl = `${this.baseUrl}/add`;
    return this.httpClient.post(addBookingUrl,booking);
  } 

  getBooking() : Observable<Bookings[]> {
    const getPackagesUrl = `${this.baseUrl}/all`;
    return this.httpClient.get<Bookings[]>(getPackagesUrl);
  }
}
