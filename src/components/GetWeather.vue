<template>
  <div class="get-weather-slide">
    <div class="type-city-wrap">
      <h3>
        Just type the city name
      </h3>
      <p>You must spelling correctly</p>
    </div>

    <div class="location-input">
      <input
        type="text"
        placeholder="City"
        v-model="query"
        @keyup.enter="fetchEntredLocationWeather"
      />
    </div>

    <div v-if="typeof weather.main != 'undefined'" class="weather-info">
      <div>{{ weather.name }}, {{ weather.sys.country }}</div>
      <div>{{ weather.weather[0].main }}</div>

      <div>{{ Math.round(weather.main.temp) }}</div>
      <div>
        {{ Math.round(weather.main.temp_max) }},
        {{ Math.round(weather.main.temp_min) }}
      </div>
      <div>{{ weather.weather[0].description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetWeather",

  data() {
    return {
      api_Key: "4b27475bb80b9d888231ad387cf93fc9",
      url_base: "http://api.openweathermap.org/data/2.5/",
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
.get-weather-slide {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  padding: 2em;
  background: #111111;
  color: #fff;
}

input {
  width: 50%;
  padding: 0.7em 1em;
  border: 1px solid #fff;
  margin: 1em 0;
  border-radius: 1em;
  outline: 0;
}

.type-city-wrap h3 {
  margin: 1em 0;
}

.type-city-wrap p {
  opacity: 0.6;
  margin: 1em 0;
}

.weather-info div {
  margin: 1em 0;
}
</style>
