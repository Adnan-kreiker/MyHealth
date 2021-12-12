<template>
  <div>
    <hero-section></hero-section>
    <features id="features"></features>
    <calorie-calculator id="calculator"></calorie-calculator>
    <recipes id="recipes"></recipes>
  </div>
</template>

<script>
import recipes from '~/components/recipes.vue'
export default {
  components: { recipes },
}
</script>
Features
