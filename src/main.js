import Vue from 'vue';
import App from './App.vue';
import router from './router';

// BOOTSTRAP
// import { BootstrapVue } from 'bootstrap-vue';
// Vue.use(BootstrapVue);
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAmazon } from '@fortawesome/free-brands-svg-icons/faAmazon';
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons/faBandcamp';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons/faGooglePlay';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faItunes } from '@fortawesome/free-brands-svg-icons/faItunes';
import { faNapster } from '@fortawesome/free-brands-svg-icons/faNapster';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons/faSoundcloud';
import { faSpotify } from '@fortawesome/free-brands-svg-icons/faSpotify';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons/faYoutubeSquare';

library.add(
  faAmazon,
  faApple,
  faBandcamp,
  faFacebook,
  faGooglePlay,
  faInstagram,
  faItunes,
  faNapster,
  faSoundcloud,
  faSpotify,
  faYoutubeSquare
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
