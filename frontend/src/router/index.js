import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Services from '@/views/Services.vue';
import Contact from '@/views/Contact.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/footer', component: Footer },
  { path: '/navbar', component: Navbar }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
