<template>
  <div class="office-print">
		<div class="office-print__container">
      <h2>Коммерческая печать</h2>
      <div class="office-print__list">
        <div class="office-print__item">
          <div class="office-print__image-wrapper">
            <div class="b"></div>
            <img src="~@/assets/img/office/office-print1@1x.png" srcset="~@/assets/img/office/office-print1@2x.png 2x" alt="Photo-1" width="317" height="476">
            <div class="office-print__btn-wrapper">
              <a class="office-print__btn" href="#kitchen" v-scroll-to="'#office-print'">Посмотреть</a>
            </div>
          </div>
          <h3>Офис</h3>
        </div>
        <div class="office-print__item">
          <div class="office-print__image-wrapper">
            <img src="~@/assets/img/office/office-print2@1x.png" srcset="~@/assets/img/office/office-print2@2x.png 2x" alt="Photo-1" width="317" height="476">
            <div class="office-print__btn-wrapper">
              <a class="office-print__btn" href="#bathroom" v-scroll-to="'#hotel'">Посмотреть</a>
            </div>
          </div>
          <h3>Гостинично-ресторанный бизнес</h3>
        </div>
        <div class="office-print__item">
          <div class="office-print__image-wrapper">
            <img src="~@/assets/img/office/office-print3@1x.png" srcset="~@/assets/img/office/office-print3@2x.png 2x" alt="Photo-1" width="317" height="476">
            <div class="office-print__btn-wrapper">
              <a class="office-print__btn" href="#childrenroom" v-scroll-to="'#municipal'">Посмотреть</a>
            </div>
          </div>
          <h3>Муниципалитет</h3>
        </div>
        <div class="office-print__item">
          <div class="office-print__image-wrapper">
            <img src="~@/assets/img/office/office-print4@1x.png" srcset="~@/assets/img/office/office-print4@2x.png 2x" alt="Photo-1" width="317" height="476">
            <div class="office-print__btn-wrapper">
              <a class="office-print__btn" href="#livingroom"  v-scroll-to="'#fitness'">Посмотреть</a>
            </div>
          </div>
          <h3>Спорт</h3>
        </div>
        <div class="office-print__item">
          <div class="office-print__image-wrapper">
            <img src="~@/assets/img/office/office-print5@1x.png" srcset="~@/assets/img/office/office-print5@2x.png 2x" alt="Photo-1" width="317" height="476">
            <div class="office-print__btn-wrapper">
              <a class="office-print__btn" href="#bedroom" v-scroll-to="'#spa'">Посмотреть</a>
            </div>
          </div>
          <h3>Сфера услуг</h3>
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
  .office-print {
    display: flex;
    justify-content: center;
    padding-top: 130px;
    width: 100%;
    margin-bottom: 190px;
  }

  .office-print__container {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    max-width: 1720px;
    width: 100%;
  }

  .office-print__container h2 {
    margin: 0 0 70px 0;

    font-weight: 600;
    font-size: 68px;
    line-height: 100%;
    color: #961E50;
  }

  .office-print__list {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .office-print__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 317px;
  }

  .office-print__image-wrapper {
    position: relative;
    margin-bottom: 10px;

    &:hover {
      .office-print__btn-wrapper {
        display: flex;
        transition-delay: 0.4s;
      }

      img {
        opacity: 0.8;
      }
    }
  }

  .office-print__btn-wrapper {   
    position: absolute;
    top: 0;
    width: 100%;
    height: 98%;

    display: none;
    align-items: center;
    justify-content: center;

    background: linear-gradient(0deg, rgba(67, 67, 67, 0.4), rgba(67, 67, 67, 0.4));
  }

  .office-print__btn {
    display: flex;
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

  .office-print__item h3 {
    margin: 0;
    max-width: 250px;

    font-family: GothamPro;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    color: #961E50;
  }

  @media (max-width: 1919px) {
    .office-print {
      margin-bottom: 240px;
    }

    .office-print__container {
      max-width: 1400px;
    }

    .office-print__container h2 {
      margin-bottom: 120px;
    }

    .office-print__image-wrapper img {
      width: 257px;
      height: 386px;
      object-fit: cover;
    }
  }

  @media (max-width: 1599px) {
    .office-print {
      margin-bottom: 130px;
    }

    .office-print__container {
      max-width: 1166px;
    }

    .office-print__container h2 {
      margin-bottom: 30px;
      font-size: 48px;
    }

    .office-print__image-wrapper img {
      width: 213px;
      height: 320px;
    }

    .office-print__btn {
      width: 98px;
      height: 19px;

      font-size: 12px;
    }

    .office-print__item h3 {
      font-size: 18px;
      max-width: 213px;
    }
  }

  @media (max-width: 1365px) {
    .office-print {
      margin-bottom: 160px;
    }

    .office-print__container {
      max-width: 1120px;
    }

    .office-print__image-wrapper img {
      width: 204px;
      height: 306px;
    }

    .office-print__btn-wrapper {
      height: 97.5%;
    }
  }

  @media (max-width: 1199px) {
    .office-print__container {
      max-width: 688px;
    }

    .office-print__item {
      max-width: 122px;
    }

    .office-print__image-wrapper img {
      width: 122px;
      height: 184px;
    }

    .office-print__btn-wrapper {
      height: 96%;
    }

    .office-print__item h3 {
      font-size: 13px;
    }
  }

  @media (max-width: 767px) {
    .office-print {
      margin-bottom: 110px;
    }
    
    .office-print__container {
      padding: 0;
      max-width: 92vw;
    }

    .office-print__container h2 {
      font-size: 36px;
    }

    .office-print__list {
      justify-content: flex-start;
      overflow-x: scroll;
      padding-bottom: 10px;
    }

    .office-print__list::-webkit-scrollbar {
      height: 8px;
    }

    .office-print__list::-webkit-scrollbar-thumb {
      background: #C71866;
      border-radius: 30px;
    }

    .office-print__list::-webkit-scrollbar-track {
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

    .office-print__item {
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>