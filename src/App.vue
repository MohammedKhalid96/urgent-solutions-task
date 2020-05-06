<template>
  <div id="app">
    <div class="slider">
      <div class="first-slide">
        <div class="back-layer">
          <div class="back-text">
            <h3 class="big-transparent-text">
              DES
            </h3>
            <h3 class="big-transparent-text">
              IGN
            </h3>
          </div>

          <div class="overlay-layer">
            <div class="front-right-text">
              <h3>
                Hello
                <span class="dot"></span>
              </h3>
              <h3>
                I am
              </h3>
              <h3>
                Mohamed
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
    </div>
    <GetWeather />
  </div>
</template>

<script>
import GetWeather from "./components/GetWeather";

export default {
  name: "App",
  components: {
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
  background: #111111;
}

.back-layer {
  position: relative;
}

.big-transparent-text {
  color: #333;
  font-size: 19em;
  padding: 1rem 0 0 20rem;
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
  color: #f0f8ff;
}

.front-left-text {
  left: 13%;
  transform: rotate(270deg);
  opacity: 0.3;
}

.front-left-text p {
  color: #f0f8ff;
}

.dot {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: orangered;
  border-radius: 50%;
}

.circle {
  position: absolute;
  border-radius: 1em;
  border: 0.5em solid transparent;
  border-radius: 1em;
  background: linear-gradient(to right, #111111, #111111),
    linear-gradient(15deg, #0527e6, #1b9e98);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
}

.circle-1 {
  width: 2em;
  height: 2em;
  bottom: 32.7%;
  left: 13%;
  opacity: 0.9;
}

.circle-2 {
  width: 1.2em;
  height: 1.2em;
  top: 20%;
  left: 30%;
  border-radius: 0.7em;
  opacity: 0.6;
}

.circle-3 {
  width: 1.5em;
  height: 1.5em;
  bottom: 20%;
  left: 35%;
}

.circle-4 {
  width: 1.5em;
  height: 1.5em;
  top: 14%;
  right: 30%;
  opacity: 0.8;
}
</style>
