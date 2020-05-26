<template>
  <v-app>
    <div class="slider">
      <hooper :vertical="true" style="height: 100%" :itemsToShow="1" :centerMode="true">
        <slide>
          <div class="first-slide">
            <div class="back-layer">
              <Background>
                <div class="back-text">
                  <h3 class="big-transparent-text">Mohamed</h3>
                  <h3 class="big-transparent-text">Khaled</h3>
                </div>
              </Background>

              <div class="overlay-layer">
                <div class="front-right-text">
                  <h3>
                    Get
                    <span class="dot"></span>
                  </h3>
                  <h3>The</h3>
                  <h3>Weather</h3>
                </div>

                <div class="front-left-text">
                  <p>
                    Lorem ipsum dolor sit, amet
                    <br />elitprehenderit quo e
                    <br />aliquam deserunt quod.
                  </p>
                </div>
              </div>

              <div class="circles-layers">
                <div class="circle circle-1"></div>
                <div class="circle circle-2"></div>
                <div class="circle circle-3"></div>
                <div class="circle circle-4"></div>
              </div>
            </div>
          </div>
        </slide>

        <slide>
          <GetWeather />
        </slide>

        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </div>
  </v-app>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";

import GetWeather from "./components/GetWeather";
import Background from "./components/Background";

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    HooperPagination,
    Background,
    GetWeather
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.slider {
  height: 100vh;
  background: #111;
}

.slider {
  outline: 0;
}

.hooper {
  outline: 0;
}

.hooper-pagination.is-vertical .hooper-indicator {
  width: 35px;
  height: 7px;
}

.hooper-pagination.is-vertical .hooper-indicator.is-active {
  width: 50px;
}

.hooper-indicator:hover,
.hooper-indicator {
  background: #0527e6;
  outline: none;
  border: 0;
}

.hooper-indicator:hover,
.hooper-indicator.is-active {
  background: #ff4500;
}

.back-layer {
  position: relative;
}

.overlay-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.front-right-text,
.front-left-text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
}

.front-right-text {
  right: 20%;
}

.front-right-text h3 {
  font-size: 8em;
  text-transform: uppercase;
}

.front-left-text {
  left: 13%;
  transform: rotate(270deg);
}

.dot {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: #ff4500;
  border-radius: 50%;
}

.circle {
  position: absolute;
  border: 0.4em solid transparent;
  border-radius: 0.5em;
  background: linear-gradient(to right, #111111, #111111),
    linear-gradient(15deg, #0527e6, #1b9e98);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
}

.circle-1 {
  width: 3em;
  height: 3em;
  bottom: 32.6%;
  left: 12%;
  opacity: 0.9;
}

.circle-2 {
  width: 2.2em;
  height: 2.2em;
  top: 20%;
  left: 30%;
  border-radius: 0.7em;
  opacity: 0.6;
}

.circle-3 {
  width: 2.5em;
  height: 2.5em;
  bottom: 20%;
  left: 33%;
}

.circle-4 {
  width: 2.5em;
  height: 2.5em;
  top: 14%;
  right: 30%;
  opacity: 0.8;
}

@media (min-width: 992px) and (max-width: 1183px) {
  .front-left-text {
    left: 0;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .slider {
    padding: 1em;
  }

  .overlay-layer {
    position: static;
  }

  .front-right-text,
  .front-left-text {
    transform: translateY(0);
    left: 0;
  }

  .front-left-text {
    position: static;
  }

  .front-left-text {
    transform: rotate(0);
  }

  .front-right-text h3 {
    font-size: 5em;
  }

  .circle {
    opacity: 0.4;
  }
}

@media (min-width: 320px) and (max-width: 767px) {
  .slider {
    padding: 1em;
  }

  .overlay-layer {
    position: static;
  }

  .front-right-text,
  .front-left-text {
    transform: translateY(0);
    left: 0;
  }

  .front-left-text {
    position: static;
  }

  .front-left-text {
    transform: rotate(0);
  }

  .front-right-text h3 {
    font-size: 3em;
  }

  .circle {
    opacity: 0.1;
  }

  .circle-3 {
    bottom: 0;
  }
}
</style>
