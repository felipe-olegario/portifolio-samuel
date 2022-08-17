import Vue from 'vue';
import VueRouter from 'vue-router';
import FirstMounth from './components/FirstMounth'
import SecondMounth from './components/SecondMounth'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'FirstMounth',
        component: FirstMounth
    },
    {
        path: '/second-mounth',
        name: 'secondMounth',
        component: SecondMounth
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
export default router