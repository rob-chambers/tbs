import { Component, OnInit } from '@angular/core';
import { Session } from '../session/session.component';

export class Schedule {
  startDate: Date;
  endDate: Date;
  sessions: Session[];

  constructor(startDate: Date, endDate: Date) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.sessions = [];
  }
} 

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  schedule: Schedule;

  constructor()
  {
    this.schedule = new Schedule(new Date(2020, 9, 12), new Date(2020, 9, 18));
    this.schedule.sessions = [];
    this.schedule.sessions.push(new Session(new Date(2020, 9, 12), { hours: 18, minutes: 0 }, { hours: 19, minutes: 30 }, false));
    this.schedule.sessions.push(new Session(new Date(2020, 9, 12), { hours: 20, minutes: 0 }, { hours: 19, minutes: 30 }, false));
    this.schedule.sessions.push(new Session(new Date(2020, 9, 13), { hours: 18, minutes: 0 }, { hours: 21, minutes: 30 }, true));
    this.schedule.sessions.push(new Session(new Date(2020, 9, 13), { hours: 20, minutes: 0 }, { hours: 21, minutes: 30 }, true));
  }

  ngOnInit(): void {
  }

}
