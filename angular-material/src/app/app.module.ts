import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { FormComponent } from './components/form/form.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TableComponent } from './components/table/table.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormEventComponent } from './rxjs_components/form-event/form-event.component';
import { DemoComponent } from './rxjs_components/demo/demo.component';
import { OfFromComponent } from './rxjs_components/of-from/of-from.component';
import { ToArrayComponent } from './rxjs_components/to-array/to-array.component';
import { ObservableComponent } from './rxjs_components/observable/observable.component';
import { OperatorsComponent } from './rxjs_components/operators/operators.component';
import { Operator2Component } from './rxjs_components/operator2/operator2.component';
import { ClientCategorysPricingComponent } from './components/client-categorys-pricing/client-categorys-pricing.component';
import { HttpClientModule } from '@angular/common/http';
import { AddClientCategorysPricingComponent } from './components/add-client-categorys-pricing/add-client-categorys-pricing.component';
import { CategorysPricingsComponent } from './components/categorys-pricings/categorys-pricings.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/counter/state/counter.reducer';
import { ModifyCategoryPricingComponent } from './components/modify-category-pricing/modify-category-pricing.component';
import { TeamMemberComponent } from './components/Client-Components/team-member/team-member.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpansionPanelComponent,
    FormComponent,
    GridListComponent,
    HeaderBarComponent,
    SideBarComponent,
    StepperComponent,
    TableComponent,
    TabsComponent,
    FormEventComponent,
    DemoComponent,
    OfFromComponent,
    ToArrayComponent,
    ObservableComponent,
    OperatorsComponent,
    Operator2Component,
    ClientCategorysPricingComponent,
    AddClientCategorysPricingComponent,
    CategorysPricingsComponent,
    ModifyCategoryPricingComponent,
    TeamMemberComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    StoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
