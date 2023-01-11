<script>
	import NavbarBrand from './NavbarBrand.svelte';

</script>
<div class="w-full bg-dark text-light py-2">
  <div class="mx-auto w-[90%] md:w-[80%] lg:w-[70%]">
    <nav class="flex flex-row items-center justify-between">
      <NavbarBrand />
      <div class="hidden md:block">
        <ul class="flex flex-row items-center gap-4">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
      <div class="block md:hidden">
        <div id="links">
          <ul class="flex flex-row items-center gap-4">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div id="auth"></div>
      </div>
    </nav>
  </div>
</div>

