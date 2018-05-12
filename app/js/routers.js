/**
 * Created by sn on 2017/2/3.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './../css/main.scss';
const App=resolve => require(['./../components/App.vue'], resolve)
const NotFound=resolve => require(['./../components/NotFound.vue'], resolve)
const Rank=resolve => require(['./../components/Rank.vue'], resolve)
Vue.use(VueRouter);
Vue.use(ElementUI);
const router = new VueRouter({
        routes: [
            { path: '/', component: App},
            { path: '/rank', component: Rank},
            { path: '*', component: NotFound }
        ]
    }
);

export default router; //将路由器导出