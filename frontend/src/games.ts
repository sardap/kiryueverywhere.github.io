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
  },
  31: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 3.7444266270337923, y: 18.92361111111111 },
  },
  32: {
    map: "yakuza_0_kamuro_map",
    target: { x: -26.94541231126597, y: -2.604166666666667 },
  },
  33: {
    map: "yakuza_kiwami_map",
    target: { x: 23.333422862054146, y: -8.854166666666668 },
  },
  34: {
    map: "yakuza_4_kamuro_rooftops_map",
    target: { x: -17.19494638602065, y: 29.166666666666668 },
  },
  35: {
    map: "yakuza_0_kamuro_map",
    target: { x: -11.975738805007099, y: -15.45138888888889 },
  },
  36: {
    map: "yakuza_kiwami_map",
    target: { x: -19.04007305543618, y: -39.0625 },
  },
  37: {
    map: "yakuza_3_kamuro_map",
    target: { x: 10.61905767574372, y: 12.67361111111111 },
  },
  38: {
    map: "yakuza_3_rykyu_map",
    target: { x: 4.75214243498818, y: 9.895833333333332 },
  },
  39: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -29.723005620249065, y: 15.104166666666666 },
  },
  40: {
    map: "yakuza_0_osaka_map",
    target: { x: 6.254841295575732, y: 21.52777777777778 },
  },
  41: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 5.860841677096372, y: 35.06944444444444 },
  },
  42: {
    map: "yakuza_4_kamuro_underground_map",
    target: { x: -16.107453811849652, y: 44.79166666666667 },
  },
  43: {
    map: "yakuza_3_kamuro_map",
    target: { x: -4.247623070297489, y: 26.73611111111111 },
  },
  44: {
    map: "yakuza_0_osaka_map",
    target: { x: 18.764523886727194, y: -29.86111111111111 },
  },
  45: {
    map: "yakuza_4_kamuro_underground_map",
    target: { x: -45.89211401832251, y: 11.75438596491228 },
  },
  46: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 19.741782491271987, y: -13.157894736842104 },
  },
  47: {
    map: "yakuza_kiwami_map",
    target: { x: -3.961278357044309, y: 24.385964912280702 },
  },
  48: {
    map: "yakuza_3_rykyu_map",
    target: { x: -15.49085479656588, y: -3.684210526315789 },
  },
  49: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: 6.347899904037793, y: 36.84210526315789 },
  },
  50: {
    map: "yakuza_0_osaka_map",
    target: { x: -13.874667212779029, y: 14.561403508771932 },
  },
  51: {
    map: "yakuza_kiwami_map",
    target: { x: 43.1967973220546, y: 17.017543859649123 },
  },
  52: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -0.6045618956226471, y: 13.333333333333334 },
  },
  53: {
    map: "yakuza_0_osaka_map",
    target: { x: -22.66195644753908, y: 41.05263157894737 },
  },
  54: {
    map: "yakuza_kiwami_map",
    target: { x: 22.06997941781829, y: 45.96491228070175 },
  },
  55: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -22.039314078500468, y: 35.6140350877193 },
  },
  56: {
    map: "yakuza_0_kamuro_map",
    target: { x: 25.90541394135746, y: 15.087719298245613 },
  },
  57: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 2.632237665502932, y: 6.315789473684211 },
  },
  58: {
    map: "yakuza_3_kamuro_map",
    target: { x: 45.654834761321915, y: 16.842105263157894 },
  },
  59: {
    map: "yakuza_5_osaka_map",
    target: { x: -27.593773254127413, y: -13.508771929824562 },
  },
  60: {
    map: "yakuza_4_kamuro_underground_map",
    target: { x: 6.782085815515643, y: 25.6140350877193 },
  },
  61: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -19.741782491271987, y: 12.456140350877194 },
  },
  62: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 4.42637628554144, y: -19.12280701754386 },
  },
  63: {
    map: "yakuza_0_osaka_map",
    target: { x: 23.124445354631714, y: -29.29824561403509 },
  },
  64: {
    map: "yakuza_4_kamuro_underground_map",
    target: { x: -0.20772773839964684, y: -37.719298245614034 },
  },

  65: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 23.03207957315065, y: 13.157894736842104 },
  },
  66: {
    map: "yakuza_5_fukuoka_map",
    target: { x: -2.8641258318209313, y: -41.75438596491228 },
  },
  67: {
    map: "yakuza_0_osaka_map",
    target: { x: -7.091496575420392, y: -29.64912280701754 },
  },
  68: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -21.008525872886985, y: -5.964912280701754 },
  },
  69: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 18.2337296620776, y: 1.0416666666666665 },
  },
  70: {
    map: "yakuza_3_rykyu_map",
    target: { x: -32.805112293144205, y: -29.86111111111111 },
  },
  71: {
    map: "yakuza_5_sapporo_map",
    target: { x: 18.46039939617235, y: 35.41666666666667 },
  },
  72: {
    map: "yakuza_kiwami_map",
    target: { x: 26.320100988397076, y: 45.48611111111111 },
  },
  73: {
    map: "yakuza_0_kamuro_map",
    target: { x: 12.72422248032004, y: 1.215277777777778 },
  },
  74: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 1.9536138923654571, y: 20.13888888888889 },
  },
  75: {
    map: "yakuza_5_nagoya_map",
    target: { x: 17.758462513164826, y: -14.756944444444445 },
  },
  76: {
    map: "yakuza_3_kamuro_map",
    target: { x: 18.148934936725635, y: 26.5625 },
  },
  77: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -29.165388323983173, y: -20.65972222222222 },
  },
  78: {
    map: "yakuza_4_kamuro_underground_map",
    target: { x: 7.400300680487419, y: 6.597222222222222 },
  },
  79: {
    map: "yakuza_5_nagoya_map",
    target: { x: 31.438515081206496, y: -13.90620061547698 },
  },
  80: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -7.465254387285787, y: -45.6442831215971 },
  },
  81: {
    map: "yakuza_3_rykyu_map",
    target: { x: -13.461018650808972, y: 39.83666061705989 },
  },
  82: {
    map: "yakuza_0_osaka_map",
    target: { x: 21.370177086349308, y: 30.58076225045372 },
  },
  83: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -20.37812684096931, y: -34.029038112522684 },
  },
  84: {
    map: "yakuza_5_osaka_map",
    target: { x: 23.282744529585443, y: -9.346642468239565 },
  },
  85: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -16.16783910923137, y: 34.029038 },
  },
  86: {
    map: "yakuza_3_kamuro_map",
    target: { x: 2.422007149141746, y: 40.381125226860256 },
  },
  87: {
    map: "yakuza_kiwami_map",
    target: { x: 23.026150055725534, y: 38.02177858439201 },
  },
  88: {
    map: "yakuza_0_osaka_map",
    target: { x: 8.771341341412029, y: 16.06170598911071 },
  },
  89: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -4.765257842720825, y: 12.79491833030853 },
  },
  90: {
    map: "yakuza_5_osaka_map",
    target: { x: -3.029946205904955, y: 37.84029038112522 },
  },
  91: {
    map: "yakuza_0_kamuro_map",
    target: { x: 12.519102634635368, y: 17.150635208711435 },
  },
  92: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -21.790472265590946, y: 24.59165154264973 },
  },
  93: {
    map: "yakuza_3_rykyu_map",
    target: { x: -18.7492759779125, y: -29.673321234119783 },
  },
  94: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 38.2482007635021, y: 38.203266787658805 },
  },
  95: {
    map: "yakuza_0_kamuro_map",
    target: { x: -15.873297434273043, y: 8.363636363636363 },
  },
  96: {
    map: "yakuza_6_kamuro_map",
    target: { x: -10.401682415822828, y: 22.363636363636363 },
  },
  97: {
    map: "yakuza_4_kamuro_underground_map",
    target: { x: 35.09088031765671, y: 7.090909090909091 },
  },
  98: {
    map: "yakuza_5_sapporo_map",
    target: { x: 0, y: 41.63636363636364 },
  },
  99: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -20.97115712822847, y: 12.181818181818182 },
  },
  100: {
    map: "yakuza_6_onomichi_map",
    target: { x: 8.974638791335707, y: -3.272727272727273 },
  },
  101: {
    map: "yakuza_5_osaka_map",
    target: { x: -34.18881118881119, y: 26 },
  },
  102: {
    map: "yakuza_4_kamuro_underground_map",
    target: { x: -12.70160698614568, y: 33.81818181818182 },
  },
  103: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: 36.18302945301542, y: -30.727272727272727 },
  },
  104: {
    map: "yakuza_3_rykyu_map",
    target: { x: -4.655705996131528, y: -12 },
  },
  105: {
    map: "yakuza_5_nagoya_map",
    target: { x: 0.11655011655011654, y: 44.25859578254354 },
  }
};
