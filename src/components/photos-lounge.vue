<template>
  <div class="photos-lounge">
		<div class="photos-lounge__container" id="livingroom">
      <div class="photos-lounge__title-wrapper">
        <h2>Гостиная</h2>
        <span>Там где уединение особенно важно</span>
      </div>
      <div class="photos-lounge__gallery">
        <div class="photos-lounge__left">
          <h3>Фото готовых работ</h3>
          <div v-viewer class="photos-lounge__left-gallery clearfix">
            <template v-for="photo in photos">
              <img :src="photo" :key="photo" width="338" height="195">
            </template>
          </div>
        </div>

        <div class="photos-lounge__right">
          <h3>Галерея идей для Гостиной</h3>
          <div v-viewer class="photos-lounge__right-gallery clearfix">
            <template v-for="image in images">
              <img :src="image" :key="image" width="130" height="145">
            </template>
          </div>
          <p>
            Побывали в отпуске своей мечты и хочется удержать вдохновение? 
            Или хотите, чтобы в твою жизнь пришли важные перемены? 
            Визуализируйте! Это легко на стенах самой посещаемой части твоего дома. 
            Наполни вертикальные пространства силой своих ярких желаний.
          </p>
          <a class="photos-lounge__btn" href="#" @click="showPopup = true">
            Заказать печать в гостиную
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.29197 8.08981C9.12672 8.08981 9.80342 7.41311 9.80342 6.57835C9.80342 5.7436 9.12672 5.06689 8.29197 5.06689C7.45722 5.06689 6.78052 5.7436 6.78052 6.57835C6.78052 7.41311 7.45722 8.08981 8.29197 8.08981Z" fill="white"/>
              <path d="M20.6985 12.1412C19.9847 11.4694 19.0821 11.0286 18.0954 10.9026V3.21944C18.0954 2.40074 17.7595 1.66601 17.2347 1.12021C16.6889 0.574407 15.9542 0.259521 15.1355 0.259521H2.95992C2.14122 0.259521 1.40649 0.595399 0.860687 1.12021C0.314885 1.66601 0 2.40074 0 3.21944V12.8969V13.7996V15.7519C0 16.5706 0.335878 17.3053 0.860687 17.8511C1.40649 18.3969 2.14122 18.7118 2.95992 18.7118H14.7366C15.5134 19.3416 16.479 19.7404 17.5496 19.7404C18.7882 19.7404 19.9008 19.2366 20.6985 18.4389C21.4962 17.6412 22 16.5286 22 15.2901C22 14.0515 21.4962 12.9389 20.6985 12.1412ZM1.1126 3.21944C1.1126 2.71563 1.32252 2.2538 1.6584 1.91792C1.99427 1.58204 2.45611 1.37212 2.95992 1.37212H15.1355C15.6393 1.37212 16.1011 1.58204 16.437 1.91792C16.7729 2.2538 16.9828 2.71563 16.9828 3.21944V9.76906L13.876 6.68318C13.666 6.47326 13.3092 6.45227 13.0782 6.68318L8.39695 11.3855L5.2271 8.19463C5.01718 7.98471 4.66031 7.96372 4.42939 8.19463L1.1126 11.5534V3.21944ZM2.93893 17.6202V17.5992C2.43511 17.5992 1.97328 17.3893 1.6374 17.0534C1.32252 16.7175 1.1126 16.2557 1.1126 15.7519V13.7996V13.1278L4.84924 9.3912L8.01908 12.561C8.22901 12.771 8.58588 12.771 8.81679 12.561L13.4981 7.85876L16.563 10.9446C16.5 10.9656 16.437 10.9866 16.374 11.0076C16.2901 11.0286 16.2061 11.0496 16.1011 11.0916C16.0172 11.1126 15.9332 11.1546 15.8492 11.1756C15.7863 11.1965 15.7443 11.2175 15.6813 11.2595C15.5973 11.3015 15.5343 11.3225 15.4714 11.3645C15.3664 11.4275 15.2614 11.4904 15.1565 11.5534C15.0935 11.5954 15.0515 11.6164 14.9885 11.6584C14.9466 11.6794 14.9256 11.7004 14.8836 11.7214C14.6947 11.8473 14.5267 11.9943 14.3798 12.1622C13.5821 12.9599 13.0782 14.0725 13.0782 15.311C13.0782 15.6259 13.1202 15.9198 13.1832 16.2347C13.2042 16.3187 13.2252 16.3817 13.2462 16.4656C13.3092 16.6755 13.3721 16.8855 13.4561 17.0954V17.1164C13.5401 17.2843 13.624 17.4733 13.729 17.6202H2.93893ZM19.8798 17.6412C19.271 18.25 18.4523 18.6068 17.5286 18.6068C16.6469 18.6068 15.8282 18.25 15.2405 17.6832C15.1565 17.5992 15.0725 17.4943 14.9885 17.4103C14.9256 17.3473 14.8626 17.2633 14.7996 17.2004C14.7156 17.0954 14.6527 16.9694 14.5897 16.8435C14.5477 16.7595 14.5057 16.6965 14.4637 16.6126C14.4218 16.5076 14.3798 16.3817 14.3588 16.2557C14.3378 16.1717 14.2958 16.0668 14.2748 15.9828C14.2328 15.7729 14.2118 15.542 14.2118 15.311C14.2118 14.3874 14.5897 13.5687 15.1775 12.9599C15.7863 12.3511 16.605 11.9943 17.5286 11.9943C18.4523 11.9943 19.271 12.3721 19.8798 12.9599C20.4885 13.5477 20.8454 14.3874 20.8454 15.311C20.8454 16.2137 20.4676 17.0324 19.8798 17.6412Z" fill="white"/>
              <path d="M19.355 14.7233H18.0744V13.4428C18.0744 13.1279 17.8225 12.876 17.5076 12.876C17.1927 12.876 16.9408 13.1279 16.9408 13.4428V14.7233H15.6603C15.3454 14.7233 15.0935 14.9752 15.0935 15.2901C15.0935 15.605 15.3454 15.8569 15.6603 15.8569H16.9408V17.1374C16.9408 17.4523 17.1927 17.7042 17.5076 17.7042C17.8225 17.7042 18.0744 17.4523 18.0744 17.1374V15.8569H19.355C19.6698 15.8569 19.9218 15.605 19.9218 15.2901C19.9218 14.9752 19.6698 14.7233 19.355 14.7233Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>      
		</div>
    <Modal v-show="showPopup" @closepopup="showPopup = false" />
  </div>
</template>

<script>
import Modal from '../components/modal'

export default {
  name: 'PhotosLounge',
  components: {
    Modal
  },
  data() {
    return {
      showPopup: false,
      photos: [
        '/img/lounge/lounge-photo1.jpg',    	
        '/img/lounge/lounge-photo2.jpg',
        '/img/lounge/lounge-photo3.jpg'
      ],
      images: [
        '/img/lounge/lounge-photo4.jpg',    	
        '/img/lounge/lounge-photo5.jpg',
        '/img/lounge/lounge-photo6.jpg',
        '/img/lounge/lounge-photo7.jpg',    	
        '/img/lounge/lounge-photo8.jpg',
        '/img/lounge/lounge-photo9.jpg'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .photos-lounge {
    display: flex;
    justify-content: center;
    margin-bottom: 250px;
    width: 100%;
    max-width: 1920px;

    background: url('~@/assets/img/home/home-couch@1x.png') top right / 544px 634px  no-repeat;
    background-position-y: -50px;
  }

  .photos-lounge__container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0 20px;
    max-width: 1720px;
    width: 100%;
  }

  .photos-lounge__title-wrapper {
    padding-top: 40px;
  }

  .photos-lounge__title-wrapper h2 {
    margin: 0;

    font-weight: 600;
    font-size: 62px;
    line-height: 100%;
    color: #961E50;
    text-transform: uppercase;
    text-shadow: 0px 4px 25px rgba(255, 255, 255, 0.6);
  }

  .photos-lounge__title-wrapper span {
    font-family: GothamPro;
    font-size: 18px;
    line-height: 140%;
    color: #343434;
  }

  .photos-lounge__gallery {
    display: flex;
    justify-content: space-between;
    max-width: 1172px;
    width: 100%;
  }

  .photos-lounge__gallery h3 {
    margin: 0 0 25px 0;

    font-weight: 600;
    font-size: 22px;
    line-height: 100%;
    color: #961E50;
  }

  .photos-lounge__left {
    display: flex;
    flex-direction: column;
  }

  .photos-lounge__left-gallery {
    display: grid;
    grid-template-areas:
    'img1 img1'
    'img2 img3';
    grid-gap: 15px;
    max-width: 694px;
  }

  .photos-lounge__left-gallery img {
    cursor: pointer;
    object-fit: cover;
    
    &:nth-child(1) {
      grid-area: img1;
      width: 100%;
      height: 418px;
    }

    &:nth-child(2) {
      grid-area: img2;
    }

    &:nth-child(3) {
      grid-area: img3;
    }
  }

  .photos-lounge__right {
    display: flex;
    flex-direction: column;
    max-width: 408px;
  }

  .photos-lounge__right-gallery {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 38px;
    width: 100%;
  }

  .photos-lounge__right-gallery img {
    margin-right: 5px;
    margin-bottom: 5px;

    cursor: pointer;
    object-fit: cover;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  .photos-lounge__right p {
    margin: 0 0 30px 0;

    font-family: GothamPro;
    font-size: 16px;
    line-height: 140%;
    color: rgba($color: #000000, $alpha: 0.6);
  }

  .photos-lounge__btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 10px;
    width: 283px;
    height: 38px;

    font-family: GothamPro;
    font-size: 16px;
    line-height: 140%;
    color: #FFFFFF;
    text-decoration: none;

    background: #D73690;
    box-shadow: 0px 4px 10px rgba(139, 17, 85, 0.35);
    border-radius: 20px;

    &:hover {
      transition: 0.4s;
      background: rgb(175, 43, 118);
      box-shadow: 0px 4px 10px rgba(139, 17, 85, 0.5);
    }
  }

  @media (max-width: 1919px) {
    .photos-lounge {
      margin-bottom: 220px;
      background-size: 449px 642px;
    }

    .photos-lounge__container {
      max-width: 1400px;
    }

    .photos-lounge__title-wrapper h2 {
      font-size: 52px;
    }

    .photos-lounge__title-wrapper span {
      display: none;
    }

    .photos-lounge__gallery {
      max-width: 1017px;
    }

    .photos-lounge__left-gallery {
      max-width: 558px;
    }

    .photos-lounge__left-gallery img {
      width: 100%;
      height: 157px;

      &:nth-child(1) {
        width: 100%;
        height: 336px;
      }
    }
  }

  @media (max-width: 1599px) {
    .photos-lounge {
      margin-bottom: 180px;
      background-size: 390px 552px;
    }

    .photos-lounge__container {
      max-width: 1166px;
    }

    .photos-lounge__title-wrapper {
      padding-top: 25px;
    }

    .photos-lounge__title-wrapper h2 {
      font-size: 42px;
    }

    .photos-lounge__gallery {
      max-width: 841px;
    }

    .photos-lounge__gallery h3 {
      font-size: 18px;
    }

    .photos-lounge__left-gallery {
      max-width: 431px;
    }

    .photos-lounge__left-gallery img {
      height: 121px;

      &:nth-child(1) {
        width: 100%;
        height: 265px;
      }
    }

    .photos-lounge__right {
      max-width: 365px;
    }

    .photos-lounge__right p {
      font-size: 14px;
    }

    .photos-lounge__right-gallery {
      margin-bottom: 30px;
    }

    .photos-lounge__right-gallery img {
      margin-right: 5px;
      margin-bottom: 5px;
      width: 116px;
      height: 130px;
    }

    .photos-lounge__btn {
      width: 256px;
      height: 38px;
      font-size: 14px
    }
  }

  @media (max-width: 1365px) {
    .photos-lounge {
      background-size: 319px 437px;
    }

    .photos-lounge__container {
      max-width: 1120px;
    }

    .photos-lounge__gallery {
      max-width: 805px;
    }

    .photos-lounge__gallery h3 {
      margin-bottom: 10px;
    }

    .photos-lounge__left-gallery {
      max-width: 395px;
    }

    .photos-lounge__left-gallery img {
      height: 111px;

      &:nth-child(1) {
        width: 100%;
        height: 238px;
      }
    }
  }

   @media (max-width: 1199px) {
    .photos-lounge {
      background-size: 294px 450px;
      background-position-y: -60px;
    }

    .photos-lounge__container {
      max-width: 688px;
    }

    .photos-lounge__title-wrapper h2 {
      font-size: 40px;
    }

    .photos-lounge__gallery {
      flex-direction: column;
      justify-content: start;
      max-width: 400px;
    }

    .photos-lounge____gallery h3 {
      margin-bottom: 10px;
    }

    .photos-lounge__left {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 767px) {
    .photos-lounge {
      margin-bottom: 120px;
      background-size: 180px 285px;
      background-position-y: -50px;
    }

    .photos-lounge__container {
      flex-direction: column;
      align-items: center;
      max-width: 92vw;
      padding: 0;
    }

    .photos-lounge__title-wrapper {
      padding: 0;
      margin-bottom: 218px;
    }

    .photos-lounge__gallery {
      align-items: center;
      max-width: 100%;
    }

    .photos-lounge__gallery h3 {
      text-align: center;
    }

    .photos-lounge__left {
      margin-bottom: 40px;
    }

    .photos-lounge__left-gallery {
      max-width: 100%;
      grid-gap: 8px;
    }

    .photos-lounge__left-gallery img {
      height: 97px;

      &:nth-child(1) {
        width: 100%;
        height: 208px;
      }
    }

    .photos-lounge__right {
      align-items: center;
    }

    .photos-lounge__right-gallery {
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .photos-lounge__right-gallery img {
      margin-right: 0;
      margin-bottom: 5px;
      width: 110px;
      height: 123px;
    }

    .photos-lounge__right p {
      margin-bottom: 20px;
      text-align: center;
    }
  }
</style>