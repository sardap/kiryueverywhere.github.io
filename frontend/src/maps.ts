export interface mapInfo {
  threshold: number;
  game_name: string;
  plain_name: string;
}

export const map_info: Record<string, mapInfo> = {
  yakuza_0_kamuro_map: {
    threshold: 5,
    game_name: "Yakuza 0",
    plain_name: "Yakuza 0 Kamurocho",
  },
  yakuza_0_osaka_map: {
    threshold: 5,
    game_name: "Yakuza 0",
    plain_name: "Yakuza 0 Sotenbori",
  },
  yakuza_kiwami_map: {
    threshold: 5,
    game_name: "Yakuza Kiwami",
    plain_name: "Yakuza Kiwami Kamurocho",
  },
  yakuza_kiwami_2_kamuro_map: {
    threshold: 5,
    game_name: "Yakuza Kiwami 2",
    plain_name: "Yakuza Kiwami 2 Kamurocho",
  },
  yakuza_kiwami_2_osaka_map: {
    threshold: 5,
    game_name: "Yakuza Kiwami 2",
    plain_name: "Yakuza Kiwami 2 Kamurocho",
  },
  yakuza_3_kamuro_map: {
    threshold: 5,
    game_name: "Yakuza 3",
    plain_name: "Yakuza 3 Kamurocho",
  },
  yakuza_3_rykyu_map: {
    threshold: 3,
    game_name: "Yakuza 3",
    plain_name: "Yakuza 3 Ryukyu",
  },
};
