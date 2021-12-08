<template>
  <main
    class="bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 clip sm:clip-lg m-0 pb-10"
  >
    <div
      class="grid grid-cols-3 grid-rows-1 sm:ml-16 ml-10 mr-8 xl:mr-32 pt-4 sm:pt-10 max-h-[calc(100vh-40px)]"
    >
      <div class="col-span-3 sm:col-span-2">
        <h1
          class="text-white text-center sm:text-left sm:text-7xl lg:text-8xl text-5xl block"
        >
          Regain Control Over Your <span class="text-yellow-400">Health</span>
        </h1>
        <img
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
        <button
          class="block font-bold py-4 text-gray-700 mx-auto sm:mr-auto sm:ml-0 px-12 mt-5 bg-yellow-400 rounded-lg shadow-xl transition duration-500 ease-in-out transform hover:scale-110"
        >
          Click Now
        </button>
      </div>
      <div class="col-span-1 hidden sm:block">
        <img src="/hero.png" alt="" class="ml-auto object-cover" />
      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style scoped></style>
