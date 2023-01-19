<script lang="ts">
  import "../app.css";
	import Navbar from '$lib/components/Navbar.svelte';
  import { supabase } from '$lib/db'
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      invalidate('supabase:auth')
    })

    return () => {
      subscription.unsubscribe()
    }
  })
</script>

<Navbar />
<slot />