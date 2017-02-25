/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import Vue from 'vue';
import router from './routers';

import VueResource from 'vue-resource';
Vue.use(VueResource);
const app = new Vue({
    router:router
}).$mount('#app');