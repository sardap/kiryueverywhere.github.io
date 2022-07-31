export interface position {
  x: number;
  y: number;
}

export interface gameInfo {
  map: string;
  target: position;
}

export const games: Record<number, gameInfo> = {
  1: {
    map: "yakuza_3_kamuro_map",
    target: { x: -42, y: -17 },
  },
  2: {
    map: "yakuza_kwamai_map",
    target: { x: 16, y: 46 },
  },
  3: {
    map: "yakuza_0_osaka_map",
    target: { x: 21, y: -29 },
  },
  4: {
    map: "yakuza_kwamai_2_osaka_map",
    target: { x: -12, y: -4 },
  },
};
