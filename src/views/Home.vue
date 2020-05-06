<template>
  <div class="home">
    <HomePrint />
    <PhotosKitchen />
    <PhotosBathroom />
  </div>
</template>

<script>
import HomePrint from '../components/home-print'
import PhotosKitchen from '../components/photos-kitchen'
import PhotosBathroom from '../components/photos-bathroom'

export default {
  name: 'Home',
  components: {
    HomePrint,
    PhotosKitchen,
    PhotosBathroom 
  }
}
</script>

<style scoped lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
</style>

