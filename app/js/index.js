/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import Vue from 'vue';
import Common from './common';
import router from './routers';
import VueResource from 'vue-resource';
import Config from 'config';
Common.deepClone(Config.vue, Vue.config);//Vue全局配置
Vue.use(VueResource);
//解决跨域问题
Vue.http.options.xhr = { withCredentials: true};
const app = new Vue({
    router:router
}).$mount('#app');