import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';

const routes: Routes = [
  {path:"", component:Task1Component},
  {path:"2", component:Task2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
