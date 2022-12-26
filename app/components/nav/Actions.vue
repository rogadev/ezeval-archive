<template>
  <div class="flex flex-row justify-center">
    <ThemeToggle />
    <ProfileIcon v-if="isLoggedIn" />
    <AuthButton v-else />
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "~/stores/auth";
const { isLoggedIn } = useAuth();
</script>
