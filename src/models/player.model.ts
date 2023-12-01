export interface Player {
    data: {
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
    meta: {
        total_pages: number,
        current_page: number,
        next_page: number,
        per_page: number,
        total_count: number,
    }
}