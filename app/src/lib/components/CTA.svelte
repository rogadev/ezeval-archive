<script lang="ts">
  export let className: string;
</script>

<button class="bg-brand text-black rounded-lg shadow-md hover:bg-opacity-80 hover:text-light hover:shadow px-3 py-1 uppercase font-semibold {className}" >
  <slot />
</button>