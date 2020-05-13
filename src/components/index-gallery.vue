<template>
  <div class="index-gallery">
		<div class="index-gallery__container">
      <h2>Галерея работ</h2>
      <p>Уникальные идеи наших любимых клиентов</p>
      <div class="index-gallery__items">
        <img src="~@/assets/img/index/index-galary-photo1@1x.jpg" srcset="~@/assets/img/index/index-galary-photo1@2x.jpg 2x" alt="Photo-1" width="268" height="268">      
        <img src="~@/assets/img/index/index-galary-photo2@1x.jpg" srcset="~@/assets/img/index/index-galary-photo2@2x.jpg 2x" alt="Photo-2" width="268" height="268">
        <img src="~@/assets/img/index/index-galary-photo3@1x.jpg" srcset="~@/assets/img/index/index-galary-photo3@2x.jpg 2x" alt="Photo-3" width="268" height="268">      
        <img src="~@/assets/img/index/index-galary-photo4@1x.jpg" srcset="~@/assets/img/index/index-galary-photo4@2x.jpg 2x" alt="Photo-4" width="268" height="268">
        <img src="~@/assets/img/index/index-galary-photo5@1x.jpg" srcset="~@/assets/img/index/index-galary-photo5@2x.jpg 2x" alt="Photo-5" width="268" height="268">      
        <img src="~@/assets/img/index/index-galary-photo6@1x.jpg" srcset="~@/assets/img/index/index-galary-photo6@2x.jpg 2x" alt="Photo-6" width="268" height="268">

        <img src="~@/assets/img/index/index-galary-photo7@1x.jpg" srcset="~@/assets/img/index/index-galary-photo7@2x.jpg 2x" alt="Photo-7" width="268" height="268">      
        <img src="~@/assets/img/index/index-galary-photo8@1x.jpg" srcset="~@/assets/img/index/index-galary-photo8@2x.jpg 2x" alt="Photo-8" width="268" height="268">
        <img src="~@/assets/img/index/index-galary-photo9@1x.jpg" srcset="~@/assets/img/index/index-galary-photo9@2x.jpg 2x" alt="Photo-9" width="268" height="268">      
        <img src="~@/assets/img/index/index-galary-photo10@1x.jpg" srcset="~@/assets/img/index/index-galary-photo10@2x.jpg 2x" alt="Photo-10" width="268" height="268">
        <img src="~@/assets/img/index/index-galary-photo11@1x.jpg" srcset="~@/assets/img/index/index-galary-photo11@2x.jpg 2x" alt="Photo-11" width="268" height="268">      
        <img src="~@/assets/img/index/index-galary-photo12@1x.jpg" srcset="~@/assets/img/index/index-galary-photo12@2x.jpg 2x" alt="Photo-12" width="268" height="268">
      </div>
               
		</div>
  </div>
</template>

<script>
export default {
  name: 'IndexGallery'
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

  .index-galler__items {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .index-galler__items img {
    margin: 0 14px 14px 0;

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

    .index-galler__items img {
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