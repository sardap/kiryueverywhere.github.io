<template>
  <div>
    <h2>🗺️ KIRYU EVERYWHERE! 🗺️</h2>
    <h3>LOCATION #{{ this.active_game }}</h3>
    <Game
      :map="getMap()"
      :number="this.active_game"
      :threshold="getThreshold()"
      :target="getTarget()"
    />
    <h3>This has nothing to do with SEGA</h3>
    <h3>made by paul@sarda.dev</h3>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Game from "./components/Game.vue";
import { map_info, games } from "./games";

const first_date = new Date("2022-07-28");

function getGameNumber() {
  let today = new Date();
  const l = today.getTime();
  const r = first_date.getTime();
  return Math.round((l - r) / (1000 * 60 * 60 * 24));
}

@Options({
  components: {
    Game,
  },
  data() {
    return {
      active_game: getGameNumber(),
    };
  },
  methods: {
    getMap() {
      console.log(this.active_game);
      return games[this.active_game].map;
    },
    getTarget() {
      console.log(this.active_game);
      return games[this.active_game].target;
    },
    getThreshold() {
      console.log(this.active_game);
      return map_info[games[this.active_game].map].threshold;
    },
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap");

#app {
  font-family: "Nanum Brush Script", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 10px;
}

body {
  background-color: #5c5c5c;
}
</style>
