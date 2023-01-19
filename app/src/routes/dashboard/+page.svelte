<script lang="ts">
  import H1 from '$lib/components/H1.svelte';
  import PageHeroSection from "$lib/components/PageHeroSection.svelte";
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>EzEval | Window Cleaning Project Evaluation &amp; Quotes</title>
</svelte:head>

<PageHeroSection>
  <div class="grid grid-cols-2 items-center py-8">
    <div class="col-span-1">
      <H1>Welcome</H1>
      <p class="sm:text-[23px] md:text-xl font-semibold">Dashboard...</p>
    </div>
  </div>
</PageHeroSection>

<h1>I am a super secret dashboard. You should not se me...</h1>
<p>{$page.data.session.user.email}</p>