// Import stylesheets
import { Person } from './person';
import './style.css';

// Write TypeScript code!

let me: Person = new Person('Enzo', 'Carvalho', 'Santos', 19);

const fullNameField: HTMLElement = document.getElementById('fullName');

const birthField: HTMLElement = document.getElementById('birthYear');

const ageField: HTMLElement = document.getElementById('age');

fullNameField.innerHTML = `Name: ${me.getFullName()}`;
birthField.innerHTML = `Birth Year: ${me.getBirthdayYear()}`;
ageField.innerHTML = `Age: ${me.getAge()}`;
