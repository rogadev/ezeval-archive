<template>
  <div class="flex flex-row justify-center">
    <UiModeToggleIcon :isLight=isLight @toggle="toggleColorMode" />
    <UiAuthToggleIcon :isLight=isLight :isLoggedIn=isLoggedIn />
    <UiLoginToggleIcon :isLight=isLight :isLoggedIn=isLoggedIn />
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "~/stores/auth";
const { isLoggedIn } = useAuth();
const colorMode = useColorMode();
const isLight = computed(() => colorMode.value === "light");
const toggleColorMode = () => {
  console.log(colorMode.value)
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  console.log(colorMode.value)
};
</script>
