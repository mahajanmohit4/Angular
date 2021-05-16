import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPracticeRoutingModule } from './new-practice-routing.module';
import { DemoTableComponent } from './demo-table/demo-table.component';

@NgModule({
  declarations: [DemoTableComponent],
  imports: [CommonModule, NewPracticeRoutingModule],
})
export class NewPracticeModule {}
