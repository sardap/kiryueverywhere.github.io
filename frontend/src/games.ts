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
  },
  106: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 9.03635225850495, y: 32 },
  },
  107: {
    map: "yakuza_5_sapporo_map",
    target: { x: -20.77583945069361, y: -45.27272727272727 },
  },
  108: {
    map: "yakuza_6_onomichi_map",
    target: { x: -18.16817121172838, y: -26 },
  },
  109: {
    map: "yakuza_0_osaka_map",
    target: { x: -43, y: -36 },
  },
  110: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 16.37256847955538, y: 17.272727272727273 },
  },
  111: {
    map: "yakuza_6_onomichi_map",
    target: { x: 14.446979517759917, y: -20.18181818181818 },
  },
  112: {
    map: "yakuza_5_fukuoka_map",
    target: { x: -22.396990595611282, y: 5.090909090909091 },
  },
  113: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -29.91756980747163, y: 24.363636363636363 },
  },
  114: {
    map: "yakuza_5_osaka_map",
    target: { x: -17.25416639435331, y: 21.818181818181817 },
  },
  115: {
    map: "yakuza_6_onomichi_map",
    target: { x: 14.22808588870295, y: 28.363636363636363 },
  },
  116: {
    map: "yakuza_0_osaka_map",
    target: { x: 21.728569744133946, y: 24.181818181818183 },
  },
  117: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: 33.67684559479791, y: 6.363636363636363 },
  },
  118: {
    map: "yakuza_5_sapporo_map",
    target: { x: -28.855332570407793, y: -44.90909090909091 },
  },
  119: {
    map: "yakuza_5_osaka_map",
    target: { x: 27.798379190902555, y: -10.363636363636363 },
  },
  120: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -38.606920735741696, y: -19.272727272727273 },
  },
  121: {
    map: "yakuza_0_osaka_map",
    target: { x: 11.822898243131707, y: -30.363636363636363 },
  },
  122: {
    map: "yakuza_6_kamuro_map",
    target: { x: -8.35544980943145, y: 20.545454545454543 },
  },
  123: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 0.4042609501124785, y: 13.818181818181818 },
  },
  124: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 4.317492163009404, y: 21.272727272727273 },
  },
  125: {
    map: "yakuza_0_kamuro_map",
    target: { x: 13.12976454439869, y: 4.363636363636364 },
  },
  126: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: 3.1327298227718985, y: -27.27272727272727 },
  },
  127: {
    map: "yakuza_5_osaka_map",
    target: { x: 4.633063198483759, y: 25.636363636363633 },
  },
  128: {
    map: "yakuza_0_kamuro_map",
    target: { x: 3.1354661598564038, y: 35.090909090909086 },
  },
  129: {
    map: "yakuza_kiwami_map",
    target: { x: 25.80489901160292, y: 23.81818181818182 },
  },
  130: {
    map: "yakuza_0_kamuro_map",
    target: { x: -20.9684299440397, y: 23.636363636363637 },
  },
  131: {
    map: "yakuza_0_kamuro_map",
    target: { x: 22.73212965895893, y: 31.454545454545457 },
  },
  132: {
    map: "yakuza_5_osaka_map",
    target: { x: 27.319096791059405, y: -21.818181818181817 },
  },
  133: {
    map: "yakuza_kiwami_map",
    target: { x: 8.601633003867642, y: 7.818181818181818 },
  },
  134: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.878999049730757, y: -23.636363636363637 },
  },
  // Duplicate Start
  135: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.878999049730757, y: -23.636363636363637 },
  },
  136: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.878999049730757, y: -23.636363636363637 },
  },
  137: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.878999049730757, y: -23.636363636363637 },
  },
  138: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.878999049730757, y: -23.636363636363637 },
  },
  139: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.878999049730757, y: -23.636363636363637 },
  },
  140: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.878999049730757, y: -23.636363636363637 },
  },
  141: {
    map: "yakuza_0_kamuro_map",
    target: { x: 5.878999049730757, y: -23.636363636363637 },
  },
  // Duplicate End
  142: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -12.127828503374355, y: -15.272727272727273 },
  },
  143: {
    map: "yakuza_5_nagoya_map",
    target: { x: 0.9280742459396751, y: 12.992654589642727 },
  },
  144: {
    map: "yakuza_6_onomichi_map",
    target: { x: -39.61974685931129, y: 12.545454545454545 },
  },
  145: {
    map: "yakuza_0_kamuro_map",
    target: { x: 16.265230704255092, y: 30.545454545454547 },
  },
  146: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -4.262430310615542, y: 23.272727272727273 },
  },
  147: {
    map: "yakuza_6_onomichi_map",
    target: { x: 0.6566808871709053, y: -32.36363636363636 },
  },
  148: {
    map: "yakuza_kiwami_map",
    target: { x: -4.691799820291441, y: 31.272727272727273 },
  },
  149: {
    map: "yakuza_5_osaka_map",
    target: { x: -23.005555192471082, y: 29.63636363636364 },
  },
  150: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 11.082318807600409, y: 16.18181818181818 },
  },
  151: {
    map: "yakuza_0_kamuro_map",
    target: { x: -33.70626121845634, y: -5.454545454545454 },
  },
  152: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -29.511049358210933, y: 29.818181818181817 },
  },
  153: {
    map: "yakuza_5_sapporo_map",
    target: { x: 15.58187958802021, y: -27.81818181818182 },
  },
  154: {
    map: "yakuza_kiwami_2_osaka_map",
    target: {
      x: 15.350376131582303, y: - 27.090909090909093
    },
  },
  155: {
    map: "yakuza_0_osaka_map",
    target: { x: -41.699681641315884, y: 5.2727272727272725 },
  },
  156: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -44.87296546248511, y: -16.545454545454547 },
  },
  157: {
    map: "yakuza_5_osaka_map",
    target: { x: -26.360531991373108, y: 1.4545454545454546 },
  },
  158: {
    map: "yakuza_0_kamuro_map",
    target: { x: -20.576496674057648, y: 44.90909090909091 },
  },
  159: {
    map: "yakuza_kiwami_map",
    target: { x: -20.13564089541743, y: 15.818181818181817 },
  },
  160: {
    map: "yakuza_5_nagoya_map",
    target: { x: -23.781902552204176, y: 14.007705729458564 },
  },
  161: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: 3.759275787326278, y: 29.09090909090909 },
  },
  162: {
    map: "yakuza_5_osaka_map",
    target: { x: -19.171295993725902, y: -30 },
  },
  163: {
    map: "yakuza_kiwami_map",
    target: { x: -4.691799820291441, y: 38.18181818181819 },
  },
  164: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -6.137899647286381, y: -28.363636363636363 },
  },
  165: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 38.04789968652037, y: 19.454545454545453 },
  },
  166: {
    map: "yakuza_0_kamuro_map",
    target: { x: -32.92239467849224, y: -14.909090909090908 },
  },
  167: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -19.095687791557626, y: -10.727272727272727 },
  },
  168: {
    map: "yakuza_6_kamuro_map",
    target: { x: -15.687783315667215, y: 12.545454545454545 },
  },
  169: {
    map: "yakuza_kiwami_map",
    target: { x: 36.75243192561628, y: -14.000000000000002 },
  },
  170: {
    map: "yakuza_0_osaka_map",
    target: { x: 2.236764532484377, y: -30 },
  },
  171: {
    map: "yakuza_5_fukuoka_map",
    target: { x: -19.96840125391849, y: 16.727272727272727 },
  },
  172: {
    map: "yakuza_6_onomichi_map",
    target: { x: -3.502298064911495, y: 29.454545454545457 },
  },
  173: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -16.538229605188302, y: -14.000000000000002 },
  },
  174: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 34.00025078369905, y: -6 },
  },
  175: {
    map: "yakuza_0_osaka_map",
    target: { x: 6.550524702275676, y: -30.363636363636363 },
  },
  176: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -33.05029963024353, y: 5.818181818181818 },
  },
  177: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -36.5856159851793, y: -9.272727272727273 },
  },
  178: {
    map: "yakuza_0_kamuro_map",
    target: { x: -33.314327948474286, y: -10 },
  },
  179: {
    map: "yakuza_kiwami_map",
    target: { x: 36.75243192561628, y: 18.72727272727273 },
  },
  180: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 10.741324382751166, y: 35.090909090909086 },
  },
  181: {
    map: "yakuza_6_onomichi_map",
    target: { x: -15.322554033987789, y: 27.090909090909093 },
  },
  182: {
    map: "yakuza_6_kamuro_map",
    target: { x: 5.115581515978439, y: 0.9090909090909091 },
  },
  183: {
    map: "yakuza_kiwami_map",
    target: { x: -20.33113255459624, y: 21.09090909090909 },
  },
  184: {
    map: "yakuza_5_nagoya_map",
    target: { x: -18.793503480278424, y: -34.30872852577532 },
  },
  185: {
    map: "yakuza_6_kamuro_map",
    target: { x: 18.075054689790484, y: 13.454545454545455 },
  },
  186: {
    map: "yakuza_0_osaka_map",
    target: { x: 23.326258695908503, y: -19.272727272727273 },
  },
  187: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -30.8573887543032, y: -33.09090909090909 },
  },
  188: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 44.670834987428876, y: 16.363636363636363 },
  },
  189: {
    map: "yakuza_5_nagoya_map",
    target: { x: 0.34802784222737815, y: 32.07561601818048 },
  },
  190: {
    map: "yakuza_kiwami_map",
    target: { x: 6.25573309372192, y: -16 },
  },
  191: {
    map: "yakuza_0_kamuro_map",
    target: { x: 20.184563404075597, y: -7.818181818181818 },
  },
  192: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 32.54300648405452, y: 9.454545454545455 },
  },
  193: {
    map: "yakuza_5_osaka_map",
    target: { x: 30.674073589961438, y: -33.09090909090909 },
  },
  194: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -28.3025372624872, y: 3.8181818181818183 },
  },
  195: {
    map: "yakuza_0_osaka_map",
    target: { x: -15.817120622568096, y: -29.63636363636364 },
  },
  196: {
    map: "yakuza_6_kamuro_map",
    target: { x: -4.433503980514648, y: 26.545454545454543 },
  },
  197: {
    map: "yakuza_5_nagoya_map",
    target: { x: -18.561484918793504, y: -14.616736413348066 },
  },
  198: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -4.042609501124785, y: 28.18181818181818 },
  },
  199: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 1.5344749118215952, y: 12.181818181818182 },
  },
  200: {
    map: "yakuza_5_osaka_map",
    target: { x: 6.390431997908633, y: 17.81818181818182 },
  },
  201: {
    map: "yakuza_6_onomichi_map",
    target: { x: 28.237278148348928, y: -14.363636363636365 },
  },
  202: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -20.630162703379224, y: 24.181818181818183 },
  },
  203: {
    map: "yakuza_0_kamuro_map",
    target: { x: 14.893464259317918, y: 43.27272727272727 },
  },
  204: {
    map: "yakuza_6_onomichi_map",
    target: { x: 30.645108067975578, y: 29.454545454545457 },
  },
  205: {
    map: "yakuza_5_sapporo_map",
    target: { x: 46.45708543835655, y: -31.818181818181817 },
  },
  206: {
    map: "yakuza_6_onomichi_map",
    target: { x: -34.14740613288708, y: -21.272727272727273 },
  },
  207: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: 30.52170173349213, y: 36.90909090909091 },
  },
  208: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 28.873228840125385, y: -32.54545454545455 },
  },
  209: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -18.013196480938415, y: 10.181818181818182 },
  },
  210: {
    map: "yakuza_0_kamuro_map",
    target: { x: 23.124062928940976, y: 38.72727272727273 },
  },
  211: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: 8.524860621231085, y: 15.272727272727273 },
  },
  212: {
    map: "yakuza_6_kamuro_map",
    target: { x: 17.0519383865948, y: 30.363636363636363 },
  },
  213: {
    map: "yakuza_5_osaka_map",
    target: { x: 21.88722959283707, y: -29.272727272727273 },
  },
  214: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -4.446870451237263, y: 17.272727272727273 },
  },
  215: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -5.952186663266607, y: 41.45454545454545 },
  },
  216: {
    map: "yakuza_0_osaka_map",
    target: { x: -23.965334276618325, y: 4.545454545454546 },
  },
  217: {
    map: "yakuza_5_fukuoka_map",
    target: { x: 0.26984326018808774, y: 30 },
  },
  218: {
    map: "yakuza_kiwami_map",
    target: { x: -34.40653201547057, y: -14.545454545454545 },
  },
  219: {
    map: "yakuza_kiwami_2_osaka_map",
    target: { x: -13.157465255641974, y: 10.363636363636363 },
  },
  220: {
    map: "yakuza_6_kamuro_map",
    target: { x: -4.604023364380596, y: 16.363636363636363 },

  },
  221: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -2.727955398793947, y: 20.18181818181818 },
  },
  222: {
    map: "yakuza_kiwami_2_kamuro_map",
    target: { x: -15.856240755489818, y: 28.909090909090907 },
  },
  223: {
    map: "yakuza_5_sapporo_map",
    target: { x: -23.084266056326236, y: 1.090909090909091 },
  },
  224: {
    map: "yakuza_0_kamuro_map",
    target: { x: 12.737831274416639, y: 34.54545454545455 },
  },
  225: {
    map: "yakuza_4_kamuro_streets_map",
    target: { x: -0.808521900224957, y: 35.090909090909086 },
  },
  226: {
    map: "yakuza_5_sapporo_map",
    target: { x: 5.482513188377481, y: -23.454545454545457 },
  }
};
