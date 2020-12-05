import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Post from '@/views/Post.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/posts/:id',
    name: 'Post',
    component: Post,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
