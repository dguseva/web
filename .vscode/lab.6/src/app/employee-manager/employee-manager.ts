import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Employee } from '../classes/employee';
import { Engineer } from '../classes/engineer';

@Component({
  selector: 'app-employee-manager',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './employee-manager.html',
  styleUrl: './employee-manager.css'
})
export class EmployeeManagerComponent {

  name: string = '';
  p: number | null = null;
  k: number | null = null;
  n: number | null = null;

  employeeIncome: number | null = null;
  engineerIncome: number | null = null;

  employee: Employee | null = null;
  engineer: Engineer | null = null;

  calculate(): void {

    if (
      !this.name.trim() ||
      this.p === null ||
      this.k === null ||
      this.n === null
    ) {
      return;
    }

    this.employee = new Employee(
      this.name.trim(),
      this.p,
      this.k
    );

    this.engineer = new Engineer(
      this.name.trim(),
      this.p,
      this.k,
      this.n
    );

    this.employeeIncome = this.employee.calculateIncome();

    this.engineerIncome = this.engineer.calculateIncome();
  }

  reset(): void {
    this.name = '';
    this.p = null;
    this.k = null;
    this.n = null;

    this.employeeIncome = null;
    this.engineerIncome = null;

    this.employee = null;
    this.engineer = null;
  }
}

