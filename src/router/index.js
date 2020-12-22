import Vue from 'vue';
import VueRouter from 'vue-router';
// import Start from '../views/Start';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Start',
    component: () => import(/* webpackChunkName: "Start" */ '../views/Start'),
  },
  {
    path: '/artists',
    name: 'Artists',
    component: () =>
      import(/* webpackChunkName: "Artists" */ '../views/Artists'),
  },
  {
    path: '/haxan',
    name: 'Haxan',
    component: () => import(/* webpackChunkName: "Haxan" */ '../views/Haxan'),
  },
  {
    path: '/kora-winter',
    name: 'Kora Winter',
    component: () =>
      import(/* webpackChunkName: "Kora Winter" */ '../views/KoraWinter'),
  },
  {
    path: '/legal-notice',
    name: 'Legal Notice',
    component: () =>
      import(/* webpackChunkName: "Legal Notice" */ '../views/LegalNotice'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
