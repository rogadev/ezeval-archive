<script setup lang="ts">
defineProps(["isLight"]);
</script>

<template>
  <button @click="$emit('toggle')" class="p-2">
    <Icon v-if="isLight" name="mdi:weather-night" />
    <Icon v-else name="mdi:white-balance-sunny" />
  </button>
</template>