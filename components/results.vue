<template>
  <div class="my-16 sm:mx-16 mx-10">
    <!-- <h2 class="font-bold text-3xl text-purple-500">
      The results show a number of daily calorie estimates that can be used as a
      guideline for how many calories to consume each day to maintain, lose, or
      gain weight at a chosen rate.
    </h2> -->
    <div
      class="grid grid-cols-5 gap-2 items-center text-white md:w-2/3 mx-auto my-10 bg-purple-500 px-4 py-6 rounded-lg shadow-xl"
    >
      <div class="col-span-3">
        <h2
          v-for="result in results"
          :key="result"
          class="py-4 align-middle text-center text-xl border-t-2 border-b-2 border-light-800"
        >
          {{ result }}
        </h2>
      </div>
      <div class="col-span-2">
        <p
          v-for="res in data"
          :key="res"
          class="py-4 align-middle text-center text-xl border-t-2 border-b-2 border-light-800"
        >
          {{ res }} Calories/day
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      results: [
        'Maintain weight',
        'Mild weight loss',
        'Weight loss',
        'Extreme weight loss',
      ],
    }
  },
}
</script>

<style scoped></style>
