<script setup lang="ts">
defineProps(["isLight", "isLoggedIn"])
</script>

<template>
  <nuxt-link v-if="isLoggedIn" to="/profile" class="p-2" title="Profile">
    <Icon v-if="isLight" name="mdi:account-outline" />
    <Icon v-else name="mdi:account" />
  </nuxt-link>
  <nuxt-link v-else to="/register" class="p-2" title="Register">
    <Icon v-if="isLight" name="mdi:account-plus-outline" />
    <Icon v-else name="mdi:account-plus" />
  </nuxt-link>
</template>