<template>
  <div class="get-weather-slide">
    <div class="get-weather-wrap">
      <div class="title">
        <h3>{{title.toLocaleUpperCase()}}</h3>
      </div>

      <div class="location-form">
        <input
          type="text"
          placeholder="Enter the city name (You must spelling correctly)"
          v-model="query"
          @keyup.enter="fetchEntredLocationWeather"
        />
        <br />
        <button
          :disabled="query.length === 0"
          @click="fetchEntredLocationWeather"
        >Get {{query}} Weather Now</button>
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
        <div v-if="weather.weather[0].description === 'clear sky'" class="weater-description">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetWeather",

  data() {
    return {
      api_Key: "4b27475bb80b9d888231ad387cf93fc9",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
      coordinates: {
        lat: 0,
        lng: 0
      },
      title: "Just type the city name",
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
.get-weather-slide {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 5em;
  text-align: center;
}

.location-form {
  margin: 2em 0;
}

input {
  width: 50%;
  padding: 1em;
  margin-bottom: 1em;
  outline: 0;
  border: 0.2em solid transparent;
  border-radius: 2em;
  background: linear-gradient(to right, #111111, #111111),
    linear-gradient(15deg, #0527e6, #1b9e98);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  color: #fff;
}

button {
  background: #ff4500;
  outline: 0;
  border: 0;
  padding: 1em 2em;
  color: #fff;
  border-radius: 2em;
  cursor: pointer;
}

button:disabled {
  background: #ff4500;
  opacity: 0.3;
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
