export interface Boxer {
    id: string;
    name: string;
    nickname: string;
    record: {
        wins: number;
        losses: number;
        draws: number;
        ko: number;
    };
    division: string;
    stance: "Orthodox" | "Southpaw";
    reach: string;
    nationality: string;
    image: string;
}