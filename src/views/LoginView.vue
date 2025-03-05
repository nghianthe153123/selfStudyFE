<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/api/loginService';

const username = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
  try {
    await login(username.value, password.value);
    alert('Đăng nhập thành công!');
    router.push('/hello');
  } catch (error) {
    alert('Đăng nhập thất bại!');
  }
};
</script>

<template>
  <div class="login-container">
    <h2>Login</h2>
    <input v-model="username" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="handleLogin">Login</button>
  </div>
</template>
<style scoped>
.user-form {
  width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
input, button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}
</style>
