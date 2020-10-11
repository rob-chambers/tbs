import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

export class Session {
  day: Date;
  startTime: Time;
  endTime: Time;
  isBookable: boolean;
  dayName: string;

  constructor(day: Date, startTime: Time, endTime: Time, isBookable: boolean)
  {
    this.day = day;
    this.dayName = this.getDayOfWeek(day);
    this.startTime = startTime;
    this.endTime = endTime;
    this.isBookable = isBookable;
  }

  private getDayOfWeek(date: Date) {
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[date.getDay()];
  }
} 

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    this.session = new Session(new Date(2020, 9, 6), { hours: 18, minutes: 0 }, { hours: 19, minutes: 30 }, true);
  }

  session: Session;
}
