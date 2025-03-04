<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { saveUser } from '@/api/userService';

const name = ref('');
const email = ref('');
const router = useRouter();

const handleCreateUser = async () => {
  try {
    await saveUser({ name: name.value, email: email.value });
    alert('User created successfully!');
    router.push('/dashboard');
  } catch (error) {
    alert('Failed to create user!');
  }
};
</script>

<template>
  <div class="create-user-container">
    <h2>Create User</h2>
    <input v-model="name" placeholder="Name" />
    <input v-model="email" placeholder="Email" />
    <button @click="handleCreateUser">Create User</button>
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