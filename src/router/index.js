import Vue from 'vue';
import VueRouter from 'vue-router';
import Start from '../views/Start';
import Artists from '../views/Artists';
import Haxan from '../views/Haxan';
import KoraWinter from '../views/KoraWinter';
import LegalNotice from '../views/LegalNotice';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start,
  },
  {
    path: '/artists',
    name: 'Artists',
    component: Artists,
  },
  {
    path: '/haxan',
    name: 'Haxan',
    component: Haxan,
  },
  {
    path: '/kora-winter',
    name: 'Kora Winter',
    component: KoraWinter,
  },
  {
    path: '/legal-notice',
    name: 'Legal Notice',
    component: LegalNotice,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
