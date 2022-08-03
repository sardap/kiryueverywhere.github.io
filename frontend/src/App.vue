<template>
  <div>
    <h2>🗺️ KIRYU EVERYWHERE! 🗺️</h2>
    <div v-if="location_number <= location_count">
      <h3>LOCATION #{{ location_number }}</h3>
      <p>{{ getGameName().toUpperCase() }}</p>
      <Game :map="getMap()" :number="location_number" :threshold="getThreshold()" :target="getTarget()"
        :debug_mode="debug_mode" :on_complete="onComplete()" />
      <br />
      <button @click="openStats()" class="stats">📈Stats📈</button>
      <h3>THIS HAS NOTHING TO DO WITH SEGA</h3>
      <h3>MADE BY <a href="paul@sarda.dev">paul@sarda.dev</a></h3>
    </div>
    <div v-else>
      <h2 class="emergency_font">
        This is bad please email <a href="paul@sarda.dev">paul@sarda.dev</a> and
        tell him he forgot to update the site.
      </h2>
    </div>
    <DialogWrapper />
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
      <p>Cookie: {{ current_cookie }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Game from "./components/Game.vue";
import { games } from "./games";
import { map_info } from "./maps";
import { getGuesses, resetCookie } from "./history";
import { DialogWrapper } from "vue3-promise-dialog";
import { confirm, getLocationNumber } from "./misc";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Game,
    DialogWrapper,
  },
  data() {
    const location_number = getLocationNumber();
    return {
      show: false,
      debug_mode: false,
      current_cookie: getGuesses(document),
      location_number: location_number,
      location_count: Object.keys(games).length,
    };
  },
  methods: {
    openStats: async () => {
      if (await confirm()) {
        console.log("YES");
      } else {
        console.log("NO");
      }
    },
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

.stats {
  font-family: "Nanum Brush Script", cursive;
  border: none;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  background-color: #a8a8a8;
  font-size: 15px;
  margin: 4px 2px;
  border-radius: 8px;
}

.stats:hover {
  background-color: lightgray;
  cursor: pointer;
}
</style>
