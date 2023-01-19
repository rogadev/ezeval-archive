<script>
  import H2 from '$lib/components/H1.svelte';
</script>

<!-- Login -->
<div class="container w-4/5 mx-auto border shadow m-8 p-4 flex flex-col items-center">
  <H2>Login</H2>
  <hr class="w-4/5 my-4">
  <form method="POST" class="flex flex-col gap-4 text-lg font-semibold">
    <button 
      formaction="?/login&provider=google" 
      class="hover:underline hover:font-bold" >
      Google
    </button>
    <button 
      formaction="?/login&provider=github" 
      class="hover:underline hover:font-bold">
      Github
    </button>
  </form>
</div>

<!-- Register -->
<div class="container w-4/5 mx-auto border shadow m-8 p-4 flex flex-col items-center">
  <H2>Register</H2>
  <hr class="w-4/5 my-4">
  <form method="POST" class="flex flex-col gap-4 text-lg font-semibold">
    <button 
      formaction="?/register&provider=google" 
      class="hover:underline hover:font-bold" >
      Google
    </button>
    <button 
      formaction="?/register&provider=github" 
      class="hover:underline hover:font-bold">
      Github
    </button>
  </form>
</div>

