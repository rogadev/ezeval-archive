<template>
  <div class="flex flex-row justify-center">
    <ThemeToggle />
    <ProfileIcon />
    <AuthButton v-if="!isLoggedIn" />
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "~/stores/auth";
const { isLoggedIn } = useAuth();
</script>
