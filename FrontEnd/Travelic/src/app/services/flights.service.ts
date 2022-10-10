import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flights } from '../common/flights';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  baseUrl = 'http://localhost:8080/flights';

  constructor(private httpClient: HttpClient) { }

  getAllFlights() : Observable<Flights[]>{
    const allFlightsUrl = `${this.baseUrl}/all`;
    return this.httpClient.get<Flights[]>(allFlightsUrl);
  }

  getSearchFlights(loc : string): Observable<Flights[]>{
    const allFlightsSearchUrl = `${this.baseUrl}/search/${loc}`;
    return this.httpClient.get<Flights[]>(allFlightsSearchUrl);
  }
}
