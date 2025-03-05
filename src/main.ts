import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

console.log('✅ Vue app is starting...');

const app = createApp(App);

console.log('✅ Applying router...');
app.use(router);

console.log('✅ Mounting app...');
app.mount('#app');
console.log('✅ Vue app is running!');

