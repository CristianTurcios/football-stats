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
  // competitions: Array<Competition> = [];
  competitions: Array<Competition> = [
    {
      "league": {
        "id": 4,
        "name": "Euro Championship",
        "type": "Cup",
        "logo": "https://media.api-sports.io/football/leagues/4.png"
      },
      "country": {
        "name": "World",
        "code": null,
        "flag": null
      },
      "seasons": [
        {
          "year": 2008,
          "start": "2008-06-07",
          "end": "2008-06-29",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": false,
            "players": false,
            "top_scorers": false,
            "top_assists": false,
            "top_cards": false,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2012,
          "start": "2012-06-08",
          "end": "2012-07-01",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": false,
            "players": false,
            "top_scorers": false,
            "top_assists": false,
            "top_cards": false,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2016,
          "start": "2016-06-10",
          "end": "2016-07-10",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": false,
            "top_scorers": false,
            "top_assists": false,
            "top_cards": false,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2020,
          "start": "2019-03-21",
          "end": "2021-06-23",
          "current": true,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": true
          }
        }
      ]
    },
    {
      "league": {
        "id": 21,
        "name": "Confederations Cup",
        "type": "Cup",
        "logo": "https://media.api-sports.io/football/leagues/21.png"
      },
      "country": {
        "name": "World",
        "code": null,
        "flag": null
      },
      "seasons": [
        {
          "year": 2009,
          "start": "2009-06-14",
          "end": "2009-06-28",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": false,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2013,
          "start": "2013-06-15",
          "end": "2013-06-30",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": false,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2017,
          "start": "2017-06-17",
          "end": "2017-07-02",
          "current": true,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": false
            },
            "standings": false,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        }
      ]
    },
    {
      "league": {
        "id": 61,
        "name": "Ligue 1",
        "type": "League",
        "logo": "https://media.api-sports.io/football/leagues/61.png"
      },
      "country": {
        "name": "France",
        "code": "FR",
        "flag": "https://media.api-sports.io/flags/fr.svg"
      },
      "seasons": [
        {
          "year": 2010,
          "start": "2010-08-07",
          "end": "2011-05-29",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2011,
          "start": "2011-08-06",
          "end": "2012-05-20",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2012,
          "start": "2012-08-10",
          "end": "2013-05-26",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2013,
          "start": "2013-08-09",
          "end": "2014-05-17",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2014,
          "start": "2014-08-08",
          "end": "2015-05-23",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2015,
          "start": "2015-08-07",
          "end": "2016-05-14",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2016,
          "start": "2016-08-12",
          "end": "2017-05-20",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2017,
          "start": "2017-08-04",
          "end": "2018-05-19",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2018,
          "start": "2018-08-10",
          "end": "2019-05-24",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2019,
          "start": "2019-08-09",
          "end": "2020-05-23",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2020,
          "start": "2020-08-21",
          "end": "2021-05-30",
          "current": true,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": true,
            "predictions": true,
            "odds": false
          }
        }
      ]
    },
    {
      "league": {
        "id": 144,
        "name": "Jupiler Pro League",
        "type": "League",
        "logo": "https://media.api-sports.io/football/leagues/144.png"
      },
      "country": {
        "name": "Belgium",
        "code": "BE",
        "flag": "https://media.api-sports.io/flags/be.svg"
      },
      "seasons": [
        {
          "year": 2010,
          "start": "2010-07-30",
          "end": "2011-05-16",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2011,
          "start": "2011-07-29",
          "end": "2012-05-20",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2012,
          "start": "2012-07-28",
          "end": "2013-05-26",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2013,
          "start": "2013-07-26",
          "end": "2014-05-18",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2014,
          "start": "2014-07-25",
          "end": "2015-05-31",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2015,
          "start": "2015-07-24",
          "end": "2016-05-29",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2016,
          "start": "2016-07-29",
          "end": "2017-05-21",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2017,
          "start": "2017-07-28",
          "end": "2018-05-20",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2018,
          "start": "2018-07-27",
          "end": "2019-05-19",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2019,
          "start": "2019-07-26",
          "end": "2020-03-15",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2020,
          "start": "2020-08-08",
          "end": "2021-05-23",
          "current": true,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": true,
            "predictions": true,
            "odds": false
          }
        }
      ]
    },
    {
      "league": {
        "id": 71,
        "name": "Serie A",
        "type": "League",
        "logo": "https://media.api-sports.io/football/leagues/71.png"
      },
      "country": {
        "name": "Brazil",
        "code": "BR",
        "flag": "https://media.api-sports.io/flags/br.svg"
      },
      "seasons": [
        {
          "year": 2010,
          "start": "2010-05-08",
          "end": "2010-11-28",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2011,
          "start": "2011-05-21",
          "end": "2011-12-04",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2012,
          "start": "2012-05-19",
          "end": "2012-12-02",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2013,
          "start": "2013-05-25",
          "end": "2013-12-08",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2014,
          "start": "2014-04-19",
          "end": "2014-12-07",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2015,
          "start": "2015-05-09",
          "end": "2015-12-06",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2016,
          "start": "2016-05-14",
          "end": "2016-12-11",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2017,
          "start": "2017-05-13",
          "end": "2017-12-03",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2018,
          "start": "2018-04-14",
          "end": "2018-12-02",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2019,
          "start": "2019-04-27",
          "end": "2019-12-08",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2020,
          "start": "2020-08-08",
          "end": "2021-02-26",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2021,
          "start": "2021-05-29",
          "end": "2021-12-05",
          "current": true,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": true
          }
        }
      ]
    },
    {
      "league": {
        "id": 39,
        "name": "Premier League",
        "type": "League",
        "logo": "https://media.api-sports.io/football/leagues/39.png"
      },
      "country": {
        "name": "England",
        "code": "GB",
        "flag": "https://media.api-sports.io/flags/gb.svg"
      },
      "seasons": [
        {
          "year": 2010,
          "start": "2010-08-14",
          "end": "2011-05-17",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2011,
          "start": "2011-08-13",
          "end": "2012-05-13",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2012,
          "start": "2012-08-18",
          "end": "2013-05-19",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2013,
          "start": "2013-08-17",
          "end": "2014-05-11",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2014,
          "start": "2014-08-16",
          "end": "2015-05-24",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2015,
          "start": "2015-08-08",
          "end": "2016-05-17",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2016,
          "start": "2016-08-13",
          "end": "2017-05-21",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2017,
          "start": "2017-08-11",
          "end": "2018-05-13",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2018,
          "start": "2018-08-10",
          "end": "2019-05-12",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2019,
          "start": "2019-08-09",
          "end": "2020-07-26",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2020,
          "start": "2020-09-12",
          "end": "2021-05-23",
          "current": true,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": true,
            "predictions": true,
            "odds": false
          }
        }
      ]
    },
    {
      "league": {
        "id": 78,
        "name": "Bundesliga 1",
        "type": "League",
        "logo": "https://media.api-sports.io/football/leagues/78.png"
      },
      "country": {
        "name": "Germany",
        "code": "DE",
        "flag": "https://media.api-sports.io/flags/de.svg"
      },
      "seasons": [
        {
          "year": 2010,
          "start": "2010-08-20",
          "end": "2011-05-14",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2011,
          "start": "2011-08-05",
          "end": "2012-05-05",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2012,
          "start": "2012-08-24",
          "end": "2013-05-18",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2013,
          "start": "2013-08-09",
          "end": "2014-05-10",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2014,
          "start": "2014-08-22",
          "end": "2015-05-23",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2015,
          "start": "2015-08-14",
          "end": "2016-05-14",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2016,
          "start": "2016-08-26",
          "end": "2017-05-20",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2017,
          "start": "2017-08-18",
          "end": "2018-05-12",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2018,
          "start": "2018-08-24",
          "end": "2019-05-27",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2019,
          "start": "2019-08-16",
          "end": "2020-07-06",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2020,
          "start": "2020-09-18",
          "end": "2021-05-29",
          "current": true,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": true,
            "predictions": true,
            "odds": false
          }
        }
      ]
    },
    {
      "league": {
        "id": 135,
        "name": "Serie A",
        "type": "League",
        "logo": "https://media.api-sports.io/football/leagues/135.png"
      },
      "country": {
        "name": "Italy",
        "code": "IT",
        "flag": "https://media.api-sports.io/flags/it.svg"
      },
      "seasons": [
        {
          "year": 2010,
          "start": "2010-08-28",
          "end": "2011-05-22",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2011,
          "start": "2011-09-09",
          "end": "2012-05-13",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2012,
          "start": "2012-08-25",
          "end": "2013-05-19",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2013,
          "start": "2013-08-24",
          "end": "2014-05-18",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2014,
          "start": "2014-08-30",
          "end": "2015-05-31",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2015,
          "start": "2015-08-22",
          "end": "2016-05-15",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2016,
          "start": "2016-08-20",
          "end": "2017-05-28",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2017,
          "start": "2017-08-19",
          "end": "2018-05-20",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2018,
          "start": "2018-08-18",
          "end": "2019-05-26",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2019,
          "start": "2019-08-24",
          "end": "2020-08-02",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2020,
          "start": "2020-09-19",
          "end": "2021-05-23",
          "current": true,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": true,
            "predictions": true,
            "odds": false
          }
        }
      ]
    },
    {
      "league": {
        "id": 88,
        "name": "Eredivisie",
        "type": "League",
        "logo": "https://media.api-sports.io/football/leagues/88.png"
      },
      "country": {
        "name": "Netherlands",
        "code": "NL",
        "flag": "https://media.api-sports.io/flags/nl.svg"
      },
      "seasons": [
        {
          "year": 2010,
          "start": "2010-08-06",
          "end": "2011-05-29",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2011,
          "start": "2011-08-05",
          "end": "2012-05-20",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2012,
          "start": "2012-08-10",
          "end": "2013-05-26",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2013,
          "start": "2013-08-02",
          "end": "2014-05-18",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2014,
          "start": "2014-08-08",
          "end": "2015-05-31",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2015,
          "start": "2015-08-08",
          "end": "2016-05-22",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2016,
          "start": "2016-08-05",
          "end": "2017-05-28",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2017,
          "start": "2017-08-11",
          "end": "2018-05-19",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2018,
          "start": "2018-08-10",
          "end": "2019-05-28",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2019,
          "start": "2019-08-02",
          "end": "2020-05-10",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2020,
          "start": "2020-09-12",
          "end": "2021-05-23",
          "current": false,
          "coverage": {
            "fixtures": {
              "events": true,
              "lineups": true,
              "statistics_fixtures": true,
              "statistics_players": true
            },
            "standings": true,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": true,
            "predictions": true,
            "odds": false
          }
        },
        {
          "year": 2021,
          "start": "2021-08-13",
          "end": "2022-05-15",
          "current": true,
          "coverage": {
            "fixtures": {
              "events": false,
              "lineups": false,
              "statistics_fixtures": false,
              "statistics_players": false
            },
            "standings": false,
            "players": true,
            "top_scorers": true,
            "top_assists": true,
            "top_cards": true,
            "injuries": false,
            "predictions": true,
            "odds": false
          }
        }
      ]
    },
  ];
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