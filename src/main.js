import Vue from "vue";
import App from "./App.vue";
import Vuetify from 'vuetify/lib';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
    Vuetify,
    vuetify,
    render: h => h(App)
}).$mount("#app");