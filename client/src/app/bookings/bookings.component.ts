import { Component, OnInit } from '@angular/core';
import { Schedule } from '../models/schedule';
import { Booking } from '../models/booking';
import { Session } from '../models/session';
import { Person } from '../models/person';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  bookings: Booking[];

  constructor() {
    this.bookings = [];
    const booking = new Booking();
    booking.schedule = new Schedule(new Date(2020, 9, 12), new Date(2020, 9, 18));
    booking.session = new Session(new Date(2020, 9, 6), { hours: 18, minutes: 0 }, { hours: 19, minutes: 30 }, true);
    booking.isFuture = true;

    const partner = new Person();
    partner.firstName = "Tim";
    partner.lastName = "Smith";    
    booking.partner = partner;

    const booker = new Person();
    booker.firstName = "Rob";
    booker.lastName = "Chambers";
    booking.bookedBy = booker;

    booking.createdDate = new Date(2020, 9, 11);


    const booking2 = new Booking();
    booking2.schedule = new Schedule(new Date(2020, 9, 19), new Date(2020, 9, 25));
    booking2.session = new Session(new Date(2020, 9, 21), { hours: 20, minutes: 0 }, { hours: 21, minutes: 30 }, true);
    booking2.isFuture = true;

    partner.firstName = "Duncan";
    partner.lastName = "Brown";
    booking2.partner = partner;

    booking2.bookedBy = booker;
    booking2.createdDate = new Date(2020, 9, 13);

    this.bookings.push(booking);
    this.bookings.push(booking2);
  }

  ngOnInit(): void {
  }

  onCancel() {
    console.log("Cancelled");
  }
}
