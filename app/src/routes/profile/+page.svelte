<script lang="ts">
  import { page } from '$app/stores';
	import { supabase } from '$lib/db';

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/welcome';
  }
</script>

<h1>{$page.data.session.user.email}</h1>

<button on:click={logout}>
  Logout
</button>