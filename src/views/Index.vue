<template>
  <div class="index">
    <Intro />
    <NewWord />
    <PrintGallery />
    <Advantages />
    <IndexAbout />
    <IndexGallery />
    <AboutPaints />
    <PrintPlace />
    <Calculator />
  </div>
</template>

<script>
import Intro from '../components/intro'
import NewWord from '../components/new-word'
import PrintGallery from '../components/print-gallery'
import Advantages from '../components/advantages'
import IndexAbout from '../components/index-about'
import IndexGallery from '../components/index-gallery'
import AboutPaints from '../components/about-paints'
import PrintPlace from '../components/print-place'
import Calculator from '../components/calculator'

export default {
  name: 'Index',
  components: {
    Intro,
    NewWord,
    PrintGallery,
    Advantages,
    IndexAbout,
    IndexGallery,
    AboutPaints,
    PrintPlace,
    Calculator 
  }
}
</script>

<style scoped lang="scss">
  .index {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding-bottom: 80px;
  }
</style>
