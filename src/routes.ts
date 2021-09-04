import { createRouter, createWebHistory } from 'vue-router'
import Index from './pages/index'
import About from './pages/about'
import Contact from './pages/contact'

const routes = [
    { path: '/', component: Index },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router