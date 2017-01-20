/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import Vue from 'vue';
import { Button, Select } from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
    el: '#app',
    render: h => h(App)
});