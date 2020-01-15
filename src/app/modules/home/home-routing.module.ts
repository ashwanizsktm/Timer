import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from '@base/app/shared/components/timer/timer.component';
import { LoginFormComponent } from '@base/app/shared/components/login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'timer',
    component: TimerComponent
  },

  {
    path: 'login-form',
    component: LoginFormComponent
  }

  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
