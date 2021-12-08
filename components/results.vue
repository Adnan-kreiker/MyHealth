<template>
  <div class="my-16 sm:mx-10 mx-6">
    <!-- <h2 class="font-bold text-3xl text-purple-500">
      The results show a number of daily calorie estimates that can be used as a
      guideline for how many calories to consume each day to maintain, lose, or
      gain weight at a chosen rate.
    </h2> -->
    <div
      class="grid grid-cols-4 gap-2 items-center grid-rows-card text-white lg:w-6/7 mx-auto my-1 px-4 py-6 rounded-lg shadow-2xl"
    >
      <div
        class="col-span-4 sm:col-span-2 lg:col-span-1 shadow-2xl hover:z-10 bg-red-500 h-full rounded-lg transition duration-500 ease-in-out hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110"
      >
        <h2 class="pt-4 text-lg px-3 text-center whitespace-nowrap">
          Maintain Weight
        </h2>
        <p class="text-center px-3 pb-4">{{ caloricIntake }}kcals</p>
      </div>
      <div
        class="col-span-4 sm:col-span-2 lg:col-span-1 shadow-2xl hover:z-10 bg-indigo-500 h-full rounded-lg transition duration-500 ease-in-out hover:bg-indigo-700 transform hover:-translate-y-1 hover:scale-110"
      >
        <h2 class="pt-4 text-lg px-3 text-center whitespace-nowrap">
          Mild weight loss
        </h2>
        <p class="text-center px-3 pb-4">{{ mildWeightLoss }}kcals</p>
      </div>
      <div
        class="col-span-4 sm:col-span-2 lg:col-span-1 shadow-2xl hover:z-10 bg-blue-500 h-full rounded-lg transition duration-500 ease-in-out hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110"
      >
        <h2 class="pt-4 text-lg px-3 text-center whitespace-nowrap">
          Weight loss
        </h2>
        <p class="text-center px-3 pb-4">{{ weightLoss }}kcals</p>
      </div>
      <div
        class="col-span-4 sm:col-span-2 lg:col-span-1 shadow-2xl hover:z-10 bg-purple-500 h-full rounded-lg transition duration-500 ease-in-out hover:bg-purple-700 transform hover:-translate-y-1 hover:scale-110"
      >
        <h2 class="pt-4 text-lg px-3 text-center whitespace-nowrap">
          Extreme weight loss
        </h2>
        <p class="text-center px-3 pb-4">{{ extremeWeightLoss }}kcals</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    caloricIntake: {
      type: Number,
      required: true,
    },
    mildWeightLoss: {
      type: Number,
      required: true,
    },
    weightLoss: {
      type: Number,
      required: true,
    },
    extremeWeightLoss: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped></style>
