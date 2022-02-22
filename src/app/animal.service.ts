import { Injectable } from '@angular/core';
import { Animal } from './models/Animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor() {}
  animals: Animal[] = [
    new Animal('Hund', 13, false, true, false),
    new Animal('Häst', 2, false, false, false),
    new Animal('Fågel', 1, true, true, false),
  ];
  getAnimals(): Animal[] {
    return this.animals;
  }
}
