import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@base/app/material.module';
import { TimerComponent } from './components/timer/timer.component';
import  { MinuteSecondsPipe } from './components/timer/timer.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    TimerComponent,
    MinuteSecondsPipe,
    LoginFormComponent
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
