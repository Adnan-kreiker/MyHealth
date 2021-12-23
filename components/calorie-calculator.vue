<template>
  <div class="bg-gradient-to-t from-gray-200 to-white">
    <div
      class="mt-16 pt-4 pb-12 sm:px-10 px-8 mx-0 clip-calc bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
    >
      <h2 class="text-white font-bold text-5xl pt-48 md:pt-16">
        Calculate Your Caloric Needs
      </h2>
      <transition name="slide" mode="out-in">
        <div
          v-if="!showResults"
          data-aos-duration="750"
          data-aos="fade-up"
          class="grid grid-cols-5 gap-2 items-center max-w-sm text-white sm:w-4/5 sm:max-w-screen-sm mx-auto my-10 bg-purple-500 p-4 rounded-lg shadow-xl"
        >
          <span class="sm:col-span-1 col-span-2 font-bold">Age</span>
          <input
            id="age"
            v-model="age"
            class="sm:col-span-4 col-span-3 text-purple-700 py-1 px-3"
            type="number"
            name="age"
          />
          <span class="sm:col-span-1 col-span-2 font-bold">Gender</span>
          <div class="sm:col-span-4 col-span-3">
            <input
              id="male"
              v-model="gender"
              class="text-purple-700 py-1 px-3"
              type="radio"
              name="gender"
              value="male"
            />
            <label class="sm:col-span-1 col-span-2 font-bold" for="male"
              >Male</label
            >
            <input
              id="female"
              v-model="gender"
              class="text-purple-700 py-1 px-3"
              type="radio"
              name="gender"
              value="female"
            />
            <label class="sm:col-span-1 col-span-2 font-bold" for="female"
              >Female</label
            >
          </div>
          <span class="sm:col-span-1 col-span-2 font-bold">Height (cm)</span>
          <input
            id="height"
            v-model="height"
            class="sm:col-span-4 col-span-3 py-1 px-3 text-purple-700"
            type="number"
            name="height"
          />
          <span class="sm:col-span-1 col-span-2 font-bold">Weight (kg)</span>
          <input
            id="weight"
            v-model="weight"
            class="sm:col-span-4 col-span-3 py-1 px-3 text-purple-700"
            type="number"
            name="weight"
          />
          <span class="sm:col-span-1 col-span-2 font-bold">Activity</span>
          <select
            id="activity"
            v-model="selected"
            class="sm:col-span-4 col-span-3 py-1 px-3 text-purple-700"
            t
            name="activity"
          >
            <option
              v-for="option in options"
              :key="option.text"
              class="text-purple-600 rounded-lg p-3"
              :value="option.value"
            >
              {{ option.text }}
            </option>
          </select>
          <div class="sm:col-span-1 col-span-2"></div>
          <div class="sm:col-span-4 col-span-3">
            <button
              class="mr-6 bg-yellow-400 font-bold py-3 px-5 rounded-xl mt-2 transition duration-500 ease-in-out hover:bg-yellow-600 transform hover:-translate-y-1 hover:scale-110"
              :disabled="!check"
              @click="showResults = true"
            >
              Calculate
            </button>
            <button class="bg-gray-400 p-3 rounded-xl" @click="clear">
              Clear
            </button>
          </div>
        </div>
        <results
          v-else
          :caloric-intake="caloricIntake"
          :mild-weight-loss="mildWeightLoss"
          :weight-loss="weightLoss"
          :extreme-weight-loss="extremeWeightLoss"
        ></results>
      </transition>
    </div>
  </div>
</template>

<script>
import results from './results.vue'
export default {
  components: { results },
  data() {
    return {
      showResults: false,
      age: null,
      gender: 'male',
      height: null,
      weight: null,
      selected: 0,
      options: [
        {
          text: 'Please Select one',
          value: 0,
        },
        {
          text: 'Basal Metabolic Rate',
          value: 1,
        },
        {
          text: 'Sedentary: Little or no Excerceis',
          value: 1.2,
        },
        {
          text: 'Light: Excercise 1-3 times/week',
          value: 1.375,
        },
        {
          text: 'Moderately active: Exercise 4-5 times/week',
          value: 1.55,
        },

        {
          text: 'Very Active: Intensive exercise 6-7 times/week',
          value: 1.725,
        },
        {
          text: 'Extra Active: Very intense exercise daily, or physical job',
          value: 1.9,
        },
      ],
    }
  },
  computed: {
    bmr() {
      let sex = null
      if (this.gender === 'male') {
        sex = 5
      } else {
        sex = -161
      }
      return this.weight * 10 + 6.25 * this.height - 5 * this.age + sex
    },
    caloricIntake() {
      return Math.round(this.bmr * this.selected)
    },
    mildWeightLoss() {
      return Math.round(this.caloricIntake * 0.92)
    },
    weightLoss() {
      return Math.round(this.caloricIntake * 0.84)
    },
    extremeWeightLoss() {
      return Math.round(this.caloricIntake * 0.68)
    },
    check() {
      return this.age && this.height && this.gender && this.selected
    },
  },
  methods: {
    clear() {
      this.age = null
      this.weight = null
      this.height = null
      this.gender = 'male'
      this.selected = 0
    },
  },
}
</script>

<style lang="scss" scoped></style>
