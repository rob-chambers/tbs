import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SessionComponent } from './session/session.component';
import { SessionListComponent } from './session-list/session-list.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { BookingsComponent } from './bookings/bookings.component';

const routes: Routes = [
  { path: '', component: BookingsComponent },
  { path: 'bookings', component: SessionComponent },
  { path: 'sessions', component: SessionListComponent },
  { path: 'schedules', component: ScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule { }
