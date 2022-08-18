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
    map: "yakuza_kiwami_map",
    target: { x: 16, y: 46 },
  },
  3: {
    map: "yakuza_0_osaka_map",
    target: { x: 21, y: -29 },
  },
  4: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -12, y: -4 },
  },
  5: {
    map: "yakuza_3_rykyu_map",
    target: { x: 2, y: 32 },
  },
  6: {
    map: "yakuza_0_kamuro_map",
    target: { x: -38, y: 4 },
  },
  7: {
    map: "yakuza_kiwami_map",
    target: { x: 2, y: 39 },
  },
  8: {
    map: "yakuza_3_kamuro_map",
    target: { x: -30, y: 23 },
  },
  9: {
    map: "yakuza_3_rykyu_map",
    target: { x: 15, y: 13 },
  },
  10: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: 38, y: -30 },
  },
  11: {
    map: "yakuza_0_kamuro_map",
    target: { x: -3, y: -13 },
  },
  12: {
    map: "yakuza_3_rykyu_map",
    target: { x: -12, y: 21 },
  },
  13: {
    map: "yakuza_kiwami_map",
    target: { x: 9, y: 40 },
  },
  14: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -24, y: 8 },
  },
  15: {
    map: "yakuza_0_osaka_map",
    target: { x: -3, y: 10.991379310344826 },
  },
  16: {
    map: "yakuza_3_kamuro_map",
    target: { x: -15, y: -39 },
  },
  17: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 40.55449004984982, y: 5.716878402903811 },
  },
  18: {
    map: "yakuza_kiwami_map",
    target: { x: 40.537318914097945, y: 39.22800718132854 },
  },
  19: {
    map: "yakuza_0_osaka_map",
    target: { x: 6.21967840572853, y: -5.716878402903811 },
  },
  20: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -36.519217408073715, y: 8.076225045372052 },
  },
  21: {
    map: "yakuza_dead_souls_kamuro_streets_map",
    target: { x: 7.465254387285787, y: 46.91470054446461 },
  },
  22: {
    map: "yakuza_kiwami_map",
    target: { x: 34.73436194846733, y: -19.509981851179674 },
  },
  23: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: 27.04893308863395, y: -6.624319419237749 },
  },
  24: {
    map: "yakuza_0_kamuro_map",
    target: { x: 11.149825783972126, y: 3.720508166969147 },
  },
  25: {
    map: "yakuza_3_kamuro_map",
    target: { x: 27.609549956933677, y: 25.17361111111111 },
  },
  26: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -21.836649719495092, y: 42.1875 },
  },
  27: {
    map: "yakuza_0_osaka_map",
    target: { x: -13.119911010232022, y: 4.861111111111112 },
  },
  28: {
    map: "yakuza_4_kamuro_rooftops_map",
    target: { x: 22.252283558379666, y: 31.59722222222222 },
  },
  29: {
    map: "yakuza_3_kamuro_map",
    target: { x: 38.42168140860001, y: 6.25 },
  },
  30: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 16.44291692740926, y: 13.88888888888889 },
  }
};
