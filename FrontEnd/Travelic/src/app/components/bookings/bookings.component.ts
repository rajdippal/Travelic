import { Component, OnInit } from '@angular/core';
import { Bookings } from 'src/app/common/bookings';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  id !: number;
  name !: string;
  email !: string;
  fromDate !: Date;
  packageName !: string; 
  price !: number;

  isSubmitted : boolean = false;

  constructor(private bookingService : BookingsService) { }

  ngOnInit(): void {
    this.packageName = this.bookingService.currentPackage.location;
    this.price = this.bookingService.currentPackage.price;
    this.isSubmitted = false;
  }

  book(){
    let booking = new Bookings(this.id, this.name, this.email, this.fromDate, this.packageName, this.price);

    this.bookingService.addPackage(booking).subscribe(data => {
      console.log(data);
    });

    this.isSubmitted = true;
  }

}
