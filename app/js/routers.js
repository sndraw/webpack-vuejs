/**
 * Created by sn on 2017/2/3.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import './../css/main.scss';
const App=resolve => require(['./../components/App.vue'], resolve);
const Home=resolve => require(['./../components/Home.vue'], resolve);
const Rank=resolve => require(['./../components/Rank.vue'], resolve);
const NotFound=resolve => require(['./../components/NotFound.vue'], resolve);
Vue.use(VueRouter);
Vue.use(ElementUI);
const router = new VueRouter({
        routes: [
            {path: '/', component: Rank},
            {path: '/App', component: App},
            {path: '/Home', component: Home},
            {path: '*', component: NotFound}
        ]
    }
);

module.exports = router; //将路由器导出