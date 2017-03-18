/**
 * Created by sn on 2017/2/28.
 */
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mock = true;//是否模拟数据
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import Config from 'config';
import Common from './js/common';
import router from './js/routers';
import store from './vuex/store';

Vue.use(VueResource);
Vue.use(Vuex);

//Vue全局配置
Common.deepClone(Config.vue, Vue.config);
//解决跨域问题
Vue.http.options.xhr = {withCredentials: true};
const app = new Vue({
    router,
    store
}).$mount('#app');