<template>
  <div class="w-[100vw] h-[100vh]" :class="$colorMode">
    <NavBar />
    <div class="flex flex-col items-center justify-center h-full w-full">
      <h1 class="text-4xl font-semibold pb-4">404</h1>
      <p class="text-3xl pb-2">
        Oops, something went wrong.
      </p>
      <p class="text-sm">
        Try your URL and try again. If the problem persists, please contact us.
      </p>
    </div>
  </div>
</template>