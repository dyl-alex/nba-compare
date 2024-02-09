export interface Player {
    id: number,
        first_name: string,
        last_name: string,
        height_feet: number,
        height_inches: number,
        position: string,
        weight: number,
        team: {
            id:number,
            abbreviation: string,
            city: string,
            conference: string,
            division: string,
            full_name: string,
            name: string,
        }
}