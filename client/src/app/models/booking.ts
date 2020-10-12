import { Session } from './session';
import { Schedule } from './schedule';
import { Person } from './person';

export class Booking {
  schedule: Schedule;
  session: Session;
  bookedBy: Person;
  partner: Person;
  createdDate: Date;
  isFuture: boolean;
} 
