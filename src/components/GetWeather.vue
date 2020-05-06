<template>
  <div>
    <div>{{ coordinates.lat }} latitude, {{ coordinates.lng }} Longitude</div>

    <div>
      <input
        type="text"
        v-model="query"
        @keyup.enter="fetchEntredLocationWeather"
      />
    </div>
    <div v-if="typeof weather.main != 'undefined'">
      <div>
        {{ weather.name }}, {{ weather.sys.country }}, {{ weather.coord.lat }}
      </div>
      <div>{{ Math.round(weather.main.temp) }}</div>
      <div>{{ weather.weather[0].main }}</div>
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

  created() {
    this.$getLocation({})
      .then(coordinates => {
        this.coordinates = coordinates;
      })
      .catch(error => alert(error));
  },

  methods: {
    currentLocationWeather() {
      fetch(
        `${this.url_base}weather?lat=${this.coordinates.lat}&lon=${this.coordinates.lng}&units=metric&APPID=${this.api_Key}`
      )
        .then(res => {
          return res.json();
        })
        .then(this.setResults);
    },

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
  }
};
</script>

<style></style>
