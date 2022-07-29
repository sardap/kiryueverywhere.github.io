
export interface position {
    x: number,
    y: number,
}

export interface mapInfo {
    threshold: number;
};

export const map_info: Record<string, mapInfo> = {
    "yakuza_3_kamuro_map": {
        threshold: 5
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
        map: "yakuza_3_kamuro_map",
        target: { x: -0.08586762075134168, y: -0.034048257372654156 }
    }
}