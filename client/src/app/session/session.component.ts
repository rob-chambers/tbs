import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../models/session';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  constructor() {
    this.session = new Session(new Date(2020, 9, 6), { hours: 18, minutes: 0 }, { hours: 19, minutes: 30 }, true);
    this.session.partnerName = "Tim";
  }
  
  ngOnInit(): void {
  }

  @Input()
  session: Session;

  clickMessage = '';

  onBooking() {
    this.session.isBooked = true;
    this.clickMessage = '';
  }

  cancelBooking() {
    this.session.isBooked = false;
    this.clickMessage = 'Booking cancelled!';
  }
}
