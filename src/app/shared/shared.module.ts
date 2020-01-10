import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@base/app/material.module';
import { TimerComponent } from './components/timer/timer.component';
import  { MinuteSecondsPipe } from './components/timer/timer.pipe';

@NgModule({
  declarations: [
    TimerComponent,
    MinuteSecondsPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    TimerComponent,
  ]
})
export class SharedModule { }
