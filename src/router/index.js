import { createRouter, createWebHistory } from 'vue-router';
import Cuaca from '../components/Cuaca.vue';
import TugasList from '../components/TugasList.vue';

const routes = [
  { path: '/', component: Cuaca },
  { path: '/cuaca', component: Cuaca },
  { path: '/tugas-list', component: TugasList },
  { path: '/tugas1', redirect: () => { window.open('https://tugas1-pbk-223510506.vercel.app/', '_blank'); } },
  { path: '/tugas2', redirect: () => { window.open('https://adriansyah-tugas2-praktikumpbk-223510506.vercel.app/', '_blank'); } },
  { path: '/tugas3', redirect: () => { window.open('https://adriansyah-tugas3-prakbpk-223510506.vercel.app/', '_blank'); } },
  { path: '/tugas4', redirect: () => { window.open('https://tugas4-adriansyah-223510506.vercel.app/', '_blank'); } },
  { path: '/tugas5', redirect: () => { window.open('https://tugas5-adriansyah-223510506.vercel.app/', '_blank'); } },
  { path: '/tugas6', redirect: () => { window.open('https://tugas6-adriansyah-223510506-4d.vercel.app/', '_blank'); } },
  { path: '/tugas7', redirect: () => { window.open('https://tugas7-adriansyah-223510506-4-d.vercel.app/', '_blank'); } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
