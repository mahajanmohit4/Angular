import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoTableComponent } from './demo-table/demo-table.component';
import { Demotable1Component } from './demotable1/demotable1.component';

const routes: Routes = [
  {
    path: '',
    component: Demotable1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPracticeRoutingModule {}
