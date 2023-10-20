import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';



@NgModule({
  declarations: [
    SeriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SeriesComponent]
})
export class SeriesModule { }
