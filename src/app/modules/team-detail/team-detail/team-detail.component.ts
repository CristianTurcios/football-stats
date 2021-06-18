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
  // teamDetail: Array<TeamDetail> = [];
  teamDetail: Array<TeamDetail> = [
    {
      "player": {
        "id": 367,
        "name": "Iker Casillas Fernández",
        "firstname": "Iker",
        "lastname": "Casillas Fernández",
        "age": 38,
        "birth": {
          "date": "1981-05-20",
          "place": "Móstoles",
          "country": "Spain"
        },
        "nationality": "Spain",
        "height": "182 cm",
        "weight": "84 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/367.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 10,
            "lineups": 10,
            "minutes": 930,
            "number": null,
            "position": "Goalkeeper",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 1
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 0,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 105404,
        "name": "Ricardo Izecson dos Santos Leite",
        "firstname": "Ricardo Izecson",
        "lastname": "dos Santos Leite",
        "age": 35,
        "birth": {
          "date": "1982-04-22",
          "place": "Brasília",
          "country": "Brazil"
        },
        "nationality": "Brazil",
        "height": "186 cm",
        "weight": "82 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/105404.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 8,
            "lineups": 4,
            "minutes": 440,
            "number": null,
            "position": "Midfielder",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 4,
            "out": 2,
            "bench": 5
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 3,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 90660,
        "name": "Hamit Altıntop",
        "firstname": "Hamit",
        "lastname": "Altıntop",
        "age": 35,
        "birth": {
          "date": "1982-12-08",
          "place": "Gelsenkirchen",
          "country": "Germany"
        },
        "nationality": "Turkey",
        "height": "183 cm",
        "weight": "83 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/90660.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 4,
            "lineups": 1,
            "minutes": 176,
            "number": null,
            "position": "Midfielder",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 3,
            "out": 0,
            "bench": 5
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 0,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 90521,
        "name": "Álvaro Arbeloa Coca",
        "firstname": "Álvaro",
        "lastname": "Arbeloa Coca",
        "age": 34,
        "birth": {
          "date": "1983-01-17",
          "place": "Salamanca",
          "country": "Spain"
        },
        "nationality": "Spain",
        "height": "183 cm",
        "weight": "79 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/90521.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 9,
            "lineups": 8,
            "minutes": 735,
            "number": null,
            "position": "Defender",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 1,
            "out": 1,
            "bench": 1
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 0,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 2,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 90657,
        "name": "Xabier Alonso Olano",
        "firstname": "Xabier",
        "lastname": "Alonso Olano",
        "age": 36,
        "birth": {
          "date": "1981-11-25",
          "place": "Tolosa",
          "country": "Spain"
        },
        "nationality": "Spain",
        "height": "183 cm",
        "weight": "80 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/90657.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 10,
            "lineups": 9,
            "minutes": 827,
            "number": null,
            "position": "Midfielder",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 1,
            "out": 1,
            "bench": 2
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 0,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 4,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 1458,
        "name": "M. Özil",
        "firstname": "Mesut",
        "lastname": "Özil",
        "age": 33,
        "birth": {
          "date": "1988-10-15",
          "place": "Gelsenkirchen",
          "country": "Germany"
        },
        "nationality": "Germany",
        "height": "180 cm",
        "weight": "76 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/1458.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 10,
            "lineups": 10,
            "minutes": 807,
            "number": null,
            "position": "Midfielder",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 0,
            "out": 8,
            "bench": 2
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 2,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 25325,
        "name": "N. Şahin",
        "firstname": "Nuri",
        "lastname": "Şahin",
        "age": 33,
        "birth": {
          "date": "1988-09-05",
          "place": "Lüdenscheid",
          "country": "Germany"
        },
        "nationality": "Turkey",
        "height": "180 cm",
        "weight": "73 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/25325.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 4,
            "lineups": 4,
            "minutes": 354,
            "number": null,
            "position": "Midfielder",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 0,
            "out": 1,
            "bench": 1
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 0,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 330,
        "name": "José Callejón",
        "firstname": "José María",
        "lastname": "Callejón Bueno",
        "age": 34,
        "birth": {
          "date": "1987-02-11",
          "place": "Motril",
          "country": "Spain"
        },
        "nationality": "Spain",
        "height": "178 cm",
        "weight": "73 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/330.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 5,
            "lineups": 3,
            "minutes": 306,
            "number": null,
            "position": "Attacker",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 2,
            "out": 1,
            "bench": 5
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 5,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 47337,
        "name": "Esteban Félix Granero Molina",
        "firstname": "Esteban Félix",
        "lastname": "Granero Molina",
        "age": 34,
        "birth": {
          "date": "1987-07-02",
          "place": "Madrid",
          "country": "Spain"
        },
        "nationality": "Spain",
        "height": "180 cm",
        "weight": "78 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/47337.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 7,
            "lineups": 2,
            "minutes": 209,
            "number": null,
            "position": "Midfielder",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 5,
            "out": 2,
            "bench": 9
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 0,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 1,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 15367,
        "name": "Tomás Mejías Osorio",
        "firstname": "Tomás",
        "lastname": "Mejías Osorio",
        "age": 32,
        "birth": {
          "date": "1989-01-30",
          "place": "Madrid",
          "country": "Spain"
        },
        "nationality": "Spain",
        "height": "194 cm",
        "weight": "81 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/15367.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 0,
            "lineups": 0,
            "minutes": 0,
            "number": null,
            "position": "Goalkeeper",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 1
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 0,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 314,
        "name": "Albiol",
        "firstname": "Raúl",
        "lastname": "Albiol Tortajada",
        "age": 36,
        "birth": {
          "date": "1985-09-04",
          "place": "Villamarchante",
          "country": "Spain"
        },
        "nationality": "Spain",
        "height": "187 cm",
        "weight": "74 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/314.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 5,
            "lineups": 1,
            "minutes": 190,
            "number": null,
            "position": "Defender",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 4,
            "out": 0,
            "bench": 9
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 0,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 1,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 868,
        "name": "S. Khedira",
        "firstname": "Sami",
        "lastname": "Khedira",
        "age": 34,
        "birth": {
          "date": "1987-04-04",
          "place": "Stuttgart",
          "country": "Germany"
        },
        "nationality": "Germany",
        "height": "189 cm",
        "weight": "90 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/868.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 8,
            "lineups": 8,
            "minutes": 721,
            "number": null,
            "position": "Midfielder",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 0,
            "out": 1,
            "bench": 2
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 1,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 1,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 738,
        "name": "Sergio Ramos",
        "firstname": "Sergio",
        "lastname": "Ramos García",
        "age": 35,
        "birth": {
          "date": "1986-03-30",
          "place": "Camas",
          "country": "Spain"
        },
        "nationality": "Spain",
        "height": "184 cm",
        "weight": "82 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/738.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 11,
            "lineups": 11,
            "minutes": 976,
            "number": null,
            "position": "Defender",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 0,
            "out": 1,
            "bench": 0
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 1,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 2,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 743,
        "name": "Marcelo",
        "firstname": "Marcelo",
        "lastname": "Vieira da Silva Júnior",
        "age": 33,
        "birth": {
          "date": "1988-05-12",
          "place": "Rio de Janeiro",
          "country": "Brazil"
        },
        "nationality": "Brazil",
        "height": "174 cm",
        "weight": "75 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/743.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 7,
            "lineups": 5,
            "minutes": 466,
            "number": null,
            "position": "Defender",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 2,
            "out": 1,
            "bench": 3
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 0,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 2,
            "yellowred": 1,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 21574,
        "name": "Pedro Mendes",
        "firstname": "Pedro Filipe",
        "lastname": "Teodósio Mendes",
        "age": 31,
        "birth": {
          "date": "1990-10-01",
          "place": "Neuchâtel",
          "country": "Switzerland"
        },
        "nationality": "Portugal",
        "height": "187 cm",
        "weight": "78 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/21574.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 1,
            "lineups": 0,
            "minutes": 23,
            "number": null,
            "position": "Defender",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 1,
            "out": 0,
            "bench": 1
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 0,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 27,
        "name": "Adán",
        "firstname": "Antonio",
        "lastname": "Adán Garrido",
        "age": 34,
        "birth": {
          "date": "1987-05-13",
          "place": "Madrid",
          "country": "Spain"
        },
        "nationality": "Spain",
        "height": "190 cm",
        "weight": "86 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/27.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 2,
            "lineups": 2,
            "minutes": 180,
            "number": null,
            "position": "Goalkeeper",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 10
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 0,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 41176,
        "name": "Fábio Coentrão",
        "firstname": "Fábio Alexandre",
        "lastname": "da Silva Coentrão",
        "age": 33,
        "birth": {
          "date": "1988-03-11",
          "place": "Vila do Conde",
          "country": "Portugal"
        },
        "nationality": "Portugal",
        "height": "178 cm",
        "weight": "66 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/41176.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 8,
            "lineups": 7,
            "minutes": 607,
            "number": null,
            "position": "Defender",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 1,
            "out": 2,
            "bench": 2
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 0,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 2,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 2297,
        "name": "G. Higuaín",
        "firstname": "Gonzalo Gerardo",
        "lastname": "Higuaín",
        "age": 34,
        "birth": {
          "date": "1987-12-10",
          "place": "Brest",
          "country": "France"
        },
        "nationality": "Argentina",
        "height": "186 cm",
        "weight": "89 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/2297.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 12,
            "lineups": 5,
            "minutes": 526,
            "number": null,
            "position": "Attacker",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 7,
            "out": 3,
            "bench": 7
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 3,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 2,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 1585,
        "name": "Jesé",
        "firstname": "Jesé",
        "lastname": "Rodríguez Ruiz",
        "age": 28,
        "birth": {
          "date": "1993-02-26",
          "place": "Las Palmas de Gran Canaria",
          "country": "Spain"
        },
        "nationality": "Spain",
        "height": "178 cm",
        "weight": "72 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/1585.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 0,
            "lineups": 0,
            "minutes": 0,
            "number": null,
            "position": "Attacker",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 1
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 0,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    },
    {
      "player": {
        "id": 266,
        "name": "Á. Di María",
        "firstname": "Ángel Fabián",
        "lastname": "Di María Hernández",
        "age": 33,
        "birth": {
          "date": "1988-02-14",
          "place": "Rosario",
          "country": "Argentina"
        },
        "nationality": "Argentina",
        "height": "180 cm",
        "weight": "75 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/266.png"
      },
      "statistics": [
        {
          "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media.api-sports.io/football/teams/541.png"
          },
          "league": {
            "id": 2,
            "name": "UEFA Champions League",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/2.png",
            "flag": null,
            "season": 2011
          },
          "games": {
            "appearences": 7,
            "lineups": 5,
            "minutes": 455,
            "number": null,
            "position": "Midfielder",
            "rating": null,
            "captain": false
          },
          "substitutes": {
            "in": 2,
            "out": 4,
            "bench": 3
          },
          "shots": {
            "total": null,
            "on": null
          },
          "goals": {
            "total": 2,
            "conceded": null,
            "assists": null,
            "saves": null
          },
          "passes": {
            "total": null,
            "key": null,
            "accuracy": null
          },
          "tackles": {
            "total": null,
            "blocks": null,
            "interceptions": null
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": null,
            "success": null,
            "past": null
          },
          "fouls": {
            "drawn": null,
            "committed": null
          },
          "cards": {
            "yellow": 1,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": null,
            "commited": null,
            "scored": null,
            "missed": null,
            "saved": null
          }
        }
      ]
    }
  ];

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
