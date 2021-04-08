import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCategorysPricingComponent } from './components/client-categorys-pricing/client-categorys-pricing.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { FormComponent } from './components/form/form.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TableComponent } from './components/table/table.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DemoComponent } from './rxjs_components/demo/demo.component';
import { FormEventComponent } from './rxjs_components/form-event/form-event.component';
import { ObservableComponent } from './rxjs_components/observable/observable.component';
import { OfFromComponent } from './rxjs_components/of-from/of-from.component';
import { Operator2Component } from './rxjs_components/operator2/operator2.component';
import { OperatorsComponent } from './rxjs_components/operators/operators.component';
import { ToArrayComponent } from './rxjs_components/to-array/to-array.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { AuthorrestricService } from './services/authorrestric.service';
import { RestrictionService } from './services/restriction.service';

const routes: Routes = [
  {
    path: "grid-list",
    component: GridListComponent,
    canActivate:[AuthorrestricService]

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
  {
    path: "of-from", component: OfFromComponent
  },
  {
    path:"to-array", component:ToArrayComponent
  },
  {
    path: "observable", component:ObservableComponent
  },
  {
    path:"operator", component:OperatorsComponent
  },
  {
    path:"operator2", component:Operator2Component
  },
  {
    path:"c_categorys_pricing", component:ClientCategorysPricingComponent
  }
  // { path: "", redirectTo: "/grid-list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
