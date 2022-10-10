import { Component, OnInit } from '@angular/core';
import { Flights } from 'src/app/common/flights';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  flights : Flights[] = [];
  loc !: string;
  code !: string;
  isDiscount : boolean = false;

  constructor(private flightsSerice: FlightsService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.flightsSerice.getAllFlights().subscribe(data => {
      console.log(data);
      this.flights = data;
    });
  }

  search(){
    this.flightsSerice.getSearchFlights(this.loc).subscribe(data => {
      console.log(data);
      this.flights = data;
    });
  }

  apply(){
    if(this.code === 'WELCOME10'){
      this.isDiscount = true;
    }
    else{
      this.isDiscount = false;
    }
  }

}
