<script lang="ts">
  import { supabase } from '$lib/db'
	import { onMount } from 'svelte';
	import type { User } from '@supabase/supabase-js';
  // import { page } from '$app/stores';

  let user: null | User = null
  onMount(async () => {
    const { data } = await supabase.auth.getUser()
    user = data.user
  })

  // TODO - I need to do a subscription to auth so that I can update the UI if and when a user is logged in or out.
</script>

<!-- {#if !$page.data.session}
<h1>I am not logged in</h1>
{:else}
<h1>Welcome {$page.data.session.user.email}</h1>
<p>I am logged in!</p>
{/if} -->

<ul class="flex flex-row items-center gap-4">
  <li><a class="hover:underline underline-offset-4" href="/">Home</a></li>
  <li><a class="hover:underline underline-offset-4" href="/about">About</a></li>
  <li><a href={ user ? '/logout' : '/login'} class="md:ml-3 bg-brand py-2 px-4 rounded text-black font-semibold">{ user ? 'Logout' : 'Login'}</a></li>
  <li><a href={ user ? '/profile' : '/register' } class="bg-light py-2 px-4 rounded text-black font-semibold">{ user ? 'Profile' : 'Register' }</a></li>
</ul>

<style scoped>
  a:hover {
    opacity: 0.8;
  }
</style>