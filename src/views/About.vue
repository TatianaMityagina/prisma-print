<template>
  <div class="home">
    <AboutUs />
  </div>
</template>

<script>
import AboutUs from '../components/about-us'

export default {
  name: 'Home',
  components: {
    AboutUs
  }
}
</script>

<style scoped lang="scss">
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
</style>

