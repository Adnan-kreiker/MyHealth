<template>
  <client-only>
    <div class="bg-gray-200 pb-12">
      <h2
        class="text-purple-700 font-bold text-5xl mx-auto px-8 sm:mr-20 py-10"
      >
        High Protein Recipes
      </h2>
      <div
        v-if="recipes"
        class="grid grid-cols-12 bg-gray-200 justify-center items-stretch"
      >
        <!-- component -->
        <!-- This is an example component -->
        <nuxt-link
          v-for="recipe in recipes"
          :key="recipe.id"
          :to="`/recipes/${getRecipeId(recipe.recipe.uri)}`"
          class="py-5 col-span-12 sm:col-span-6 w-5/6 mx-auto max-w-[300px] lg:col-span-4 flex flex-col justify-center"
        >
          <div>
            <div
              class="relative pl-1 flex justify-center rounded-xl hover:scale-105 duration-500 transform transition cursor-pointer"
            >
              <!-- Tag Discount -->
              <div
                class="top-0 left-0 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block"
              >
                {{ Math.round(recipe.recipe.digest[2].daily / 10) }}g Protein
              </div>
              <div
                class="top-0 left-0 h-2 md:h-3 mt-5 px-2 absolute z-20 bg-green-500"
              ></div>
              <div
                class="top-0 left-0 h-2 md:h-3 mt-6 pl-5 rounded-3xl absolute z-0 bg-green-600"
              ></div>
              <div class="w-full pb-2 bg-white rounded-xl shadow-xl z-10">
                <div class="relative">
                  <!-- :src="image.largeImageURL"     -->
                  <img
                    :src="recipe.recipe.image"
                    class="max-h-96 object-cover rounded-t-xl"
                    alt=""
                  />
                  <!-- Tag rekomendasi -->
                  <div
                    class="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium"
                  >
                    Recommended
                  </div>
                </div>
                <div class="px-2 py-1">
                  <!-- Product Title -->
                  <div class="text-sm md:text-base line-clamp-1 font-bold pr-2">
                    {{ recipe.recipe.label }}
                  </div>
                  <div class="flex py-2 h-full">
                    <!-- Distance -->
                    <div
                      class="bg-gray-200 p-1 mr-2 rounded-full text-xs font-medium text-gray-900"
                    >
                      {{ Math.round(recipe.recipe.calories / 3) }} Kcals
                    </div>
                    <div class="flex justify-between item-center">
                      <div class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 md:h-5 md:w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <!-- Rating total -->
                        <p
                          class="text-gray-600 font-bold text-xs md:text-sm ml-1"
                        >
                          4.96
                          <!-- Jumlah review -->
                          <span class="text-gray-500 font-normal"
                            >(76 rewiews)</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- Alamat -->
                  <!-- <p class="pb-1 md:pb-2 text-xs md:text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                  </p> -->
                  <!-- Tombol pesan -->
                  <button
                    class="mt-auto bottom-0 flex justify-center bg-purple-500 hover:bg-white text-sm md:text-base border hover:outline-2 hover:outline-purple-500 rounded-xl w-32 md:w-36 p-1 text-gray-100 hover:text-purple-900"
                  >
                    More Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
      <spinner v-else></spinner>
    </div>
  </client-only>
</template>

<script>
import { getRecipeId } from '~/utility/getRecipeId'
export default {
  data() {
    return {
      recipes: null,
    }
  },
  async fetch() {
    try {
      const res = await this.$axios.$get(
        `${process.env.FOOD_API}/recipes/v2?type=public&q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`,
        {
          params: {
            diet: 'high-protein',
            imageSize: 'REGULAR',
            limit: 6,
          },
        }
      )
      this.recipes = res.hits
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

<style scoped></style>
