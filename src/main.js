import Vue from "vue";
import App from "./App.vue";
import VueGeolocation from "vue-browser-geolocation";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(VueGeolocation);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
