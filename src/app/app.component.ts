import { Component } from '@angular/core';
import { AnimalService } from './animal.service';
import { Animal } from './models/Animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'inputovning';
  constructor(private animalsService: AnimalService) {}
  feedingCounter: number = 0;
  animals: Animal[] = [];
  // animals: Animal[] = [
  //   new Animal('Hund', 13, false, true, false),
  //   new Animal('Häst', 2, false, false, false),
  //   new Animal('Fågel', 1, true, true, false),
  // ];
  feeding(animals: Animal) {
    animals.isFed = true;
    this.feedingCounter += 1;
  }
  ngOnInit() {
    this.animals = this.animalsService.getAnimals();
  }
}
