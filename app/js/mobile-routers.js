/**
 * Created by sn on 2017/2/3.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import 'mint-ui/lib/style.css';
import './../css/main.scss';
Vue.use(VueRouter);
import MintUI from 'mint-ui';
Vue.use(MintUI);
const App=resolve => require(['././../components/MobileApp.vue'], resolve);

const router = new VueRouter({
        routes: [
            {path: '/', component: App},
        ]
    }
);

module.exports = router; //将路由器导出