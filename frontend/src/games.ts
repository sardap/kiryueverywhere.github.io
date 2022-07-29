
export const first_date = new Date(2022, 6, 28, 0, 0, 0);


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
    },
    "yakuza_0_kamuro_map": {
        threshold: 5,
        game_name: "Yakuza 0"
    },
    "yakuza_0_osaka_map": {
        threshold: 5,
        game_name: "Yakuza 0"
    },

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
    },
    3: {
        map: "yakuza_0_osaka_map",
        target: { x: 21, y: -29 }
    }

}