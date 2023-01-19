<script lang="ts">
	import { page } from '$app/stores';
</script>

<form method="POST">
  <ul class="flex flex-row items-center gap-4">
    {#if $page.data.session}
      <a href='/profile' class="md:ml-3 bg-brand py-2 px-4 rounded text-black font-semibold">Profile</a>
    {:else}
      <li><a href="/welcome" class="md:ml-3 bg-brand py-2 px-4 rounded text-black font-semibold">Login</a></li>
      <li><a href='/welcome' class="bg-light py-2 px-4 rounded text-black font-semibold">Register</a></li>
    {/if}
  </ul>
</form>


<style scoped>
  a:hover {
    opacity: 0.8;
  }
</style>