<template>
  <div class="index-gallery">
		<div class="index-gallery__container">
      <h2>Галерея работ</h2>
      <p>Уникальные идеи наших любимых клиентов</p>
      <div v-viewer class="index-gallery__items clearfix">
        <template v-for="photo in photos">
          <img :src="photo" :key="photo" width="268" height="268" alt="Photo">
        </template>
      </div>
               
		</div>
  </div>
</template>

<script>
export default {
  name: 'IndexGallery',
  data() {
    return {
      showPopup: false,
      photos: [
        '/img/gallery-main/gallery-photo1.jpg',    	
        '/img/gallery-main/gallery-photo2.jpg',
        '/img/gallery-main/gallery-photo3.jpg',
        '/img/gallery-main/gallery-photo4.jpg',    	
        '/img/gallery-main/gallery-photo5.jpg',
        '/img/gallery-main/gallery-photo6.jpg',
        '/img/gallery-main/gallery-photo7.jpg',    	
        '/img/gallery-main/gallery-photo8.jpg',
        '/img/gallery-main/gallery-photo9.jpg',
        '/img/gallery-main/gallery-photo10.jpg',    	
        '/img/gallery-main/gallery-photo11.jpg',
        '/img/gallery-main/gallery-photo12.jpg'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .index-gallery {
		display: flex;
		justify-content: center;
		padding: 270px 20px 0 20px;
    max-width: 1720px;
		width: 100%;
	}

	.index-gallery__container {
		width: 100%;
	}

  .index-gallery__container h2 {
		margin: 0 0 20px 0;
		width: 595px;

		font-weight: 600;
		font-size: 68px;
		line-height: 100%;
		text-transform: uppercase;
		color: #961E50;
	}

  .index-gallery__container p {
    margin: 0 0 55px 0;

    font-family: GothamPro;
    font-size: 16px;
    line-height: 140%;
    color: rgba($color: #000000, $alpha: 0.6);
  }

  .index-gallery__items {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .index-gallery__items img {
    margin: 0 14px 14px 0;

    cursor: pointer;
    object-fit: cover;
    background-position: center;

    &:nth-child(6n) {
      margin-right: 0;
    }
  }

  @media (max-width: 1919px) {
    .index-gallery {
      padding-top: 290px;
      max-width: 1400px;
    }

    .index-gallery__container p {
      margin-bottom: 40px;
    }

    .index-gallery__items img {
      width: 213px;
      height: 213px;
    }
  }

  @media (max-width: 1599px) {
    .index-gallery {
      padding-top: 165px;
      max-width: 1166px;
    }

    .index-gallery__container h2 {
      font-size: 48px;
    }

    .index-gallery__items img {
      margin-right: 12px;
      margin-bottom: 12px;
      width: 177px;
      height: 177px;
    }
  }

  @media (max-width: 1365px) {
    .index-gallery {
      padding-top: 150px;
      max-width: 1120px;
    }

    .index-gallery__items img {
      margin-right: 12px;
      width: 170px;
      height: 170px;
    }
  }

  @media (max-width: 1199px) {
    .index-gallery {
      padding-top: 155px;
			max-width: 688px;
    }

    .index-gallery__items img {
      margin-right: 14px;
      width: 151px;
      height: 151px;

      &:nth-child(6n) {
        margin-right: 14px;
      }

      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }

  @media (max-width: 767px) {
    .index-gallery {
      padding: 120px 0 0 0;
			max-width: 92vw;
    }

    .index-gallery__container h2 {
      width: 100%;
      margin-bottom: 5px;

      font-size: 36px;
      text-align: center;
    }

    .index-gallery__container p {
      text-align: center;
    }
    
    .index-gallery__items img {
      margin-right: 4%;
      margin-bottom: 5px;
      width: 47.7%;
      height: 164px;

      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
</style>