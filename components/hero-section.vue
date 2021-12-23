<template>
  <main
    class="bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 min-h-[800px] clip lg:clip-lg m-0 pb-10"
  >
    <div
      class="grid grid-cols-4 grid-rows-1 sm:ml-16 ml-10 mr-8 pt-4 sm:pt-10 max-h-[calc(100vh-10px)]"
    >
      <div class="col-span-4 sm:col-span-2 lg:col-span-2">
        <h1
          class="text-white text-center sm:text-left sm:text-6xl lg:text-8xl text-5xl block"
        >
          Regain Control Over Your <span class="text-yellow-400">Health</span>
        </h1>
        <nuxt-img
          sizes="sm:100px md:250px lg:300px"
          src="/hero.png"
          alt=""
          class="mx-auto h-44 sm:hidden object-cover"
        />
        <p
          class="my-8 text-white text-center sm:text-left sm:w-2/3 text-base md:text-lg lg:text-xl"
        >
          Always take care of your health starting from the food menu that you
          consume everyday
        </p>
        <a href="#recipes">
          <button
            class="block capitalize text-lg font-bold py-4 text-gray-700 mx-auto sm:mr-auto sm:ml-0 px-12 mt-5 bg-yellow-400 rounded-lg shadow-xl transition duration-500 ease-in-out transform hover:scale-110"
          >
            Check our recipes
          </button>
        </a>
      </div>
      <div class="col-span-2 lg:col-span-2 hidden sm:block">
        <nuxt-img
          sizes="sm:100px"
          src="/hero.png"
          alt=""
          class="mx-auto max-h-[400px] object-cover"
        />
      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style scoped></style>
