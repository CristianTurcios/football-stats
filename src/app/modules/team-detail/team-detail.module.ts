import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamDetailRoutingModule } from './team-detail-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    TeamDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatPaginatorModule,
    TeamDetailRoutingModule
  ]
})
export class TeamDetailModule { }
