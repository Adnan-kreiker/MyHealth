<template>
  <div
    class="bg-gradient-to-r px-6 grid grid-cols-12 min-h-screen from-red-400 via-pink-500 my-0 py-8 to-purple-500"
  >
    <div
      v-if="recipe"
      class="mt-12 border-2 px-2 md:px-6 col-span-12 lg:col-span-8 shadow-2xl drop-shadow-2xl bg-gray-100 rounded-md border-gray-300 w-fit h-fit md:mx-auto pb-5"
    >
      <h2
        class="text-purple-700 bg-gradient-to-r from-red-400 via-pink-500 my-0 text-transparent bg-clip-text to-purple-500 px-0 font-bold text-2xl md:text-5xl mx-auto py-5"
      >
        {{ recipe.recipe.label }}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <img
          height="300"
          :src="recipe.recipe.image"
          class="shadow-2xl col-span-2 mx-auto sm:col-span-1 transition hover:cursor-pointer duration-500 ease-in-out transform hover:scale-105 rounded-lg"
          alt=""
        />
        <div height="250" class="col-span-2 sm:col-span-1">
          <h2 class="pb-4 text-2xl underline decoration-2 decoration-red-500">
            Nutrition
          </h2>
          <client-only>
            <div id="chart" class="mx-auto flex flex-row justify-center">
              <apexchart
                type="pie"
                width="380"
                :options="chartOptions"
                :series="[protein, fat, carbs]"
              ></apexchart>
            </div>
          </client-only>
        </div>
      </div>
      <div>
        <div>
          <h2
            class="pb-4 pt-0 pl-0 lg:pl-10 text-2xl underline decoration-2 decoration-purple-500"
          >
            Ingredients
          </h2>
          <ul class="pl-4 lg:pl-16">
            <li
              v-for="(ingredient, i) in recipe.recipe.ingredients"
              :key="i"
              class="list-disc"
            >
              {{ ingredient.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <spinner v-else></spinner>
    <div class="col-span-12 lg:col-span-4">
      <h2
        class="font-bold text-3xl ml-8 lg:ml-0 mt-10 lg:text-center mb-4 text-white"
      >
        Suggestions
      </h2>
      <div
        class="lg:col-span-4 justify-evenly content-center flex flex-row flex-wrap lg:flex-col"
      >
        <nuxt-link
          v-for="(suggestion, i) in suggestions"
          :key="i"
          :to="`/recipes/${getRecipeId(suggestion.recipe.uri)}`"
        >
          <div
            class="mx-auto mb-4 min-w-[250px] p-1 shadow-2xl drop-shadow-2xl bg-gray-100 rounded-md border-gray-300 max-w-[300px] h-fit"
          >
            <img
              height="250"
              class="h-auto object-cover"
              :src="suggestion.recipe.image"
              alt=""
            />
            <h2 class="font-bold underline decoration-2 decoration-red-500">
              {{ suggestion.recipe.label }}
            </h2>
            <p>
              {{
                Math.round(suggestion.recipe.totalNutrients.ENERC_KCAL.quantity)
              }}
              Kcals | {{ Math.round(suggestion.recipe.digest[2].total) }}g
              protein
            </p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecipeId } from '~/utility/getRecipeId'

export default {
  data() {
    return {
      recipe: null,
      suggestions: null,
      kcal: null,
      protein: null,
      fat: null,
      carbs: null,
      chartOptions: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Protein', 'Fat', 'Carbs'],
        responsive: [
          {
            breakpoint: 880,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
          {
            breakpoint: 639,
            options: {
              chart: {
                width: 400,
              },
              legend: {
                position: 'right',
              },
            },
          },
          {
            breakpoint: 499,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    }
  },
  async fetch() {
    try {
      const res = await this.$axios.$get(
        `${process.env.FOOD_API}/recipes/v2/${this.$route.params.id}?type=public&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`
      )
      const sug = await this.$axios.$get(
        `${process.env.FOOD_API}/recipes/v2?type=public&q=meat&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&diet=high-protein`
      )
      this.suggestions = sug.hits.splice(0, 2)
      this.recipe = res
      this.kcal = Math.round(
        this.recipe.recipe.totalNutrients.ENERC_KCAL.quantity
      )
      this.protein = Math.round(
        this.recipe.recipe.totalNutrients.PROCNT.quantity
      )
      this.fat = Math.round(this.recipe.recipe.totalNutrients.FAT.quantity)
      this.carbs = Math.round(this.recipe.recipe.totalNutrients.CHOCDF.quantity)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    getRecipeId,
  },
}
</script>

<style lang="scss" scoped></style>
