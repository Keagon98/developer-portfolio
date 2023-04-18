import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

library.add(faHouse);
library.add(faInfoCircle);
library.add(faCubes);
library.add(faLinkedin);
library.add(faGithubSquare);
library.add(faEnvelopeSquare);


import 'bootstrap/dist/css/bootstrap.css';

const pinia = createPinia();

createApp(App)
.use(router)
.use(pinia)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
