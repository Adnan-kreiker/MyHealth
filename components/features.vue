<template>
  <div class="my-16 sm:mx-16 mx-4">
    <div
      data-aos="fade-right"
      class="sm:flex flex-col w-full sm:w-max sm:flex-row"
    >
      <nuxt-img
        sizes="sm:50px md:150px lg:150px"
        height="80"
        width="100"
        class="object-contain mx-auto sm:mr-6 mt-14 sm:mt-0 sm:pb-10 h-20 sm:h-36"
        src="/crown.png"
        alt=""
      />
      <h2
        class="text-purple-700 font-bold text-5xl mx-auto text-center sm:mr-20 my-10"
      >
        Our Best Programs
      </h2>
    </div>
    <div
      class="bg-gray-100 p-4 border max-w-xs sm:max-w-max mx-auto border-gray-300 rounded-3xl text-white"
    >
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-gradient-to-r from-purple-300 to-purple-600 rounded-3xl"
      >
        <div
          data-aos="flip-left"
          data-aos-duration="750"
          class="py-4 mx-2 rounded-lg transition duration-500 ease-in-out0 hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110"
        >
          <img height="70" width="70" class="mx-auto" src="/salad.png" alt="" />
          <h3 class="text-center text-2xl mx-auto font-bold my-2">
            Healthy Recipe
          </h3>
          <p class="mx-auto text-center w-3/4">
            Healthier recipes from food & nutrition experts
          </p>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="750"
          class="py-4 mx-2 rounded-lg transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110"
        >
          <nuxt-img
            height="70"
            width="70"
            class="mx-auto"
            src="/roasted-chicken.png"
            alt=""
          />

          <h3 class="text-center text-2xl mx-auto font-bold my-2">
            Healthy Meals
          </h3>
          <p class="mx-auto text-center w-3/4">
            Learn how to become <br />
            a meal-planning pro
          </p>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="750"
          class="py-4 mx-2 rounded-lg transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110"
        >
          <img
            height="70"
            width="70"
            class="mx-auto"
            src="/health.png"
            alt=""
          />

          <h3 class="text-center text-2xl mx-auto font-bold my-2">
            Healthy Eating
          </h3>
          <p class="mx-auto text-center w-3/4">
            Eat healthy with our <br />
            pro & inspirational tips
          </p>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="750"
          class="py-4 mx-2 rounded-lg transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110"
        >
          <img
            height="70"
            width="70"
            class="mx-auto"
            src="/healthy.png"
            alt=""
          />

          <h3 class="text-center text-2xl mx-auto font-bold my-2">
            Healthy Life
          </h3>
          <p class="mx-auto text-center w-3/4">
            Your life is your choice, <br />
            it is up to you to make it better
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
