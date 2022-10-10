import { Component, OnInit } from '@angular/core';
import { Bookings } from 'src/app/common/bookings';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-all-bookings',
  templateUrl: './all-bookings.component.html',
  styleUrls: ['./all-bookings.component.css']
})
export class AllBookingsComponent implements OnInit {

  bookings : Bookings[] = [];

  constructor(private bookingService: BookingsService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.bookingService.getBooking().subscribe(data => {
      this.bookings = data;
    });
  }

}
