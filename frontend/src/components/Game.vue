<template>
  <div class="game">
    <img
      :src="require(`@/assets/pictures/games/${number}/${active_pic}.webp`)"
      class="game_pic"
    />
    <br />
    <div class="buttons">
      <div>
        <button @click="showPic(1)" :class="getClass(1)">1</button>
        <button @click="showPic(2)" :class="getClass(2)">2</button>
        <button @click="showPic(3)" :class="getClass(3)">3</button>
        <button @click="showPic(4)" :class="getClass(4)">4</button>
      </div>
    </div>
    <div v-if="this.state == `playing`">
      <h3>{{ guessesLeftCount() }} GUESSES LEFT</h3>
    </div>
    <div v-if="this.state == `win`">
      <h2>YOU WON</h2>
      <h3>WITH {{ guessesLeftCount() }} GUESSES LEFT</h3>
    </div>
    <div v-if="this.state == `lose`">
      <h2>YOU LOST</h2>
      <h3>TRY AGAIN TOMORROW!</h3>
    </div>
    <br />
    <canvas id="canvas" v-on:click="canvasClick" />
    <br />
    <div v-if="this.state == `playing`">
      <button
        :class="this.selected_x == null ? `submit disabled` : `submit`"
        @click="submitButton"
      >
        SUBMIT
      </button>
    </div>
    <div v-else>
      <button @click="shareClick" class="submit">{{ this.share_text }}</button>
    </div>
    <img id="map" :src="require(`@/assets/maps/${map}.webp`)" hidden="true" />
    <div>
      <p>DEBUG X:{{ this.click_debug_x }}</p>
      <p>DEBUG Y:{{ this.click_debug_y }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { position } from "../games";

const pic_count = 4;

@Options({
  props: {
    map: String,
    number: Number,
    target: {
      x: Number,
      y: Number,
    },
    threshold: Number,
  },
  data() {
    return {
      active_pic: 1,
      unlocked_pic: 1,
      canvas: null,
      selected_x: null,
      selected_y: null,
      center_x: null,
      center_y: null,
      guesses: [],
      state: "playing",
      share_text: "SHARE!",
      image_width: null,
      image_height: null,
      click_debug_x: null,
      click_debug_y: null,
      canvas_init: false,
    };
  },
  mounted() {
    var c = document.getElementById("canvas") as any;
    this.canvas = c.getContext("2d");

    this.timer = setInterval(() => {
      this.draw();
    }, 250);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    guessesLeftCount() {
      return pic_count + 1 - this.guesses.length;
    },
    showPic(num: number) {
      if (num <= this.unlocked_pic || this.state != "playing") {
        this.active_pic = num;
      }
    },
    unlockNext() {
      if (this.unlocked_pic + 1 <= pic_count) {
        this.unlocked_pic++;
        this.active_pic = this.unlocked_pic;
      }
    },
    getClass(num: number) {
      if (this.active_pic == num) {
        return "game_btn_active";
      }

      if (this.unlocked_pic >= num) {
        return "game_btn_unlocked";
      }

      if (this.state != "playing") {
        return "game_btn_unlocked_completed";
      }

      return "game_btn_inactive";
    },
    posAsPercent(pos: position): position {
      const image = document.getElementById("map") as HTMLImageElement;
      return {
        x: ((pos.x - this.center_x) / this.image_width) * 100,
        y: ((pos.y - this.center_y) / this.image_height) * 100,
      };
    },
    shareClick() {
      let text = `#KIRYU_EVERYWHERE #${this.number}\n\n`;
      text += "🗺️";
      for (let i = 0; i < this.unlocked_pic - 1; i++) {
        text += " 🟥";
      }
      text += " 🟩";
      for (let i = 0; i < pic_count - this.unlocked_pic; i++) {
        text += " ⬛";
      }
      text += "\n\n";
      text += "https://kiryueverywhere.github.io";
      navigator.clipboard.writeText(text);
      this.share_text = "COPPIED!";
      let share_text_timer = setInterval(() => {
        this.share_text = "SHARE!";
        clearInterval(share_text_timer);
      }, 250);
    },
    submitButton() {
      if (this.selected_x == null || this.selected_y == null) {
        return;
      }

      const percent_pos: position = this.posAsPercent({
        x: this.selected_x,
        y: this.selected_y,
      });
      console.log(`CLICK ${percent_pos.x}% ${percent_pos.y}%`);
      const dist_x = Math.abs(percent_pos.x - this.target.x);
      const dist_y = Math.abs(percent_pos.y - this.target.y);
      const dist = dist_x + dist_y;

      const image = document.getElementById("map") as HTMLImageElement;
      this.click_debug_x = `px:${percent_pos.x} sx:${this.selected_x} cx:${this.center_x} iw:${image.width}`;
      this.click_debug_y = `py:${percent_pos.y} sy:${this.selected_y} cy:${this.center_y} ih:${image.height}`;

      if (dist_x <= this.threshold && dist_y <= this.threshold) {
        console.log("win!");
        this.state = "win";
      } else if (this.guesses.length + 1 >= pic_count + 1) {
        console.log("lose!");
        this.state = "lose";
      } else {
        console.log(`unlock next! ${this.guesses.length}`);
        this.unlockNext();
        console.log(
          `failure!: dist_x:${dist_x}, dist_y:${dist_y}, dist:${dist} threshold:${this.threshold}`
        );
      }
      this.guesses.push({
        x: this.selected_x,
        y: this.selected_y,
        dist_x: dist_x,
        dist_y: dist_y,
      });
      this.selected_x = null;
      this.selected_y = null;
      this.draw();
    },
    canvasClick(event: any) {
      if (this.state != "playing") {
        return;
      }
      this.selected_x = event.offsetX;
      this.selected_y = event.offsetY;
      this.draw();
    },
    drawMap() {
      let ctx = this.canvas;

      const canvas_width = ctx.canvas.width;
      const canvas_height = ctx.canvas.height;

      const image = document.getElementById("map") as HTMLImageElement;
      const ratio = Math.min(
        canvas_width / image.width,
        canvas_height / image.height
      );

      this.image_width = image.width * ratio;
      this.image_height = image.height * ratio;
      const x = canvas_width / 2 - this.image_width / 2;
      const y = canvas_height / 2 - this.image_height / 2;
      this.center_x = canvas_width / 2;
      this.center_y = canvas_height / 2;

      ctx.drawImage(image, x, y, this.image_width, this.image_height);
    },
    draw() {
      let ctx = this.canvas;
      ctx.clearRect(0, 0, ctx.width, ctx.height);

      if (!this.canvas_init) {
        this.canvas_init = true;
        const canvas_width = window.innerWidth * 0.8;
        const canvas_height = window.innerHeight * 0.5;
        ctx.canvas.width = canvas_width;
        ctx.canvas.height = canvas_height;
      }

      this.drawMap();

      const guess_size = ctx.canvas.height * 0.05;
      for (const guess of this.guesses) {
        ctx.beginPath();
        let colour = "";
        if (guess.dist_x <= this.threshold && guess.dist_y <= this.threshold) {
          colour = "green";
        } else {
          const dist = guess.dist_x + guess.dist_y;
          if (dist < this.threshold * 3.5) {
            colour = "#FF0000";
          } else {
            colour = "#8B0000";
          }
        }
        ctx.strokeStyle = colour;
        ctx.rect(
          guess.x - guess_size / 2,
          guess.y - guess_size / 2,
          guess_size,
          guess_size
        );
        ctx.stroke();
      }

      if (this.selected_x && this.selected_y) {
        ctx.beginPath();
        ctx.strokeStyle = "Black";
        ctx.rect(
          this.selected_x - guess_size / 2,
          this.selected_y - guess_size / 2,
          guess_size,
          guess_size
        );
        ctx.stroke();
      }
    },
  },
})
export default class Game extends Vue {
  map!: string;
  number!: number;
  target!: position;
  threshold!: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 5px;
}

.buttons {
  margin: 5px;
}

.buttons button {
  border: none;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 8px;
}

.submit {
  font-family: "Nanum Brush Script", cursive;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 30px;
  background-color: #a8a8a8;
  color: white;
  transition-duration: 0.4s;
}

.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit:hover {
  background-color: lightgray;
}

.game_pic {
  height: 20vh;
  border-radius: 25px;
  background: #73ad21;
}

.game_btn_active {
  background: #42b983;
}

.game_btn_unlocked {
  background: lightgray;
}

.game_btn_unlocked_completed {
  background: lightgray;
}

.game_btn_inactive {
  background: #63666a;
}

#canvas {
  border: 0px solid blue;
}

.map {
  height: 100%;
  margin-top: 10%;
}
</style>
