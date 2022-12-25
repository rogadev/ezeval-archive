<template>
  <nuxt-link to="/register" class="p-2" title="Register">
    <Icon v-if="isLight" name="mdi:account-plus-outline" />
    <Icon v-else name="mdi:account-plus" />
  </nuxt-link>
</template>

<script setup>
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