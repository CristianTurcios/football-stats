import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(public http: HttpClient) { }

  getCompetitions(season: number): Observable<any> {
    const url = `${environment.api.url}/leagues?season=${season}`;
    return this.http.get(url);
  }

  getTeams(competitionId: number, season: number): Observable<any> {
    const url = `${environment.api.url}/teams?league=${competitionId}&season=${season}`;
    return this.http.get(url);
  }

  getTeamDetail(competitionId: number, teamId: number, season: number): Observable<any> {
    const url = `${environment.api.url}/players?league=${competitionId}&team=${teamId}&season=${season}`;
    return this.http.get(url);
  }
}
