import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPracticeRoutingModule } from './new-practice-routing.module';
import { DemoTableComponent } from './demo-table/demo-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demotable1Component } from './demotable1/demotable1.component';
import { Demotable2Component } from './demotable2/demotable2.component';
import { MatTableModule } from '@angular/material/table';
import { PravinSethComponent } from './pravin-seth/pravin-seth.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatrixTableComponent } from './matrix-table/matrix-table.component';
import { MatrixTable1Component } from './matrix-table1/matrix-table1.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    DemoTableComponent,
    Demotable1Component,
    Demotable2Component,
    PravinSethComponent,
    MatrixTableComponent,
    MatrixTable1Component,
  ],
  imports: [
    CommonModule,
    NewPracticeRoutingModule,
    FormsModule,
    MatTableModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class NewPracticeModule {}
