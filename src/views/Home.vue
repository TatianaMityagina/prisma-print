<template>
  <div class="home">
    <HomePrint />
    <PhotosKitchen />
    <PhotosBathroom />
    <PhotosChildrenroom />
    <PhotosLounge />
    <PhotosBedroom />
    <Advantages />
  </div>
</template>

<script>
import HomePrint from '../components/home-print'
import PhotosKitchen from '../components/photos-kitchen'
import PhotosBathroom from '../components/photos-bathroom'
import PhotosChildrenroom from '../components/photos-childrenroom'
import PhotosLounge from '../components/photos-lounge'
import PhotosBedroom from '../components/photos-bedroom'
import Advantages from '../components/advantages'

export default {
  name: 'Home',
  components: {
    HomePrint,
    PhotosKitchen,
    PhotosBathroom,
    PhotosChildrenroom,
    PhotosLounge,
    PhotosBedroom,
    Advantages
  }
}
</script>

<style scoped lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding-bottom: 80px;
  }
</style>

