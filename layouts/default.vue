<template>
  <main>
    <div class="bg-gradient-to-r from-red-400 via-pink-500 to-purple-500">
      <nav class="flex flex-row justify-between py-3 sm:mx-16 mx-10">
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
        <div class="hidden lg:block">
          <span class="btn-header">Kcal Calculator</span>
          <span class="btn-header">Features</span>
          <span class="btn-header">About</span>
          <span class="btn-header">FAQ</span>
        </div>
        <div v-if="!showMenu" class="lg:hidden" @click="showMenu = true">
          <mdicon
            class="text-white hover:cursor-pointer"
            height="40"
            width="40"
            name="menu"
          ></mdicon>
        </div>
        <transition name="glide">
          <div
            v-if="showMenu"
            v-on-clickaway="toggleDrawer"
            class="transform fixed w-1/2 left-0 h-screen shadow-2xl z-50 top-0 bg-white ease-in-out duration-300"
          >
            <ul class="p-3 text-lg">
              <li class="mb-4 flex flex-row">
                <mdicon class="mt-0.5 mr-2" name="calculator"></mdicon>
                <p>Kcal Calculator</p>
              </li>
              <li class="mb-4 flex flex-row">
                <mdicon class="mt-0.5 mr-2" name="folder-outline"></mdicon>
                <p>Features</p>
              </li>
              <li class="mb-4 flex flex-row">
                <mdicon class="mt-0.5 mr-2" name="information-outline"></mdicon>
                <p>About</p>
              </li>
              <li class="mb-4 flex flex-row">
                <mdicon class="mt-0.5 mr-2" name="question-outline"></mdicon>
                <p>FAQ</p>
              </li>
            </ul>
          </div>
        </transition>
      </nav>
    </div>
    <Nuxt />
  </main>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleDrawer() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>

<style lang="scss" scoped></style>
