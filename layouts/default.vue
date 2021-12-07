<template>
  <main>
    <div class="bg-gradient-to-r from-red-400 via-pink-500 to-purple-500">
      <header
        class="flex flex-row justify-between py-3 md:mx-36 sm:mx-16 mx-10"
      >
        <div class="flex flex-row">
          <img
            src="/logo.svg"
            height="25"
            width="40"
            alt=""
            class="inline-block mr-1"
          />
          <span class="font-extrabold text-3xl text-white">MyHealth</span>
        </div>
        <div>
          <span class="btn-header">Get App</span>
          <span class="btn-header">Features</span>
          <span class="btn-header">About</span>
          <span class="btn-header">FAQ</span>
          <span class="btn-header">Sign in</span>
        </div>
      </header>
    </div>
    <Nuxt />
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
