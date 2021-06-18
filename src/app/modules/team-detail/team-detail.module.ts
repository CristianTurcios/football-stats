import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamDetailRoutingModule } from './team-detail-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TeamDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TeamDetailRoutingModule
  ]
})
export class TeamDetailModule { }
