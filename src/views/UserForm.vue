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
    <h2>Create User1</h2>

  </div>
</template>