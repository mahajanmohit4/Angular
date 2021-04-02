import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
const materialComponents  = [
  MatButtonModule
]


@NgModule({
  imports:[MatButtonModule],
  exports:[MatButtonModule]
})
export class MaterialModule { }
