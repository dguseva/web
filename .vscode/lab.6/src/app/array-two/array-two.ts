import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TwoDimensionalArray } from '../classes/two-array';

@Component({
  selector: 'app-array-two',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './array-two.html',
  styleUrl: './array-two.css'
})
export class ArrayTwoComponent {

  // Матриця розміром 4x3
  matrix: (number | null)[][] = Array.from(
    { length: 4 },
    () => [null, null, null]
  );

  // Матриця результатів
  result: number[][] | null = null;

  // Перевірка введених значень
  get isValid(): boolean {
    return this.matrix.every(row =>
      row.length === 3 &&
      row.every(x =>
        x !== null && Number.isInteger(x)
      )
    );
  }

  // Обчислення квадратів
  calculate(): void {

    if (!this.isValid) {
      return;
    }

    const array = new TwoDimensionalArray(
      this.matrix as number[][]
    );

    this.result = array.calculateSquares();
  }

  // Очищення форми
  reset(): void {

    this.matrix = Array.from(
      { length: 4 },
      () => [null, null, null]
    );

    this.result = null;
  }
}

