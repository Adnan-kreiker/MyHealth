<template>
  <div>
    <hero-section></hero-section>
    <lazy-features id="features"></lazy-features>
    <lazy-calorie-calculator id="calculator"></lazy-calorie-calculator>
    <render-on-scroll :offset-y="100" height="700px">
      <lazy-recipes id="recipes"></lazy-recipes>
    </render-on-scroll>
  </div>
</template>

<script>
import RenderOnScroll from 'nuxt-render-on-scroll'

export default {
  components: {
    RenderOnScroll,
  },
}
</script>
Features
