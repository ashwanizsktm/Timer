import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@base/app/material.module';
// import { LoaderComponent } from './components/loader/loader.component';
import { TimerComponent } from './components/timer/timer.component'
// import { CountdownModule } from 'ngx-countdown';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@NgModule({
  declarations: [
    // LoaderComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    // CountdownModule
  ],
  exports: [
    // LoaderComponent,
    TimerComponent,
    // CountdownModule
  ]
})
export class SharedModule { }
