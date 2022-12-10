<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <div :theme="colorMode.toString()">
    <NavBar />
    <NuxtLayout />
  </div>
</template>
