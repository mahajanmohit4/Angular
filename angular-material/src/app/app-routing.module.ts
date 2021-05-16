import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientCategorysPricingComponent } from './components/add-client-categorys-pricing/add-client-categorys-pricing.component';
import { CategorysPricingsComponent } from './components/categorys-pricings/categorys-pricings.component';
import { ClientCategorysPricingComponent } from './components/client-categorys-pricing/client-categorys-pricing.component';
import { TeamMemberComponent } from './components/Client-Components/team-member/team-member.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { FormComponent } from './components/form/form.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { ModifyCategoryPricingComponent } from './components/modify-category-pricing/modify-category-pricing.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TableComponent } from './components/table/table.component';
import { ChildListComponent } from './components/tabs/child-list/child-list.component';
import { DemoListComponent } from './components/tabs/demo-list/demo-list.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { MyCounterComponent } from './ngrx/counter/my-counter/my-counter.component';
import { BbokComponent } from './ngrx/state/bbok/bbok.component';
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
    path: 'grid-list',
    component: GridListComponent,
    canActivate: [AuthorrestricService],
  },
  {
    path: 'stepper',
    component: StepperComponent,
  },
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: '',
        component: DemoListComponent,
      },
      {
        path: 'child',
        component: ChildListComponent,
      },
    ],
  },
  {
    path: 'expansion-panel',
    component: ExpansionPanelComponent,
  },
  {
    path: 'table',
    component: TableComponent,
    pathMatch: 'full',
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  { path: 'form-event', component: FormEventComponent },
  {
    path: 'of-from',
    component: OfFromComponent,
  },
  {
    path: 'to-array',
    component: ToArrayComponent,
  },
  {
    path: 'observable',
    component: ObservableComponent,
  },
  {
    path: 'operator',
    component: OperatorsComponent,
  },
  {
    path: 'operator2',
    component: Operator2Component,
  },
  {
    path: 'c_categorys_pricing',
    component: ClientCategorysPricingComponent,
  },
  {
    path: 'add-client',
    component: AddClientCategorysPricingComponent,
  },
  {
    path: 'categorys_pricings',
    component: CategorysPricingsComponent,
  },
  {
    path: 'modify_cp/:id',
    component: ModifyCategoryPricingComponent,
  },
  {
    path: 'header',
    component: HeaderBarComponent,
  },
  {
    path: 'team-member',
    component: TeamMemberComponent,
  },
  {
    path: 'ngrx',
    // component: MyCounterComponent,
    component: BbokComponent,
  },
  {
    path: 'demotable',
    loadChildren: () =>
      import('../app/New-Prectice/new-practice.module').then(
        (m) => m.NewPracticeModule
      ),
  },
  // { path: "", redirectTo: "/grid-list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
