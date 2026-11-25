import { Employee } from './employee';

export class Engineer extends Employee {
  n: number;

  constructor(
    name: string,
    p: number,
    k: number,
    n: number
  ) {
    super(name, p, k);
    this.n = n;
  }

  override calculateIncome(): number {
    return super.calculateIncome() * (this.n / 10);
  }
}
