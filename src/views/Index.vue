<template>
  <div class="index">
    <VideoIntro />
    <!-- <Intro /> -->
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
import VideoIntro from '../components/video-intro'
// import Intro from '../components/intro'
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
    VideoIntro,
    // Intro,
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
  }
</style>
