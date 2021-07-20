//load components
import { headerComponent } from './components/header.component.js';

//load views
import { resumeView } from './views/resume/resume.view.js';
import { homeView } from './views/home/home.view.js'

const routes = [
    // { path: '/', component: homeView },
    { path: '/resume', component: resumeView },
    { path: '*', redirect: '/resume'}
];

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    data: {
        message: 'test'
    }
});
