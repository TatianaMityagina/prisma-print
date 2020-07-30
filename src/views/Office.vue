<template>
  <div class="office">
    <OfficePrint />
    <PhotosOffice />
    <PhotosHotel />
    <PhotosMunicipal />
    <PhotosFitness />
    <PhotosSpa />
    <Advantages />
    <CommercialPrint />
  </div>
</template>

<script>
import OfficePrint from '../components/office-print'
import CommercialPrint from '../components/commercial-print'
import PhotosOffice from '../components/photos-office'
import PhotosHotel from '../components/photos-hotel'
import PhotosMunicipal from '../components/photos-municipal'
import PhotosFitness from '../components/photos-fitness'
import PhotosSpa from '../components/photos-spa'
import Advantages from '../components/advantages'

export default {
  name: 'Office',
  components: {
    OfficePrint,
    CommercialPrint,
    PhotosOffice,
    PhotosHotel,
    PhotosMunicipal,
    PhotosFitness,
    PhotosSpa,
    Advantages
  }
}
</script>

<style scoped lang="scss">
  .office {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
</style>

