<template>
  <main>
    <div class="bg-gradient-to-r from-red-400 via-pink-500 to-purple-500">
      <nav class="flex flex-row justify-between py-3 sm:mx-16 mx-10">
        <nuxt-link class="hover:cursor-pointer" to="/">
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
        </nuxt-link>
        <div class="hidden lg:block">
          <nuxt-link
            v-scroll-to="{ el: '#calculator' }"
            :to="{ path: '/', hash: 'calculator' }"
            ><span class="btn-header">Kcal Calculator</span></nuxt-link
          >
          <nuxt-link
            v-scroll-to="{ el: '#features' }"
            :to="{ path: '/', hash: 'features' }"
            ><span class="btn-header">Features</span></nuxt-link
          >
          <nuxt-link to="/about"
            ><span class="btn-header">About</span></nuxt-link
          >
          <nuxt-link to="/faq"><span class="btn-header">FAQ</span></nuxt-link>
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
            class="transform fixed text-white w-1/2 left-0 h-screen shadow-2xl z-50 top-0 bg-gradient-to-r from-purple-400 via-pink-500 to-media-500 ease-in-out duration-300"
          >
            <ul class="p-3 text-lg">
              <nuxt-link
                v-scroll-to="{ el: '#calculator' }"
                :to="{ path: '/', hash: 'calculator' }"
              >
                <li class="mb-4 flex flex-row">
                  <mdicon class="mt-0.5 mr-2" name="calculator"></mdicon>
                  <p>Kcal Calculator</p>
                </li>
              </nuxt-link>
              <nuxt-link
                v-scroll-to="{ el: '#features' }"
                :to="{ path: '/', hash: 'features' }"
              >
                <li class="mb-4 flex flex-row">
                  <mdicon class="mt-0.5 mr-2" name="folder-outline"></mdicon>
                  <p>Features</p>
                </li>
              </nuxt-link>
              <nuxt-link
                v-scroll-to="{ el: '#calculator' }"
                :to="{ path: '/about' }"
              >
                <li class="mb-4 flex flex-row">
                  <mdicon
                    class="mt-0.5 mr-2"
                    name="information-outline"
                  ></mdicon>
                  <p>About</p>
                </li>
              </nuxt-link>
              <nuxt-link
                v-scroll-to="{ el: '#calculator' }"
                :to="{ path: '/faq' }"
              >
                <li class="mb-4 flex flex-row">
                  <mdicon class="mt-0.5 mr-2" name="question"></mdicon>
                  <p>FAQ</p>
                </li>
              </nuxt-link>
            </ul>
          </div>
        </transition>
      </nav>
    </div>
    <Nuxt />
    <footer
      class="bottom-0 text-white pt-8 pb-6 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500"
    >
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl fonat-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div class="mt-6 lg:mb-0 mb-6">
              <button
                class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <fa
                  class="text-purple-500"
                  :icon="['fab', 'twitter']"
                ></fa></button
              ><button
                class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <fa
                  class="text-purple-500"
                  :icon="['fab', 'facebook-square']"
                ></fa></button
              ><button
                class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <fa
                  class="text-purple-500"
                  :icon="['fab', 'dribbble']"
                ></fa></button
              ><button
                class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <fa class="text-purple-500" :icon="['fab', 'github']"></fa>
              </button>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span
                  class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
                  >Useful Links</span
                >
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >About Us</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >Blog</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >Github</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >Free Products</a
                    >
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span
                  class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
                  >Other Resources</span
                >
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >MIT License</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >Terms &amp; Conditions</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >Privacy Policy</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >Contact Us</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-blueGray-300" />
        <div
          class="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-blueGray-500 font-semibold py-1">
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                class="text-blueGray-500 hover:text-blueGray-800"
                >MyHealth</a
              >.
            </div>
          </div>
        </div>
      </div>
    </footer>
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
