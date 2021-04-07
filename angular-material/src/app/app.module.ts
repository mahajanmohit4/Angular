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
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
