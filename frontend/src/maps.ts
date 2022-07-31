export interface mapInfo {
  threshold: number;
  game_name: string;
}

export const map_info: Record<string, mapInfo> = {
  yakuza_0_kamuro_map: {
    threshold: 5,
    game_name: "Yakuza 0",
  },
  yakuza_0_osaka_map: {
    threshold: 5,
    game_name: "Yakuza 0",
  },
  yakuza_kwamai_map: {
    threshold: 5,
    game_name: "Yakuza Kiwami",
  },
  yakuza_kwamai_2_kamuro_map: {
    threshold: 5,
    game_name: "Yakuza Kiwami 2",
  },
  yakuza_kwamai_2_osaka_map: {
    threshold: 5,
    game_name: "Yakuza Kiwami 2",
  },
  yakuza_3_kamuro_map: {
    threshold: 5,
    game_name: "Yakuza 3",
  },
  yakuza_3_rykyu_map: {
    threshold: 3,
    game_name: "Yakuza 3",
  },
};
