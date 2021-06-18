export interface Playerstatistics {
    team: {
        id: number,
        name: string,
        logo: string
    },
    league: {
        id: number,
        name: string,
        country: string,
        logo: string,
        flag: any,
        season: number
    },
    games: {
        appearences: number,
        lineups: number,
        minutes: number,
        number: any,
        position: string,
        rating: any,
        captain: boolean
    },
    substitutes: {
        in: number,
        out: number,
        bench: number
    },
    shots: {
        total: any,
        on: any
    },
    goals: {
        total: number,
        conceded: any,
        assists: any,
        saves: any
    },
    passes: {
        total: any,
        key: any,
        accuracy: any
    },
    tackles: {
        total: any,
        blocks: any,
        interceptions: any
    },
    duels: {
        total: any,
        won: any
    },
    dribbles: {
        attempts: any,
        success: any,
        past: any
    },
    fouls: {
        drawn: any,
        committed: any
    },
    cards: {
        yellow: number,
        yellowred: number,
        red: number
    },
    penalty: {
        won: any,
        commited: any,
        scored: any,
        missed: any,
        saved: any
    }
};

export interface TeamDetail {
    player: {
        id: number,
        name: string,
        firstname: string,
        lastname: string,
        age: number,
        birth: {
            date: string,
            place: string,
            country: string
        },
        nationality: string,
        height: string,
        weight: string,
        injured: boolean,
        photo: string
    },
    statistics: Array<Playerstatistics>
}
