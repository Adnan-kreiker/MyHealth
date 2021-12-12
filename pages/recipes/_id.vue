<template>
  <div
    class="bg-gradient-to-r from-red-400 via-pink-500 my-0 py-8 to-purple-500"
  >
    <div
      v-if="recipe"
      class="mx-8 border-2 px-6 shadow-2xl drop-shadow-2xl bg-gray-100 rounded-md border-gray-300 w-fit h-fit md:mx-12 lg:mx-16 pb-5"
    >
      <h2 class="text-purple-700 px-0 font-bold text-5xl mx-auto sm:mr-20 py-5">
        {{ recipe.recipe.label }}
      </h2>
      <img
        :src="recipe.recipe.image"
        class="shadow-2xl transition hover:cursor-pointer duration-500 ease-in-out transform hover:scale-105 rounded-lg"
        alt=""
      />
      <div class="grid grid-cols-2 gap-8">
        <div>
          <h2
            class="py-4 text-2xl underline decoration-2 decoration-purple-500"
          >
            Ingredients
          </h2>
          <ul>
            <li
              v-for="ingredient in recipe.recipe.ingredients"
              :key="ingredient.text"
            >
              {{ ingredient.text }}
            </li>
          </ul>
        </div>
        <div>
          <h2 class="py-4 text-2xl underline decoration-2 decoration-red-500">
            Nutrition
          </h2>
          <span
            >Kcals:
            {{
              Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)
            }}</span
          >
          <span
            >Protein:
            {{ Math.round(recipe.recipe.totalNutrients.PROCNT.quantity) }}</span
          >
          <!-- <div>
            <p v-for="label in recipe.recipe.healthLabels" :key="label">
              {{ label }}
            </p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null,
    }
  },
  async fetch() {
    try {
      const res = await this.$axios.$get(
        `${process.env.FOOD_API}/recipes/v2/${this.$route.params.id}?type=public&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`
      )
      this.recipe = res
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style lang="scss" scoped></style>
