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
  // teams: Array<Team> = [];
  teams: Array<Team> = [
    {
      "team": {
        "id": 33,
        "name": "Manchester United",
        "country": "England",
        "founded": 1878,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/33.png"
      },
      "venue": {
        "id": 556,
        "name": "Old Trafford",
        "address": "Sir Matt Busby Way",
        "city": "Manchester",
        "capacity": 76212,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/556.png"
      }
    },
    {
      "team": {
        "id": 42,
        "name": "Arsenal",
        "country": "England",
        "founded": 1886,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/42.png"
      },
      "venue": {
        "id": 494,
        "name": "Emirates Stadium",
        "address": "Queensland Road",
        "city": "London",
        "capacity": 60383,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/494.png"
      }
    },
    {
      "team": {
        "id": 49,
        "name": "Chelsea",
        "country": "England",
        "founded": 1905,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/49.png"
      },
      "venue": {
        "id": 519,
        "name": "Stamford Bridge",
        "address": "Fulham Road",
        "city": "London",
        "capacity": 41841,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/519.png"
      }
    },
    {
      "team": {
        "id": 50,
        "name": "Manchester City",
        "country": "England",
        "founded": 1880,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/50.png"
      },
      "venue": {
        "id": 555,
        "name": "Etihad Stadium",
        "address": "Rowsley Street",
        "city": "Manchester",
        "capacity": 55097,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/555.png"
      }
    },
    {
      "team": {
        "id": 79,
        "name": "Lille",
        "country": "France",
        "founded": 1944,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/79.png"
      },
      "venue": {
        "id": 655,
        "name": "Stade Pierre-Mauroy",
        "address": "261, Boulevard de Tournai, l&apos;Hôtel de Ville",
        "city": "Villeneuve d&apos;Ascq",
        "capacity": 50083,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/655.png"
      }
    },
    {
      "team": {
        "id": 80,
        "name": "Lyon",
        "country": "France",
        "founded": 1950,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/80.png"
      },
      "venue": {
        "id": 666,
        "name": "Groupama Stadium",
        "address": "Chemin du Montout",
        "city": "Décines-Charpieu",
        "capacity": 61556,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/666.png"
      }
    },
    {
      "team": {
        "id": 81,
        "name": "Marseille",
        "country": "France",
        "founded": 1899,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/81.png"
      },
      "venue": {
        "id": 667,
        "name": "Orange Vélodrome",
        "address": "3, boulevard Michelet",
        "city": "Marseille",
        "capacity": 67394,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/667.png"
      }
    },
    {
      "team": {
        "id": 157,
        "name": "Bayern Munich",
        "country": "Germany",
        "founded": 1900,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/157.png"
      },
      "venue": {
        "id": 700,
        "name": "Allianz Arena",
        "address": "Werner-Heisenberg-Allee 25",
        "city": "München",
        "capacity": 75000,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/700.png"
      }
    },
    {
      "team": {
        "id": 165,
        "name": "Borussia Dortmund",
        "country": "Germany",
        "founded": 1909,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/165.png"
      },
      "venue": {
        "id": 702,
        "name": "Signal-Iduna-Park",
        "address": "Strobelalle 50",
        "city": "Dortmund",
        "capacity": 81365,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/702.png"
      }
    },
    {
      "team": {
        "id": 168,
        "name": "Bayer Leverkusen",
        "country": "Germany",
        "founded": 1904,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/168.png"
      },
      "venue": {
        "id": 699,
        "name": "BayArena",
        "address": "Bismarckstr. 122-124",
        "city": "Leverkusen",
        "capacity": 30210,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/699.png"
      }
    },
    {
      "team": {
        "id": 194,
        "name": "Ajax",
        "country": "Netherlands",
        "founded": 1900,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/194.png"
      },
      "venue": {
        "id": 1117,
        "name": "Johan Cruijff Arena",
        "address": "ArenA Boulevard 1",
        "city": "Amsterdam",
        "capacity": 54990,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1117.png"
      }
    },
    {
      "team": {
        "id": 211,
        "name": "Benfica",
        "country": "Portugal",
        "founded": 1904,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/211.png"
      },
      "venue": {
        "id": 1265,
        "name": "Estádio do Sport Lisboa e Benfica (da Luz)",
        "address": "Rua José Maria Nicolau",
        "city": "Lisboa",
        "capacity": 65647,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1265.png"
      }
    },
    {
      "team": {
        "id": 212,
        "name": "FC Porto",
        "country": "Portugal",
        "founded": 1893,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/212.png"
      },
      "venue": {
        "id": 1286,
        "name": "Estádio Do Dragão",
        "address": "Via Futebol Clube do Porto",
        "city": "Porto",
        "capacity": 50399,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1286.png"
      }
    },
    {
      "team": {
        "id": 257,
        "name": "Rangers",
        "country": "Scotland",
        "founded": 1873,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/257.png"
      },
      "venue": {
        "id": 1401,
        "name": "Ibrox Stadium",
        "address": "150 Edmiston Drive",
        "city": "Glasgow",
        "capacity": 51082,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1401.png"
      }
    },
    {
      "team": {
        "id": 276,
        "name": "Breidablik",
        "country": "Iceland",
        "founded": 1950,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/276.png"
      },
      "venue": {
        "id": 820,
        "name": "Kópavogsvöllur",
        "address": "Dalsmára 5",
        "city": "Kópavogur",
        "capacity": 5501,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/820.png"
      }
    },
    {
      "team": {
        "id": 331,
        "name": "Rosenborg",
        "country": "Norway",
        "founded": 1917,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/331.png"
      },
      "venue": {
        "id": 1190,
        "name": "Lerkendal Stadion",
        "address": "Klæbuveien 125",
        "city": "Trondheim",
        "capacity": 21850,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1190.png"
      }
    },
    {
      "team": {
        "id": 338,
        "name": "Wisla Krakow",
        "country": "Poland",
        "founded": 1906,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/338.png"
      },
      "venue": {
        "id": 1258,
        "name": "Stadion Miejski im. Henryka Reymana",
        "address": "ul. Reymonta 22",
        "city": "Kraków",
        "capacity": 33268,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1258.png"
      }
    },
    {
      "team": {
        "id": 375,
        "name": "Malmo FF",
        "country": "Sweden",
        "founded": 1910,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/375.png"
      },
      "venue": {
        "id": 1518,
        "name": "Eleda Stadion",
        "address": "Eric Persson väg 1",
        "city": "Malmö",
        "capacity": 24148,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1518.png"
      }
    },
    {
      "team": {
        "id": 388,
        "name": "Bate Borisov",
        "country": "Belarus",
        "founded": 1973,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/388.png"
      },
      "venue": {
        "id": 7764,
        "name": "Borisov Arena",
        "address": null,
        "city": "Borisov",
        "capacity": 13141,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/7764.png"
      }
    },
    {
      "team": {
        "id": 400,
        "name": "FC Copenhagen",
        "country": "Denmark",
        "founded": 1992,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/400.png"
      },
      "venue": {
        "id": 439,
        "name": "Telia Parken",
        "address": "Øster Allé 50",
        "city": "København",
        "capacity": 38065,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/439.png"
      }
    },
    {
      "team": {
        "id": 405,
        "name": "Odense",
        "country": "Denmark",
        "founded": 1889,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/405.png"
      },
      "venue": {
        "id": 456,
        "name": "Nature Energy Park",
        "address": "Højstrupvej 7B",
        "city": "Odense",
        "capacity": 15790,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/456.png"
      }
    },
    {
      "team": {
        "id": 415,
        "name": "Twente",
        "country": "Netherlands",
        "founded": 1965,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/415.png"
      },
      "venue": {
        "id": 1153,
        "name": "De Grolsch Veste",
        "address": "Colosseum 65",
        "city": "Enschede",
        "capacity": 30205,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1153.png"
      }
    },
    {
      "team": {
        "id": 489,
        "name": "AC Milan",
        "country": "Italy",
        "founded": 1899,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/489.png"
      },
      "venue": {
        "id": 907,
        "name": "Stadio Giuseppe Meazza",
        "address": "Via Piccolomini 5",
        "city": "Milano",
        "capacity": 80018,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/907.png"
      }
    },
    {
      "team": {
        "id": 492,
        "name": "Napoli",
        "country": "Italy",
        "founded": 1904,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/492.png"
      },
      "venue": {
        "id": 916,
        "name": "Stadio San Paolo",
        "address": "Pizzale Vincenzo Tecchio",
        "city": "Napoli",
        "capacity": 60240,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/916.png"
      }
    },
    {
      "team": {
        "id": 494,
        "name": "Udinese",
        "country": "Italy",
        "founded": 1896,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/494.png"
      },
      "venue": {
        "id": 928,
        "name": "Dacia Arena",
        "address": "Piazza le Repubblica Argentina, 3",
        "city": "Udine",
        "capacity": 25952,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/928.png"
      }
    },
    {
      "team": {
        "id": 505,
        "name": "Inter",
        "country": "Italy",
        "founded": 1908,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/505.png"
      },
      "venue": {
        "id": 907,
        "name": "Stadio Giuseppe Meazza",
        "address": "Via Piccolomini 5",
        "city": "Milano",
        "capacity": 80018,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/907.png"
      }
    },
    {
      "team": {
        "id": 529,
        "name": "Barcelona",
        "country": "Spain",
        "founded": 1899,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/529.png"
      },
      "venue": {
        "id": 1462,
        "name": "Camp Nou",
        "address": "Carrer d&apos;Arístides Maillol",
        "city": "Barcelona",
        "capacity": 99787,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1462.png"
      }
    },
    {
      "team": {
        "id": 532,
        "name": "Valencia",
        "country": "Spain",
        "founded": 1919,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/532.png"
      },
      "venue": {
        "id": 1497,
        "name": "Estadio de Mestalla",
        "address": "Avenida de Suecia",
        "city": "Valencia",
        "capacity": 55000,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1497.png"
      }
    },
    {
      "team": {
        "id": 533,
        "name": "Villarreal",
        "country": "Spain",
        "founded": 1923,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/533.png"
      },
      "venue": {
        "id": 1498,
        "name": "Estadio de la Cerámica",
        "address": "Plaza Labrador",
        "city": "Villarreal",
        "capacity": 24500,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1498.png"
      }
    },
    {
      "team": {
        "id": 541,
        "name": "Real Madrid",
        "country": "Spain",
        "founded": 1902,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/541.png"
      },
      "venue": {
        "id": 1456,
        "name": "Estadio Santiago Bernabéu",
        "address": "Avenida de Concha Espina 1, Chamartín",
        "city": "Madrid",
        "capacity": 85454,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1456.png"
      }
    },
    {
      "team": {
        "id": 550,
        "name": "Shakhtar Donetsk",
        "country": "Ukraine",
        "founded": 1936,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/550.png"
      },
      "venue": {
        "id": 1595,
        "name": "Oblasny SportKomplex Metalist",
        "address": "vul. Chervonoarmijs&apos;ka 55",
        "city": "Kiev",
        "capacity": 70050,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1595.png"
      }
    },
    {
      "team": {
        "id": 551,
        "name": "FC Basel 1893",
        "country": "Switzerland",
        "founded": 1893,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/551.png"
      },
      "venue": {
        "id": 1530,
        "name": "St. Jakob-Park",
        "address": "Sankt Jakob-Strasse 395",
        "city": "Basel",
        "capacity": 38512,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1530.png"
      }
    },
    {
      "team": {
        "id": 552,
        "name": "Maribor",
        "country": "Slovenia",
        "founded": 1960,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/552.png"
      },
      "venue": {
        "id": 1441,
        "name": "Ljudski vrt",
        "address": "Mladinska ul. 29",
        "city": "Maribor",
        "capacity": 12994,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1441.png"
      }
    },
    {
      "team": {
        "id": 553,
        "name": "Olympiakos Piraeus",
        "country": "Greece",
        "founded": 1925,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/553.png"
      },
      "venue": {
        "id": 775,
        "name": "Stadio Georgios Karaiskáki",
        "address": "Poseidonos Avenue, Faliro",
        "city": "Piraeus",
        "capacity": 33296,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/775.png"
      }
    },
    {
      "team": {
        "id": 555,
        "name": "CSKA Moscow",
        "country": "Russia",
        "founded": 1911,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/555.png"
      },
      "venue": {
        "id": 1333,
        "name": "VEB Arena",
        "address": "3-ya Peschanaya ul.",
        "city": "Moskva",
        "capacity": 30000,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1333.png"
      }
    },
    {
      "team": {
        "id": 567,
        "name": "Plzen",
        "country": "Czech-Republic",
        "founded": 1911,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/567.png"
      },
      "venue": {
        "id": 438,
        "name": "Doosan Aréna",
        "address": null,
        "city": "Plzeň",
        "capacity": 12500,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/438.png"
      }
    },
    {
      "team": {
        "id": 572,
        "name": "Dynamo Kyiv",
        "country": "Ukraine",
        "founded": 1927,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/572.png"
      },
      "venue": {
        "id": 1593,
        "name": "NSK Olimpijs'kyj",
        "address": "vul. Chervonoarmijs&apos;ka 55",
        "city": "Kiev",
        "capacity": 70050,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1593.png"
      }
    },
    {
      "team": {
        "id": 573,
        "name": "FK Partizan",
        "country": "Serbia",
        "founded": 1945,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/573.png"
      },
      "venue": {
        "id": 1424,
        "name": "Stadion Partizana",
        "address": "Humska 1",
        "city": "Beograd",
        "capacity": 32710,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1424.png"
      }
    },
    {
      "team": {
        "id": 578,
        "name": "F91 Dudelange",
        "country": "Luxembourg",
        "founded": 1991,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/578.png"
      },
      "venue": {
        "id": 1033,
        "name": "Stade Jos Nosbaum",
        "address": "Rue de Stade Jos Nosbaum",
        "city": "Dudelange",
        "capacity": 2558,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1033.png"
      }
    },
    {
      "team": {
        "id": 583,
        "name": "Linfield",
        "country": "Northern-Ireland",
        "founded": 1886,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/583.png"
      },
      "venue": {
        "id": 1971,
        "name": "Windsor Park",
        "address": "Donegall Avenue",
        "city": "Belfast",
        "capacity": 18614,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1971.png"
      }
    },
    {
      "team": {
        "id": 591,
        "name": "FC Santa Coloma",
        "country": "Andorra",
        "founded": 1986,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/591.png"
      },
      "venue": {
        "id": 30,
        "name": "Centre d'Entrenament de la FAF 1",
        "address": "Avenue de Santa Coloma",
        "city": "Santa Coloma",
        "capacity": 2000,
        "surface": "artificial turf",
        "image": "https://media.api-sports.io/football/venues/30.png"
      }
    },
    {
      "team": {
        "id": 596,
        "name": "Zenit Saint Petersburg",
        "country": "Russia",
        "founded": 1925,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/596.png"
      },
      "venue": {
        "id": 1356,
        "name": "Saint-Petersburg Stadium",
        "address": "Futbolnaya al.",
        "city": "St. Petersburg",
        "capacity": 68134,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1356.png"
      }
    },
    {
      "team": {
        "id": 605,
        "name": "Skenderbeu Korce",
        "country": "Albania",
        "founded": 1909,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/605.png"
      },
      "venue": {
        "id": 2155,
        "name": "Stadiumi Skënderbeu",
        "address": "Rruga Gjiergi Kastrioti",
        "city": "Korçë",
        "capacity": 11000,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/2155.png"
      }
    },
    {
      "team": {
        "id": 609,
        "name": "Shkendija",
        "country": "Macedonia",
        "founded": 1979,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/609.png"
      },
      "venue": {
        "id": 1046,
        "name": "Ecolog Arena",
        "address": "ul. Butik Emona",
        "city": "Tetovo",
        "capacity": 15000,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1046.png"
      }
    },
    {
      "team": {
        "id": 610,
        "name": "Videoton FC",
        "country": "Hungary",
        "founded": 1941,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/610.png"
      },
      "venue": {
        "id": 798,
        "name": "MOL Aréna Sóstó",
        "address": "Csikvári út 10",
        "city": "Székesfehérvár",
        "capacity": 14201,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/798.png"
      }
    },
    {
      "team": {
        "id": 617,
        "name": "Panathinaikos",
        "country": "Greece",
        "founded": 1908,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/617.png"
      },
      "venue": {
        "id": 761,
        "name": "Olympiako Stadio Spyros Louis",
        "address": "37 Kifissias Avenue, Maroussi",
        "city": "Athens",
        "capacity": 71030,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/761.png"
      }
    },
    {
      "team": {
        "id": 620,
        "name": "Dinamo Zagreb",
        "country": "Croatia",
        "founded": 1911,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/620.png"
      },
      "venue": {
        "id": 412,
        "name": "Stadion Maksimir",
        "address": "Maksimirska cesta 128",
        "city": "Zagreb",
        "capacity": 37168,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/412.png"
      }
    },
    {
      "team": {
        "id": 637,
        "name": "Sturm Graz",
        "country": "Austria",
        "founded": 1909,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/637.png"
      },
      "venue": {
        "id": 150,
        "name": "Merkur Arena",
        "address": "Stadionplatz 1 A",
        "city": "Graz",
        "capacity": 16764,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/150.png"
      }
    },
    {
      "team": {
        "id": 649,
        "name": "HJK helsinki",
        "country": "Finland",
        "founded": 1907,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/649.png"
      },
      "venue": {
        "id": 615,
        "name": "Bolt Arena",
        "address": "Urheilukatu 1",
        "city": "Helsinki",
        "capacity": 10770,
        "surface": "artificial turf",
        "image": "https://media.api-sports.io/football/venues/615.png"
      }
    },
    {
      "team": {
        "id": 652,
        "name": "Shamrock Rovers",
        "country": "Ireland",
        "founded": 1901,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/652.png"
      },
      "venue": {
        "id": 865,
        "name": "Tallaght Stadium",
        "address": "Kiltipper Way, Tallaght",
        "city": "Dublin",
        "capacity": 8600,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/865.png"
      }
    },
    {
      "team": {
        "id": 656,
        "name": "Slovan Bratislava",
        "country": "Slovakia",
        "founded": 1919,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/656.png"
      },
      "venue": {
        "id": 1437,
        "name": "Národný Futbalový Štadión",
        "address": "Viktora Tegelhoffa 3, Nové Mesto",
        "city": "Bratislava",
        "capacity": 22500,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1437.png"
      }
    },
    {
      "team": {
        "id": 659,
        "name": "Valletta FC",
        "country": "Malta",
        "founded": 1944,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/659.png"
      },
      "venue": {
        "id": 1067,
        "name": "MFA Centenary Stadium",
        "address": "Villagg Tas-Snajja&apos;",
        "city": "Ta&apos;Qali",
        "capacity": 2000,
        "surface": "artificial turf",
        "image": "https://media.api-sports.io/football/venues/1067.png"
      }
    },
    {
      "team": {
        "id": 681,
        "name": "Bangor City",
        "country": "Wales",
        "founded": 1876,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/681.png"
      },
      "venue": {
        "id": 10173,
        "name": "The EUROGOLD Stadium",
        "address": "Holyhead Road / Flordd Caergybi",
        "city": "Bangor",
        "capacity": 3400,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/10173.png"
      }
    },
    {
      "team": {
        "id": 687,
        "name": "Flora Tallinn",
        "country": "Estonia",
        "founded": 1990,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/687.png"
      },
      "venue": {
        "id": 605,
        "name": "A. Le Coq Arena",
        "address": "Asula 4c",
        "city": "Tallinn",
        "capacity": 14405,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/605.png"
      }
    },
    {
      "team": {
        "id": 709,
        "name": "Pyunik Yerevan",
        "country": "Armenia",
        "founded": 1992,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/709.png"
      },
      "venue": {
        "id": 121,
        "name": "Vazgen Sargsyan anvan Hanrapetakan Marzadasht",
        "address": "ul. Nar-Dos",
        "city": "Yerevan",
        "capacity": 14530,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/121.png"
      }
    },
    {
      "team": {
        "id": 733,
        "name": "Standard Liege",
        "country": "Belgium",
        "founded": 1898,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/733.png"
      },
      "venue": {
        "id": 192,
        "name": "Stade Maurice Dufrasne",
        "address": "Rue de la Centrale 2, Sclessin",
        "city": "Luik",
        "capacity": 27670,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/192.png"
      }
    },
    {
      "team": {
        "id": 742,
        "name": "Genk",
        "country": "Belgium",
        "founded": 1988,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/742.png"
      },
      "venue": {
        "id": 179,
        "name": "Luminus Arena",
        "address": "Stadionplein 4, Waterschei",
        "city": "Genk",
        "capacity": 24956,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/179.png"
      }
    },
    {
      "team": {
        "id": 783,
        "name": "FC Zurich",
        "country": "Switzerland",
        "founded": 1896,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/783.png"
      },
      "venue": {
        "id": 1533,
        "name": "Stadion Letzigrund",
        "address": "Badenerstrasse 500",
        "city": "Zürich",
        "capacity": 26104,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1533.png"
      }
    },
    {
      "team": {
        "id": 998,
        "name": "Trabzonspor",
        "country": "Turkey",
        "founded": 1967,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/998.png"
      },
      "venue": {
        "id": 1590,
        "name": "Medical Park Stadyumu",
        "address": "Trabzon Giresun Yolu, Akyaz",
        "city": "Trabzon",
        "capacity": 41513,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1590.png"
      }
    },
    {
      "team": {
        "id": 1083,
        "name": "Rubin",
        "country": "Russia",
        "founded": 1958,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/1083.png"
      },
      "venue": {
        "id": 1349,
        "name": "Kazan' Arena",
        "address": "Prospekt Husaina Yamasheva 115a",
        "city": "Kazan&apos;",
        "capacity": 45105,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1349.png"
      }
    },
    {
      "team": {
        "id": 1419,
        "name": "Litex",
        "country": "Bulgaria",
        "founded": 1921,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/1419.png"
      },
      "venue": {
        "id": 299,
        "name": "Gradski stadion",
        "address": "ul. Han Kubrat",
        "city": "Lovech",
        "capacity": 7050,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/299.png"
      }
    },
    {
      "team": {
        "id": 2247,
        "name": "Apoel Nicosia",
        "country": "Cyprus",
        "founded": 1926,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/2247.png"
      },
      "venue": {
        "id": 432,
        "name": "Neo GSP",
        "address": "Pangkiprion Avenue, Strovolos",
        "city": "Levkosía",
        "capacity": 22859,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/432.png"
      }
    },
    {
      "team": {
        "id": 2259,
        "name": "FK Tobol Kostanay",
        "country": "Kazakhstan",
        "founded": 1967,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/2259.png"
      },
      "venue": {
        "id": 9806,
        "name": null,
        "address": "ul. 1 Maya 153",
        "city": "Kostanay",
        "capacity": 8432,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/9806.png"
      }
    },
    {
      "team": {
        "id": 2260,
        "name": "Tre Fiori",
        "country": "San-Marino",
        "founded": 1949,
        "national": false,
        "logo": "https://media.api-sports.io/football/teams/2260.png"
      },
      "venue": {
        "id": 1360,
        "name": "Campo Sportivo di Fiorentino Federico Crescentini",
        "address": "Via Ventun Settembre",
        "city": "Fiorentino",
        "capacity": 700,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1360.png"
      }
    },
  ]

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

  getTeams(league: number, year: number): void {
    this.teamsSuscription = this.footballService.getTeams(league, year).subscribe((resp) => {
      if (resp.errors.length === 0) {
        this.teams = resp.response;
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
