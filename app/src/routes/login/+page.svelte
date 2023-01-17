<script>
	import PageHeroSection from '$lib/components/PageHeroSection.svelte';
  import H1 from '$lib/components/H1.svelte';
</script>
<PageHeroSection>
  <H1>Login</H1>
</PageHeroSection>

<form method="POST">
  <button formaction="?/login&provider=google" >Github</button>
</form>