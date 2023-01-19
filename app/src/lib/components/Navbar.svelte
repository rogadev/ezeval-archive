<script lang="ts">
	import NavbarBrand from './NavbarBrand.svelte';
	import NavbarLinks from './NavbarLinks.svelte';
</script>

<div class="w-full bg-dark text-light py-2">
  <div class="mx-auto w-[90%] md:w-[80%] lg:w-[70%]">
    <nav class="flex flex-row items-center justify-between">
      <NavbarBrand />
      <NavbarLinks />
    </nav>
  </div>
</div>

