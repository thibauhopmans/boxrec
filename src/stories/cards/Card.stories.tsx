import BoxerCard from "@/components/cards/fighter-card/FighterCard";
import {IMAGES} from "@/assets/imageProvider";

export default {
    title: 'Components/Cards/Fighter Card',
    component: BoxerCard
}

export const CaneloAlvarez = {
    args: {
        name: "Canelo Álvarez",
        record: "60-2-2 (39 KO)",
        rank: 1,
        division: "Super Middleweight",
        image: IMAGES.saulAlvarez,
        isChampion: true,
        country: 'Mexico',
    }
}

export const NaoyaInoue = {
    args: {
        name: "Naoya Inoue",
        record: "33-0-0 (27 KO)",
        rank: 1,
        division: "Super Bantamweight",
        image: IMAGES.naoyaInoue,
        isChampion: true,
        country: 'Japan',
    }
}

export const RyanGarcia = {
    args: {
        name: "Ryan Garcia",
        record: "25-2-0 (20 KO)",
        rank: 1,
        division: "Welterweight",
        image: IMAGES.ryanGarcia,
        isChampion: true,
        country: 'USA',
    }
}

export const VasylLomachenko = {
    args: {
        name: "Vasyl Lomachenko",
        record: "18-3-0 (12 KO)",
        rank: 1,
        division: "Lightweight",
        image: IMAGES.lomachenko,
        isChampion: true,
        country: 'Ukraine',
    }
}