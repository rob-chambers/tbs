import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedule/schedule.component';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  private schedule: Schedule;

  constructor() {
    this.schedule = new Schedule(new Date(2020, 9, 12), new Date(2020, 9, 18));
  }

  ngOnInit(): void {
  }

}
