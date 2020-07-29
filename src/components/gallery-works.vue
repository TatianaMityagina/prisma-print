<template>
  <div class="gallery-works">
		<div class="gallery-works__container">
      <h2>Галерея работ</h2>
      <div v-viewer class="gallery-works__items clearfix">
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
        '/img/gallery/gallery-photo1.jpg',    	
        '/img/gallery/gallery-photo2.jpg',
        '/img/gallery/gallery-photo3.jpg',
        '/img/gallery/gallery-photo4.jpg',    	
        '/img/gallery/gallery-photo5.jpg',
        '/img/gallery/gallery-photo6.jpg',
        '/img/gallery/gallery-photo7.jpg',    	
        '/img/gallery/gallery-photo8.jpg',
        '/img/gallery/gallery-photo9.jpg',
        '/img/gallery/gallery-photo10.jpg',    	
        '/img/gallery/gallery-photo11.jpg',
        '/img/gallery/gallery-photo12.jpg',
        '/img/gallery/gallery-photo13.jpg',    	
        '/img/gallery/gallery-photo14.jpg',
        '/img/gallery/gallery-photo15.jpg',
        '/img/gallery/gallery-photo16.jpg',    	
        '/img/gallery/gallery-photo17.jpg',
        '/img/gallery/gallery-photo18.jpg',
        '/img/gallery/gallery-photo19.jpg',    	
        '/img/gallery/gallery-photo20.jpg',
        '/img/gallery/gallery-photo21.jpg',
        '/img/gallery/gallery-photo22.jpg',    	
        '/img/gallery/gallery-photo23.jpg',
        '/img/gallery/gallery-photo24.jpg',
        '/img/gallery/gallery-photo25.jpg',    	
        '/img/gallery/gallery-photo26.jpg',
        '/img/gallery/gallery-photo27.jpg',
        '/img/gallery/gallery-photo28.jpg',    	
        '/img/gallery/gallery-photo29.jpg',
        '/img/gallery/gallery-photo30.jpg',
        '/img/gallery/gallery-photo31.jpg',    	
        '/img/gallery/gallery-photo32.jpg',
        '/img/gallery/gallery-photo33.jpg',
        '/img/gallery/gallery-photo34.jpg',    	
        '/img/gallery/gallery-photo35.jpg',
        '/img/gallery/gallery-photo36.jpg'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .gallery-works {
		display: flex;
		justify-content: center;
		padding: 160px 20px 80px 20px;
    max-width: 1720px;
		width: 100%;
	}

	.gallery-works__container {
		width: 100%;
	}

  .gallery-works__container h2 {
		margin: 0 0 65px 0;

		font-weight: 600;
		font-size: 68px;
		line-height: 100%;
		text-transform: uppercase;
		color: #961E50;
	}

  .gallery-works__items {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .gallery-works__items img {
    margin: 0 14px 14px 0;

    cursor: pointer;
    object-fit: cover;

    &:nth-child(6n) {
      margin-right: 0;
    }
  }

  @media (max-width: 1919px) {
    .gallery-works {
      max-width: 1400px;
    }

    .gallery-works__items img {
      width: 213px;
      height: 213px;
    }
  }

  @media (max-width: 1599px) {
    .gallery-works {
      max-width: 1166px;
    }

    .gallery-works__container h2 {
      font-size: 48px;
    }

    .gallery-works__items img {
      margin-right: 12px;
      margin-bottom: 12px;
      width: 177px;
      height: 177px;
    }
  }

  @media (max-width: 1365px) {
    .gallery-works {
      padding-top: 150px;
      max-width: 1120px;
    }

    .gallery-works__items img {
      margin-right: 12px;
      width: 170px;
      height: 170px;
    }
  }

  @media (max-width: 1199px) {
    .gallery-works {
      padding-top: 155px;
			max-width: 688px;
    }

    .gallery-works__items img {
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
    .gallery-works {
      padding: 120px 0 100px 0;
			max-width: 92vw;
    }

    .gallery-works__container h2 {
      width: 100%;
      margin-bottom: 40px;

      font-size: 46px;
      text-align: center;
    }

    .gallery-works__items img {
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