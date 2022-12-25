<template>
  <nuxt-link v-if="!loggedIn" to="/login" class="p-2" title="Login">
    <Icon name="mdi:login-variant" title="Login" />
  </nuxt-link>
  <nuxt-link v-else to="/profile" class="p-2" title="Profile">
    <Icon v-if="isLight" name="mdi:account-outline" />
    <Icon v-else name="mdi:account" />
  </nuxt-link>
</template>

<script setup>
const loggedIn = ref(true);

const colorMode = useColorMode();
const isLight = computed(() => colorMode.value === "light");
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>