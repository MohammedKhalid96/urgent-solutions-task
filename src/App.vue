<template>
  <div id="app">
    <div class="slider">
      <hooper
        :vertical="true"
        style="height: 100%"
        :itemsToShow="1"
        :centerMode="true"
      >
        <slide>
          <div class="first-slide">
            <div class="back-layer">
              <div class="back-text">
                <h3 class="big-transparent-text">
<<<<<<< HEAD
                  Mohamed
                </h3>
                <h3 class="big-transparent-text">
                  Khaled
=======
                  DES
                </h3>
                <h3 class="big-transparent-text">
                  IGN
>>>>>>> ffbae9f56e242a286f166f580b154bd9b479609c
                </h3>
              </div>

              <div class="overlay-layer">
                <div class="front-right-text">
                  <h3>
<<<<<<< HEAD
                    Get
                    <span class="dot"></span>
                  </h3>
                  <h3>
                    The 
                  </h3>
                  <h3>
                    Weather
=======
                    Hello
                    <span class="dot"></span>
                  </h3>
                  <h3>
                    I am
                  </h3>
                  <h3>
                    Mohamed
>>>>>>> ffbae9f56e242a286f166f580b154bd9b479609c
                  </h3>
                </div>

                <div class="front-left-text">
                  <p>
                    Lorem ipsum dolor sit, amet<br />
                    elitprehenderit quo e <br />aliquam deserunt quod.
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
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";

import GetWeather from "./components/GetWeather";

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    HooperPagination,
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
<<<<<<< HEAD
=======
  background: #111111;
>>>>>>> ffbae9f56e242a286f166f580b154bd9b479609c
}

.slider {
  outline: 0;
}

.hooper {
  outline: 0;
}

.hooper-pagination.is-vertical .hooper-indicator {
<<<<<<< HEAD
  width: 35px;
  height: 7px;
}

.hooper-pagination.is-vertical .hooper-indicator.is-active {
  width: 50px;
}

.hooper-indicator:hover, .hooper-indicator {
  background: #0527e6;
  outline: none;
  border: 0;
}

.hooper-indicator:hover, .hooper-indicator.is-active {
  background: #ff4500;
=======
  width: 15px;
>>>>>>> ffbae9f56e242a286f166f580b154bd9b479609c
}

.back-layer {
  position: relative;
}

.big-transparent-text {
<<<<<<< HEAD
  color: #1b9e98;
  font-size: 19em;
  padding: 1rem 0 0 5rem;
=======
  color: #333;
  font-size: 19em;
  padding: 1rem 0 0 20rem;
>>>>>>> ffbae9f56e242a286f166f580b154bd9b479609c
  opacity: 0.1;
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
}

.front-right-text {
  right: 20%;
}

.front-right-text h3 {
  font-size: 8em;
<<<<<<< HEAD
  text-transform: uppercase;
=======
  color: #f0f8ff;
>>>>>>> ffbae9f56e242a286f166f580b154bd9b479609c
}

.front-left-text {
  left: 13%;
  transform: rotate(270deg);
<<<<<<< HEAD
=======
  opacity: 0.3;
}

.front-left-text p {
  color: #f0f8ff;
>>>>>>> ffbae9f56e242a286f166f580b154bd9b479609c
}

.dot {
  display: inline-block;
  width: 1rem;
  height: 1rem;
<<<<<<< HEAD
  background: #ff4500;
=======
  background: orangered;
>>>>>>> ffbae9f56e242a286f166f580b154bd9b479609c
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
  bottom: 32.7%;
  left: 13%;
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
  left: 35%;
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

  .big-transparent-text {
    font-size: 20em;
    opacity: 0.3;
    padding: 1rem 0 0 5rem;
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

  .big-transparent-text {
    font-size: 10em;
    opacity: 0.3;
    padding: 1rem 0 0 5rem;
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
}
</style>
