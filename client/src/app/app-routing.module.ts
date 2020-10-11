import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './session/session.component';
import { SessionListComponent } from './session-list/session-list.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: 'bookings', component: SessionComponent },
  { path: 'sessions', component: SessionListComponent },
  { path: 'schedules', component: ScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
