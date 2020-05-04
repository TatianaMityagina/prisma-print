<template>
  <div class="home">
    <Intro />
    <NewWord />
    <PrintGallery />
    <Advantages />
    <IndexAbout />
  </div>
</template>

<script>
import Intro from '../components/intro'
import NewWord from '../components/new-word'
import PrintGallery from '../components/print-gallery'
import Advantages from '../components/advantages'
import IndexAbout from '../components/index-about'

export default {
  name: 'Home',
  components: {
    Intro,
    NewWord,
    PrintGallery,
    Advantages,
    IndexAbout 
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
