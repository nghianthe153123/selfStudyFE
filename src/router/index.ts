import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import CreateUserView from '../views/UserForm.vue';
import HelloView from "../views/Hello.vue";

// import { createRouter, createWebHistory } from 'vue-router';
// import LoginView from '@/views/LoginView.vue';
// import HelloView from '@/views/HelloView.vue'; // Đảm bảo import đúng file

const routes = [
    { path: '/', component: LoginView },
    { path: '/hello', component: HelloView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
