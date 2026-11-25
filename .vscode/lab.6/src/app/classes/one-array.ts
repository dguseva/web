export class OneDimensionalArray {

  elements: number[];

  constructor(elements: number[]) {
    this.elements = elements;
  }

  // Обчислення квадратів елементів
  calculateSquares(): number[] {
    return this.elements.map(x => x * x);
  }

  // Обчислення квадратних коренів
  calculateRoots(): (number | null)[] {
    return this.elements.map(x =>
      x >= 0 ? Math.sqrt(x) : null
    );
  }
}

