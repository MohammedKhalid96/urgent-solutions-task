<template>
  <div class="get-weather-slide">
    <div class="back-layer">
      <Background>
        <div class="back-text">
          <h3 class="big-transparent-text">Get The</h3>
          <h3 class="big-transparent-text">Weather</h3>
        </div>
      </Background>

      <div class="get-weather-wrap">
        <div class="location-form">
          <v-text-field
            class="d-inline"
            type="text"
            label="Enter the city name and press enter - You must spelling correctly"
            v-model="query"
            @keyup.enter="fetchEntredLocationWeather"
          ></v-text-field>
        </div>

        <div v-if="typeof weather.main != 'undefined'" class="weather-info">
          <div>{{ weather.name }}, {{ weather.sys.country }}</div>
          <div>{{ weather.weather[0].main }}</div>

          <div>{{ Math.round(weather.main.temp) }} °</div>

          <div>{{ weather.weather[0].description }}</div>
          <div v-if="weather.weather[0].description === 'clear sky'" class="weater-description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Background from "./Background";

export default {
  name: "GetWeather",
  components: {
    Background
  },

  data() {
    return {
      api_Key: "4b27475bb80b9d888231ad387cf93fc9",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
      coordinates: {
        lat: 0,
        lng: 0
      }
    };
  },

  methods: {
    fetchEntredLocationWeather() {
      fetch(
        `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_Key}`
      )
        .then(res => {
          return res.json();
        })
        .then(this.setResults);
    },
    setResults(results) {
      this.weather = results;
    }
  },
  mounted() {
    let long;
    let lat;
    for (var i = 0; i < 2; i++) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          // Fetch weather
          this.locationFound = true;
          long = position.coords.longitude;
          lat = position.coords.latitude;
          fetch(
            `${this.url_base}weather?lat=${lat}&lon=${long}&units=metric&APPID=${this.api_Key}`
          )
            .then(res => {
              return res.json();
            })
            .then(res => {
              this.setResults(res);
            });
        }),
          error => {
            if (error.code == error.PERMISSION_DENIED) {
              this.locationFound = false;
            }
          };
      }
    }
  }
};
</script>

<style>
.get-weather-wrap {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 90%;
  color: #fff;
}

.location-form {
  margin: 2em 0;
}

.theme--light.v-label,
input {
  color: #fff !important;
}

.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: #ff4500 !important;
  opacity: 0.3;
}

.weather-info div {
  display: inline;
  margin-right: 1.5em;
  font-size: 2.5em;
  font-weight: bold;
  text-transform: uppercase;
}

@media (min-width: 320px) and (max-width: 767px) { 
  .weather-info div {
    display: block;
    margin-bottom: 1em;
    font-size: 2em;
  }
}
</style>
