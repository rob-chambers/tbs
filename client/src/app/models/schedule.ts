import { Session } from './session';

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
