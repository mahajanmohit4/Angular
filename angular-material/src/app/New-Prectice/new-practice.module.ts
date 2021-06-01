import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPracticeRoutingModule } from './new-practice-routing.module';
import { DemoTableComponent } from './demo-table/demo-table.component';
import { FormsModule } from '@angular/forms';
import { Demotable1Component } from './demotable1/demotable1.component';

@NgModule({
  declarations: [DemoTableComponent, Demotable1Component],
  imports: [CommonModule, NewPracticeRoutingModule, FormsModule],
})
export class NewPracticeModule {}
