<script setup lang="ts">
  import { useAuth } from "~/stores/auth";
  const { isLoggedIn } = useAuth();
  const links = [
    { name: "Home", path: "/", hiddenIfLoggedIn: false },
    { name: "About", path: "/about", hiddenIfLoggedIn: false },
    { name: "Sign Up", path: "/register", hiddenIfLoggedIn: true },
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
  </div>
</template>