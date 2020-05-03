<template>
  <div class="home">
    <Intro />
    <NewWord />
    <PrintGallery />
    <Advantages />
  </div>
</template>

<script>
import Intro from '../components/intro'
import NewWord from '../components/new-word'
import PrintGallery from '../components/print-gallery'
import Advantages from '../components/advantages'

export default {
  name: 'Home',
  components: {
    Intro,
    NewWord,
    PrintGallery,
    Advantages 
  }
}
</script>

<style scoped lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
