export class Person {
  private firstName: string;
  private middleName: string;
  private lastName: string;
  private age: number;

  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    age: number
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(): string {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }

  getBirthdayYear(): number {
    return new Date().getFullYear() - this.age;
  }

  getAge() {
    return this.age;
  }
}
