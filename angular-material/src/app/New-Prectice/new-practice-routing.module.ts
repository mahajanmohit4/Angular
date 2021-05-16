import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoTableComponent } from './demo-table/demo-table.component';

const routes: Routes = [
  {
    path: '',
    component: DemoTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPracticeRoutingModule {}
