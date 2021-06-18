export interface Team {
    team: {
        id: number,
        name: string,
        country: string,
        founded: number,
        national: boolean,
        logo: string
    },
    venue: {
        id: number,
        name: string | null,
        address: string | null,
        city: string,
        capacity: number,
        surface: string,
        image: string
    }
}
