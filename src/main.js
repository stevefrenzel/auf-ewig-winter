import Vue from 'vue';
import App from './App.vue';

// BOOTSTRAP
import { BootstrapVue } from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons/faBandcamp';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faBandcamp, faFacebook, faInstagram);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
