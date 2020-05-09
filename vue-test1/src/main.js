import Vue from "vue";
import App from "./App.vue";
import Header from "./components/Header.vue";

Vue.config.productionTip = false;

Vue.component("app-title-home", Header);

new Vue({
  el: "#app",
  render: h => h(App)
});
