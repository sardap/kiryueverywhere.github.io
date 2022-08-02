<template>
  <div class="dialog">
    <div class="center">
      <h2>Your stats!</h2>
      <hr />
      <p>{{ getWinRate() }}% Win rate</p>
      <p>Since location:{{ stats.first_location }}</p>
      <p>Current Streak:{{ current_streak }}</p>
      <hr />
      <h3>Map breakdown</h3>
      <div v-for="item in getMapBreakdown()" :key="item.name" class="map_breakdown_entry">
        <p><b>{{ item.name }}</b></p>
        <p>{{ (item.tally.correct / (item.tally.incorrect + item.tally.correct)) * 100 }}%,
          🟢{{ item.tally.correct }} 🔴{{ item.tally.incorrect }}</p>
      </div>
      <button @click="closeDialog()" class="btn">Okay</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { closeDialog } from "vue3-promise-dialog";
import { FinalGuess, getGuesses, guessHistoryEntry } from "../history";
import { getLocationNumber } from "../misc";
import { games } from '../games'
import { map_info } from '../maps'

interface MapGuessTally {
  correct: number,
  incorrect: number,
}

interface MapBreakdownEntry {
  tally: MapGuessTally,
  name: string,
}

interface Stats {
  first_location: number;
  location_count: Map<string, MapGuessTally>;
}

function getStats(guesses: Record<number, guessHistoryEntry[]>): Stats {
  const game_count = getLocationNumber();
  const locations_count = new Map<string, MapGuessTally>()
  let first_guess_number = -1;
  for (let i = 0; i <= game_count; i++) {
    if (first_guess_number == -1 && i in guesses) {
      first_guess_number = i;
    }

    if (i in guesses) {
      const location = games[i];
      if (!(location.map in locations_count)) {
        locations_count.set(location.map, { correct: 0, incorrect: 0 });
      }
      const location_count = locations_count.get(location.map);

      const guess = guesses[i];
      for (let j = 0; j < guess.length; j++) {
        if (guess[j].final_guess == FinalGuess.Win) {
          location_count!.correct++
        } else if (guess[j].final_guess == FinalGuess.Lose) {
          location_count!.incorrect++
        }
      }
    }
  }

  return {
    first_location: first_guess_number,
    location_count: locations_count,
  };
}

function guessWon(ary: guessHistoryEntry[]) {
  for (let i = 0; i < ary.length; i++) {
    if (ary[i].final_guess == FinalGuess.Win) {
      return true;
    }
  }

  return false;
}

function currentStreak(guesses: Record<number, guessHistoryEntry[]>) {
  const game_count = getLocationNumber();
  for (let i = game_count; i > 0; i--) {
    if (i in guesses) {
      if (!guessWon(guesses[i])) {
        return game_count - i;
      }
    } else {
      return game_count - i;
    }
  }

  return 0;
}

export default defineComponent({
  props: {},
  setup() {
    function returnValue() {
      return true;
    }
    return {
      returnValue,
      closeDialog,
    };
  },
  data() {
    const guesses = getGuesses(document).guesses;
    return {
      guesses: guesses,
      stats: getStats(guesses),
      current_streak: currentStreak(guesses),
    };
  },
  methods: {
    getWinRate() {
      let correct_count = 0;
      let incorrect_count = 0;
      for (const [map, tally] of this.stats.location_count) {
        correct_count += tally.correct
        incorrect_count += tally.incorrect;
      }

      return (correct_count / (correct_count + incorrect_count)) * 100;
    },
    getMapBreakdown() {
      const result: MapBreakdownEntry[] = [];
      for (const [map, tally] of this.stats.location_count) {
        result.push({ name: map_info[map].plain_name, tally: tally })
      }
      return result;
    },
  },
});
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: grey;
  padding: 30px;
}

.btn {
  margin: 10px;
}

h2 {
  margin: 5px;
}

h3 {
  margin: 5px;
}

.map_breakdown_entry {
  text-align: center;
  margin: 0px;
}

p {
  margin: 0px;
}

button {
  font-family: "Nanum Brush Script", cursive;
  border: none;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  background-color: #a8a8a8;
  color: white;
  transition-duration: 0.4s;
}

button:hover {
  background-color: lightgray;
  cursor: pointer;

}
</style>
