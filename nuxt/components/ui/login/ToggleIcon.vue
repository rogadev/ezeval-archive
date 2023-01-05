<script setup lang="ts">
  defineProps(["isLight", "isLoggedIn"]);
</script>

<template>
  <nuxt-link v-if="isLoggedIn" to="/logout" class="p-2" title="Logout">
    <Icon v-if="isLight" name="mdi:logout-variant" />
    <Icon v-else name="mdi:logout-variant" />
  </nuxt-link>
  <nuxt-link v-else to="/login" class="p-2" title="Login">
    <Icon v-if="isLight" name="heroicons-outline:login" />
    <Icon v-else name="heroicons-outline:login" />
  </nuxt-link>
</template>