import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoTableComponent } from './demo-table/demo-table.component';
import { Demotable1Component } from './demotable1/demotable1.component';
import { Demotable2Component } from './demotable2/demotable2.component';
import { MatrixTableComponent } from './matrix-table/matrix-table.component';
import { MatrixTable1Component } from './matrix-table1/matrix-table1.component';
import { PravinSethComponent } from './pravin-seth/pravin-seth.component';
import { PravinSeth1Component } from './pravin-seth1/pravin-seth1.component';
const routes: Routes = [
  {
    path: '',
    component: PravinSeth1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPracticeRoutingModule {}
