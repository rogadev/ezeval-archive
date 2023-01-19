<script lang="ts">
  import { page } from '$app/stores';
  import { supabase } from '$lib/db';

  $: user = $page.data.session?.user

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  }
</script>

<form method="POST">
  <ul class="flex flex-row items-center gap-4">
    {#if user}
      <a href='/profile' class="md:ml-3 bg-brand py-2 px-4 rounded text-black font-semibold">Profile</a>
      <button class="md:ml-3 bg-light py-2 px-4 rounded text-black font-semibold" on:click|preventDefault={logout}>Logout</button>
    {:else}
      <li><a href="/login" class="md:ml-3 bg-brand py-2 px-4 rounded text-black font-semibold">Login</a></li>
      <li><a href='/login' class="bg-light py-2 px-4 rounded text-black font-semibold">Register</a></li>
    {/if}
  </ul>
</form>


<style scoped>
  a:hover {
    opacity: 0.8;
  }
</style>