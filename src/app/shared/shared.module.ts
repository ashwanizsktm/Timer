import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@base/app/material.module';
// import { LoaderComponent } from './components/loader/loader.component';
import { TimerComponent } from './components/timer/timer.component'


@NgModule({
  declarations: [
    // LoaderComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    // LoaderComponent,
    TimerComponent
  ]
})
export class SharedModule { }
