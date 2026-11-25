export class Employee {
  name: string;
  p: number;
  k: number;

  constructor(name: string, p: number, k: number) {
    this.name = name;
    this.p = p;
    this.k = k;
  }

  calculateIncome(): number {
    return this.k * this.p;
  }
}
