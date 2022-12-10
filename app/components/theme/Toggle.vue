<template>
  <div>TODO - Toggle.vue</div>
</template>

<script setup>
const colorMode = useColorMode();
const isLight = computed(() => colorMode.value === "light");
const toggleColorMode = () => {
  colorMode.value = isLight.value ? "dark" : "light";
  console.log(colorMode.value);
};
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>