<template>
  <div>
    <h2>🗺️ KIRYU EVERYWHERE! 🗺️</h2>
    <div v-if="this.game_found">
      <h3>LOCATION #{{ this.location_number }}</h3>
      <p>{{ getGameName().toUpperCase() }}</p>
      <Game
        :map="getMap()"
        :number="this.location_number"
        :threshold="getThreshold()"
        :target="getTarget()"
        :debug_mode="this.debug_mode"
        :on_complete="onComplete()"
      />
      <h3>THIS HAS NOTHING TO DO WITH SEGA</h3>
      <h3>MADE BY <a href="paul@sarda.dev">paul@sarda.dev</a></h3>
    </div>
    <div v-else>
      <h2 class="emergency_font">
        This is bad please email <a href="paul@sarda.dev">paul@sarda.dev</a> and
        tell him he forgot to update the site.
      </h2>
    </div>
    <div>
      <input type="checkbox" id="debug_checkbox" v-model="debug_mode" />
      <label for="debug_checkbox">Debug Mode: {{ debug_mode }}</label>
    </div>
    <div v-if="debug_mode">
      <p>Select location</p>
      <input v-model="location_number" />
      <br />
      <br />
      <button @click="resetCookie()">Reset Cookie</button>
      <p>Cookie: {{ this.current_cookie }}</p>
      <button @click="getCookie()">Update Gotten Cookie</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Game from "./components/Game.vue";
import { games } from "./games";
import { map_info } from "./maps";
import { getGuesses, resetCookie } from "./history";

export const first_date = new Date(2022, 6, 28, 0, 0, 0);

function getLocationNumber() {
  let today = new Date();
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const l = today.getTime();
  const r = first_date.getTime();
  return Math.floor(Math.abs((l - r) / oneDay));
}

@Options({
  components: {
    Game,
  },
  data() {
    const location_number = getLocationNumber();
    return {
      debug_mode: false,
      current_cookie: getGuesses(document),
      location_number: location_number,
      game_found: Object.keys(games).length >= location_number,
    };
  },
  methods: {
    onComplete() {
      console.log("Jobs done");
    },
    resetCookie() {
      resetCookie(document);
    },
    getMap() {
      return games[this.location_number].map;
    },
    getTarget() {
      return games[this.location_number].target;
    },
    getGameName() {
      return map_info[games[this.location_number].map].game_name;
    },
    getThreshold() {
      return map_info[games[this.location_number].map].threshold;
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

a {
  color: lightgray;
}

body {
  background-color: #5c5c5c;
}

.emergency_font {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
