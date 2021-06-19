import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Competition } from 'src/app/interfaces/competition';
import { FootballService } from 'src/app/services/football.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  errorMessage: string = 'No results available with that filters 😔';
  competitionsSuscription: Subscription | undefined;
  competitions: Array<Competition> = [];
  years: Array<number> = [];
  initial: number = 0;
  pageSize: number = 12;
  limit: number = this.pageSize;
  index: number = 0;
  countCompetitions: number = 0;
  selected: number = new Date().getFullYear();
  paginatedCompetitions: Array<Competition> = [];

  constructor(
    private router: Router,
    private footballService: FootballService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    window.scrollTo(0, 0);
    this.getPreviousYears();
    this.getCompetitions(new Date().getFullYear());
  }

  doFilter = ($event: any) => {
    const value = $event.target.value.trim().toLocaleLowerCase();
    const filtered = this.competitions.filter((element: Competition) => {
      const name = element.league.name.trim().toLocaleLowerCase();
      return name.includes(value);
    });
    
    this.paginatedCompetitions = filtered;
    if (filtered.length === 0) {
     this.errorMessage = 'No results available with that filters 😔';
    }
  }

  getPreviousYears(): void {
    const year = new Date().getFullYear();
    for (let i = 0; i < 14; i++) {
      this.years.push(year - i);
    }
  }

  onChangePage($event: any): void {    
    if ($event.pageIndex > this.index) {
      this.initial += this.pageSize;
      this.limit += this.pageSize;
      this.paginatedCompetitions = this.competitions.slice(this.initial, this.limit);
    } else {
      this.initial -= this.pageSize;
      this.limit -= this.pageSize;
      this.paginatedCompetitions = this.competitions.slice(this.initial, this.limit)
    }
    this.index = $event.pageIndex;
  }

  onYearChanged(e: any): void {
    this.loading = true;
    this.competitions = [];
    this.paginatedCompetitions = [];
    this.initial = 0;
    this.index = 0;
    this.countCompetitions = 0;
    this.getCompetitions(parseInt(e));
  }

  getCompetitions(year: number) {
    this.competitionsSuscription = this.footballService.getCompetitions(year).subscribe((resp) => {
      if (resp.errors.length === 0) {
        this.competitions = resp.response;
        this.countCompetitions = this.competitions.length;
        this.paginatedCompetitions = this.competitions.slice(this.initial, this.pageSize);
      } else {
        this.errorMessage = 'The api limit was reached 😔';
      }
      this.loading = false;
    }, (error) => {
      console.error(error);
    });
  }

  redirectToTeams(competition: any): void {
    this.router.navigate([`/teams/league/${competition.league.id}/year/${this.selected}`]);
  }

  ngOnDestroy() {
    this.competitionsSuscription?.unsubscribe();
  }
}
