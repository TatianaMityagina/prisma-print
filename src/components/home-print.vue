<template>
  <div class="home-print">
		<div class="home-print__container">
      <h2>Печать домой</h2>
      <div class="home-print__list">
        <div class="home-print__item">
          <div class="home-print__image-wrapper">
            <img src="~@/assets/img/home/home-kitchen@1x.jpg" srcset="~@/assets/img/home/home-kitchen@2x.jpg 2x" alt="Photo-1" width="317" height="476">
            <a class="home-print__btn" href="#kitchen" v-scroll-to="'#kitchen'">Посмотреть</a>
          </div>
          <h3>Кухня</h3>
        </div>
        <div class="home-print__item">
          <div class="home-print__image-wrapper">
            <img src="~@/assets/img/home/home-bathroom@1x.jpg" srcset="~@/assets/img/home/home-bathroom@2x.jpg 2x" alt="Photo-2" width="317" height="476">
            <a class="home-print__btn" href="#bathroom" v-scroll-to="'#bathroom'">Посмотреть</a>
          </div>
          <h3>Ванная</h3>
        </div>
        <div class="home-print__item">
          <div class="home-print__image-wrapper">
            <img src="~@/assets/img/home/home-childrenroom@1x.jpg" srcset="~@/assets/img/home/home-childrenroom@2x.jpg 2x" alt="Photo-3" width="317" height="476">
            <a class="home-print__btn" href="#childrenroom" v-scroll-to="'#childrenroom'">Посмотреть</a>
          </div>
          <h3>Детская комната</h3>
        </div>
        <div class="home-print__item">
          <div class="home-print__image-wrapper">
            <img src="~@/assets/img/home/home-livingroom@1x.jpg" srcset="~@/assets/img/home/home-livingroom@2x.jpg 2x" alt="Photo-4" width="317" height="476">
            <a class="home-print__btn" href="#livingroom"  v-scroll-to="'#livingroom'">Посмотреть</a>
          </div>
          <h3>Гостиная</h3>
        </div>
        <div class="home-print__item">
          <div class="home-print__image-wrapper">
            <img src="~@/assets/img/home/home-bedroom@1x.jpg" srcset="~@/assets/img/home/home-bedroom@2x.jpg 2x" alt="Photo-5" width="317" height="476">
            <a class="home-print__btn" href="#bedroom" v-scroll-to="'#bedroom'">Посмотреть</a>
          </div>
          <h3>Спальная</h3>
        </div>
      </div>

		</div>
  </div>
</template>

<script>
export default {
  name: 'HomePrint'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home-print {
    display: flex;
    justify-content: center;
    padding-top: 130px;
    width: 100%;
    margin-bottom: 190px;
  }

  .home-print__container {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    max-width: 1720px;
    width: 100%;
  }

  .home-print__container h2 {
    margin: 0 0 70px 0;

    font-weight: 600;
    font-size: 68px;
    line-height: 100%;
    color: #961E50;
  }

  .home-print__list {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .home-print__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 317px;
  }

  .home-print__image-wrapper {
    position: relative;
    margin-bottom: 10px;

    &:hover {
      .home-print__btn {
        display: flex;
        transition-delay: 0.4s;
      }

      img {
        opacity: 0.8;
      }
    }
  }

  .home-print__btn {
    position: absolute;
    top: 45%;
    left: calc(50% - 55px);

    display: none;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 28px;

    font-family: GothamPro;
    font-size: 14px;
    line-height: 140%;
    color: #961E50;
    text-decoration: none;

    background: #FFFFFF;
    border-radius: 20px;
    cursor: pointer;
  }

  .home-print__item h3 {
    margin: 0;

    font-family: GothamPro;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    color: #961E50;
  }

  @media (max-width: 1919px) {
    .home-print {
      margin-bottom: 240px;
    }

    .home-print__container {
      max-width: 1400px;
    }

    .home-print__container h2 {
      margin-bottom: 120px;
    }

    .home-print__image-wrapper img {
      width: 257px;
      height: 386px;
      object-fit: cover;
    }
  }

  @media (max-width: 1599px) {
    .home-print {
      margin-bottom: 130px;
    }

    .home-print__container {
      max-width: 1166px;
    }

    .home-print__container h2 {
      margin-bottom: 30px;
      font-size: 48px;
    }

    .home-print__image-wrapper img {
      width: 213px;
      height: 320px;
    }

    .home-print__btn {
      left: calc(50% - 49px);

      width: 98px;
      height: 19px;

      font-size: 12px;
    }

    .home-print__item h3 {
      font-size: 18px;
    }
  }

  @media (max-width: 1365px) {
    .home-print {
      margin-bottom: 160px;
    }

    .home-print__container {
      max-width: 1120px;
    }

    .home-print__image-wrapper img {
      width: 204px;
      height: 306px;
    }
  }

  @media (max-width: 1199px) {
    .home-print__container {
      max-width: 688px;
    }

    .home-print__item {
      max-width: 122px;
    }

    .home-print__image-wrapper img {
      width: 122px;
      height: 184px;
    }

    .home-print__item h3 {
      font-size: 13px;
    }
  }

  @media (max-width: 767px) {
    .home-print {
      margin-bottom: 110px;
    }
    
    .home-print__container {
      padding: 0;
      max-width: 92vw;
    }

    .home-print__container h2 {
      font-size: 36px;
    }

    .home-print__list {
      justify-content: flex-start;
      overflow-x: scroll;
      padding-bottom: 10px;
    }

    .home-print__list::-webkit-scrollbar {
      height: 8px;
    }

    .home-print__list::-webkit-scrollbar-thumb {
      background: #C71866;
      border-radius: 30px;
    }

    .home-print__list::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 30px;
    }

    scroll-bar::-webkit-scrollbar {
      height: 5px;
    }

    scroll-bar::-webkit-scrollbar-thumb {
      background: #C71866;
      border-radius: 20px;
    }

    scroll-bar::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 20px;
    }

    .home-print__item {
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>