export class Person {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  fullName(): string
  {
    return `${this.firstName} ${this.lastName}`; 
  }
}
