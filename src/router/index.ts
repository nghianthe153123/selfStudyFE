import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import CreateUserView from '@/views/UserForm.vue';

const routes = [
    { path: '/', component: LoginView },
    { path: '/create-user', component: CreateUserView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
