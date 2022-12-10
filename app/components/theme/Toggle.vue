<template>
  <button @click="toggleColorMode" class="p-2">
    <Icon v-if="isLight" name="mdi:weather-night" />
    <Icon v-else name="mdi:white-balance-sunny" />
  </button>
</template>

<script setup>
const colorMode = useColorMode();
const isLight = computed(() => colorMode.value === "light");
const toggleColorMode = () => {
  colorMode.value = isLight.value ? "dark" : "light";
};
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