<script lang="ts">
  import H1 from '../lib/components/H1.svelte';
  import H2 from '../lib/components/H2.svelte';
  import PageContentSection from "$lib/components/PageContentSection.svelte";
  import PageHeroSection from "$lib/components/PageHeroSection.svelte";
	import Cta from '$lib/components/CTA.svelte';
</script>

<svelte:head>
  <title>EzEval | Window Cleaning Project Evaluation &amp; Quotes</title>
</svelte:head>

<PageHeroSection>
  <div class="grid grid-cols-2 items-center py-8">
    <div class="col-span-1">
      <H1>EzEval</H1>
      <p class="sm:text-[23px] md:text-xl font-semibold">Window Cleaning<br>Project Evaluation & Quotes</p>
    </div>
    <div class="col-span-1">
      <div class="flex flex-row justify-end">
        <div class="flex flex-row items-center">
          <img src="https://via.placeholder.com/700x300.png?text=Graphic+Goes+Here" alt="C/O https://placeholder.com/">
        </div>
      </div>
    </div>
  </div>
</PageHeroSection>

<PageContentSection>
  <div class="py-8">
    <H2>Close More Deals</H2>
    <p>Close more leads with a professional, easy to use, and mobile friendly project evaluation and quote tool.</p>
    <div class="flex justify-center">
      <Cta className="my-2"><a href="/register">Sign Up</a></Cta>
    </div>
  </div>
</PageContentSection>