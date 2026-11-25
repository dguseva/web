import { Routes } from '@angular/router';

import { EmployeeManagerComponent } from './employee-manager/employee-manager';
import { ArrayOneComponent } from './array-one/array-one';
import { ArrayTwoComponent } from './array-two/array-two';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'array-one',
    pathMatch: 'full'
  },

  {
    path: 'employee',
    component: EmployeeManagerComponent
  },

  {
    path: 'array-one',
    component: ArrayOneComponent
  },

  {
    path: 'array-two',
    component: ArrayTwoComponent
  }

];

