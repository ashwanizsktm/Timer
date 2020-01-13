import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { MaterialModule } from '@base/app/material.module';
import { MaterialModule } from '../material.module';
import { TimerComponent } from './components/timer/timer.component';
import  { MinuteSecondsPipe } from './components/timer/timer.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TimerComponent,
    MinuteSecondsPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    TimerComponent,
    MaterialModule
  ]
})
export class SharedModule { }
