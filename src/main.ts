import Vue from 'vue';
import App from './App.vue';

const name = '#app';
let v = new Vue({
	el: name,
	render: (h) => h(App)
});
