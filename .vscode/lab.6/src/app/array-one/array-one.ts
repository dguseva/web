import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { OneDimensionalArray } from '../classes/one-array';

@Component({
  selector: 'app-array-one',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './array-one.html',
  styleUrl: './array-one.css'
})
export class ArrayOneComponent {

  // П'ять елементів масиву
  elements: (number | null)[] = [null, null, null, null, null];

  // Результати обчислень
  squares: number[] = [];
  roots: (number | null)[] = [];

  // Перевірка введених значень
  get isValid(): boolean {
    return this.elements.every(
      x => x !== null && Number.isInteger(x)
    );
  }

  // Обчислення квадратів та коренів
  calculate(): void {

    if (!this.isValid) {
      return;
    }

    const array = new OneDimensionalArray(
      this.elements as number[]
    );

    this.squares = array.calculateSquares();
    this.roots = array.calculateRoots();
  }

  // Очищення форми
  reset(): void {
    this.elements = [null, null, null, null, null];
    this.squares = [];
    this.roots = [];
  }
}
