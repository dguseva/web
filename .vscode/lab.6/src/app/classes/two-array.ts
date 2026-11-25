export class TwoDimensionalArray {

  elements: number[][];

  constructor(elements: number[][]) {
    this.elements = elements;
  }

  // Обчислення квадратів усіх елементів матриці
  calculateSquares(): number[][] {
    return this.elements.map(row =>
      row.map(x => x * x)
    );
  }
}
