import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Person } from '../models/person';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss']
})
export class NewBookingComponent implements OnInit {
  date = new FormControl('', [Validators.required]);
  partner = new FormControl('', [Validators.required]);
  minDate: Date;
  maxDate: Date;
  persons: Person[]

  constructor() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    let maxYear = currentYear;
    let maxMonth = currentMonth + 1;
    if (maxMonth >= 12) {
      maxMonth = 0;
      maxYear++;
    }

    this.minDate = new Date();
    this.maxDate = new Date(maxYear, maxMonth, 31);    
  }

  ngOnInit(): void {
    this.initPartnerList();
  }

  getErrorMessage() {
    if (this.date.hasError('required')) {
      return 'You must enter the date';
    }

    return this.date.hasError('date') ? 'Not a valid date' : '';
  }

  onConfirm() {
    console.log("onConfirm");
  }

  onCancel() {
    console.log("onCancel");
  }

  private initPartnerList() {
    this.persons = [];
    let person = new Person();
    person.firstName = "John";
    person.lastName = "Smith";
    this.persons.push(person);

    person = new Person();
    person.firstName = "Tom";
    person.lastName = "Jones";
    this.persons.push(person);
  }
}
