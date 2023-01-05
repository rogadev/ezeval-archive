<script>
  import "../app.css";
  import Navbar from '$lib/components/navbar/Navbar.svelte';
</script>

<div class="min-h-full">
  <Navbar />

  <div class="py-10">
    <main>
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</div>