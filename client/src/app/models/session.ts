import { Time } from '@angular/common';

export class Session {
  day: Date;
  startTime: Time;
  endTime: Time;
  isBookable: boolean;
  dayName: string;
  isBooked: boolean;
  partnerName: string;
  hasTickets: boolean;

  constructor(day: Date, startTime: Time, endTime: Time, isBookable: boolean) {
    this.day = day;
    this.dayName = this.getDayOfWeek(day);
    this.startTime = startTime;
    this.endTime = endTime;
    this.isBookable = isBookable;

    this.hasTickets = true;
  }

  private getDayOfWeek(date: Date): string {
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

  time(): string
  {
    return `${ this.formatTime(this.startTime) } - ${ this.formatTime(this.endTime) }`;
  }

  private formatTime(value: Time): string {
    return `${this.formatNumber(value.hours)}:${this.formatNumber(value.minutes)}`;
  }

  private formatNumber(value: number): string {
    return (value === 0)
      ? "00"
      : value.toString();
  }
} 
