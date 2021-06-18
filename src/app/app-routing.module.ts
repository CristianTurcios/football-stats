import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'teams/league/:league/year/:year',
    loadChildren: () => import('./modules/teams/teams.module').then(m => m.TeamsModule)
  },
  {
    path: 'teams/league/:league/team/:team/year/:year',
    loadChildren: () => import('./modules/team-detail/team-detail.module').then(m => m.TeamDetailModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
