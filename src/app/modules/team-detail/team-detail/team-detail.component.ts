import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TeamDetail } from 'src/app/interfaces/team-detail';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  loading: boolean = false;
  errorMessage: string = 'No results available with that filters 😔';
  paramsSuscription: Subscription | undefined;
  teamDetailSuscription: Subscription | undefined;
  league: number = 0;
  year: number = new Date().getFullYear();
  teamDetail: Array<TeamDetail> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private footballService: FootballService
  ) { }

  ngOnInit(): void {
    this.paramsSuscription = this.activatedRoute.params.subscribe(params => {
      const { league, team, year } = params;
      this.league = league;
      this.year = year;
      this.loading = true;
      this.getTeamDetail(league, team, year);
      window.scrollTo(0, 0);
    });
  }

  getTeamDetail(league: number, team: number, year: number): void {
    this.teamDetailSuscription = this.footballService.getTeamDetail(league, team, year).subscribe((resp) => {
      if (resp.errors.length === 0) {
        this.teamDetail = resp.response;
      } else {
        this.errorMessage = 'The api limit was reached 😔';
      }
      this.loading = false;
    }, (error) => {
      console.error(error);
    });
  }

  goBack(): void {
    this.router.navigate([`/teams/league/${this.league}/year/${this.year}`]);
  };

  ngOnDestroy() {
    this.paramsSuscription?.unsubscribe();
    this.teamDetailSuscription?.unsubscribe();
  }
}
