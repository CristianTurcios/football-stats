import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Competition } from 'src/app/interfaces/competition';
import { FootballService } from 'src/app/services/football.service';

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
  selected: number = new Date().getFullYear();
  
  constructor(
    private router: Router,
    private footballService:FootballService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    window.scrollTo(0, 0);
    this.getPreviousYears();
    this.getCompetitions(new Date().getFullYear());
  }

  getPreviousYears(): void {
    const year = new Date().getFullYear();
    for (let i = 0; i < 14; i++) {
      this.years.push(year - i);
    }    
  }

  onYearChanged(e: any): void {
    this.loading = true;
    this.competitions = [];
    this.getCompetitions(parseInt(e));
  }

  getCompetitions(year: number) {
    this.competitionsSuscription = this.footballService.getCompetitions(year).subscribe((resp) => {
      if (resp.errors.length === 0) {
        this.competitions = resp.response;
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
