import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { FormComponent } from './components/form/form.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TableComponent } from './components/table/table.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DemoComponent } from './rxjs_components/demo/demo.component';
import { FormEventComponent } from './rxjs_components/form-event/form-event.component';

const routes: Routes = [
  {
    path: "grid-list",
    component: GridListComponent

  },
  {
    path: "stepper",
    component: StepperComponent
  },
  {
    path: "tabs",
    component: TabsComponent
  },
  {
    path: "expansion-panel",
    component: ExpansionPanelComponent
  },
  {
    path: "table",
    component: TableComponent,
    pathMatch: "full"
  },
  {
    path: "form",
    component: FormComponent
  },
  {
    path: "demo",
    component: DemoComponent
  },  
  {path: "form-event", component: FormEventComponent},
  { path: "", redirectTo: "/grid-list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
