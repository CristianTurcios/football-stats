import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams/teams.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TeamsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule { }
