<template>
  <div class="gallery">
    <GalleryWorks />
  </div>
</template>

<script>
import GalleryWorks from '../components/gallery-works'

export default {
  name: 'Gallery',
  components: {
    GalleryWorks
  }
}
</script>

<style scoped lang="scss">
  .gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
</style>