<template>
  <div class="get-weather-slide">
    <div class="back-layer">
      <Background>
        <div class="back-text">
          <h3 class="big-transparent-text">Get The</h3>
          <h3 class="big-transparent-text">Weather</h3>
        </div>
      </Background>

      <div class="get-weather-wrap text-center">
        <div class="location-form">
          <v-text-field
            type="text"
            label="Enter the city name - You must spelling correctly"
            v-model="query"
            @keyup.enter="fetchEntredLocationWeather"
          ></v-text-field>
          <br />
          <v-btn
            color="primary"
            :disabled="query.length === 0"
            @click="fetchEntredLocationWeather"
          >Get {{query}} Weather Now</v-btn>
        </div>

        <div v-if="typeof weather.main != 'undefined'" class="weather-info">
          <div class="city">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div>{{ weather.weather[0].main }}</div>

          <div>{{ Math.round(weather.main.temp) }} °</div>
          <div>
            {{ Math.round(weather.main.temp_max) }} °
            {{ Math.round(weather.main.temp_min) }} °
          </div>
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
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  padding: 0 1em;
}

.location-form {
  margin: 2em 0;
}

.title h3 {
  font-size: 1.5em;
}

.weather-info div {
  margin: 1em 0;
}

.city {
  font-size: 1.3em;
  font-weight: bold;
  color: #ff4500;
}
</style>
