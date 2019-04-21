import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";

// vue-material
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

// material icon
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
