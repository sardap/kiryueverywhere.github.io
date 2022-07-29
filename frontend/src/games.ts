
export interface position {
    x: number,
    y: number,
}

export interface mapInfo {
    threshold: number;
    game_name: string;
};

export const map_info: Record<string, mapInfo> = {
    "yakuza_3_kamuro_map": {
        threshold: 5,
        game_name: "Yakuza 3"
    },
    "yakuza_kwamai_map": {
        threshold: 5,
        game_name: "Yakuza Kiwami"
    }

}

export interface gameInfo {
    map: string;
    target: position;
}

export const games: Record<number, gameInfo> = {
    1: {
        map: "yakuza_3_kamuro_map",
        target: { x: -42, y: -17 }
    },
    2: {
        map: "yakuza_kwamai_map",
        target: { x: 16, y: 46 }
    }
}