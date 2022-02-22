import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from '../models/Animal';

@Component({
  selector: 'app-print-animal',
  templateUrl: './print-animal.component.html',
  styleUrls: ['./print-animal.component.scss'],
})
export class PrintAnimalComponent implements OnInit {
  @Input() animal: Animal = new Animal('', 0, false, false, false);

  constructor() {}
  @Output() fed = new EventEmitter<Animal>();
  ngOnInit(): void {}
  feeding() {
    this.fed.emit(this.animal);
  }
}
