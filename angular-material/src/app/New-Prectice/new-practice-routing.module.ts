import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoTableComponent } from './demo-table/demo-table.component';
import { Demotable1Component } from './demotable1/demotable1.component';
import { Demotable2Component } from './demotable2/demotable2.component';
import { MatrixTableComponent } from './matrix-table/matrix-table.component';
import { PravinSethComponent } from './pravin-seth/pravin-seth.component';
const routes: Routes = [
  {
    path: '',
    component: MatrixTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPracticeRoutingModule {}
