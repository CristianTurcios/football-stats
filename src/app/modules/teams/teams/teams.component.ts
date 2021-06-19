import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Team } from 'src/app/interfaces/team';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  errorMessage: string = 'No results available with that filters 😔';
  paramsSuscription: Subscription | undefined;
  teamsSuscription: Subscription | undefined;
  league: number = 0;
  year: number = new Date().getFullYear();
  teams: Array<Team> = [];

  initial: number = 0;
  pageSize: number = 12;
  limit: number = this.pageSize;
  index: number = 0;
  countTeams: number = 0;
  paginatedTeams: Array<Team> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private footballService: FootballService
  ) { }

  ngOnInit(): void {
    this.paramsSuscription = this.activatedRoute.params.subscribe(params => {
      const { league, year } = params;
      this.league = league;
      this.year = year;
      this.loading = true;
      this.getTeams(league, year);
      window.scrollTo(0, 0);
    });
  }

  doFilter = ($event: any) => {
    const value = $event.target.value.trim().toLocaleLowerCase();
    const filtered = this.teams.filter((element: Team) => {
      const name = element.team.name.trim().toLocaleLowerCase();
      return name.includes(value);
    });

    this.paginatedTeams = filtered;
    if (filtered.length === 0) {
      this.errorMessage = 'No results available with that filters 😔';
    }
  }

  onChangePage($event: any): void {
    if ($event.pageIndex > this.index) {
      this.initial += this.pageSize;
      this.limit += this.pageSize;
      this.paginatedTeams = this.teams.slice(this.initial, this.limit);
    } else {
      this.initial -= this.pageSize;
      this.limit -= this.pageSize;
      this.paginatedTeams = this.teams.slice(this.initial, this.limit)
    }
    this.index = $event.pageIndex;
  }

  getTeams(league: number, year: number): void {
    this.teamsSuscription = this.footballService.getTeams(league, year).subscribe((resp) => {
      if (resp.errors.length === 0) {
        this.teams = resp.response;
        this.countTeams = this.teams.length;
        this.paginatedTeams = this.teams.slice(this.initial, this.pageSize);
      } else {
        this.errorMessage = 'The api limit was reached 😔';
      }     
      this.loading = false;
    }, (error) => {
      console.error(error);
    });
  }

  redirectToTeam(team: any): void {
    this.router.navigate([`/teams/league/${this.league}/team/${team.team.id}/year/${this.year}`]);
  }

  ngOnDestroy() {
    this.teamsSuscription?.unsubscribe();
    this.paramsSuscription?.unsubscribe();
  }
}
