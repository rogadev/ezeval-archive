<script setup lang="ts">
  import { useAuth } from "~/stores/auth";
  const { isLoggedIn } = useAuth();
  // const isLoggedIn = true;
  const links = [
    { name: "Home", path: "/"},
    { name: "About", path: "/about"},
  ];
</script>

<template>
  <div class=" flex flex-row gap-2">
    <nuxt-link
      v-for="link in links"
      :key="link.name"
      :to="link.path"
      class="p-2 hover:bg-gray-100 rounded hover:text-slate-900"
      >{{ link.name }}</nuxt-link
    >
    <nuxt-link v-if="!isLoggedIn" to="/register" class="p-2">
      Sign Up
    </nuxt-link>
  </div>
</template>