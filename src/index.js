import './js/common';
import './css/app.css';
import './scss/app.scss';

// import 'vue';
// import Vue from 'vue';
window.Vue = require('vue');
import store from './store';

Vue.component('example-component', require('./components/Example.vue').default);

// Vue init
const app = new Vue({
    el: '#app',
    store
});