import '../public/assets/index.css';
import 'boxicons/css/boxicons.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

const app = createApp(App);

app.use(router);
app.use(store);

library.add(faUserSecret);

app.component('font-awesome-icon', FontAwesomeIcon)

router.beforeEach((to, from, next) => {
  // Remonte en haut de la page lors de la navigation
  window.scrollTo(0, 0);
  next();
});

app.mount('#app');
