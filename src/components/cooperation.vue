<template>
  <div class="cooperation">
		<div class="cooperation__container">
      <h2>мы готовы к сотрудничеству</h2>
      <picture>
        <source media="(max-width: 767px)" src="~@/assets/img/cooperation-mobile@1x.jpg" srcset="~@/assets/img/cooperation-mobile@2x.jpg 2x">
        <img src="~@/assets/img/index/index-mac@1x.jpg" srcset="~@/assets/img/index/index-mac@2x.jpg 2x" alt="Laptop" width="1680" height="281">
      </picture>
      <div class="cooperation__description-wrapper">
        <p class="cooperation__description-text">
          Дорогие дизайнеры и иллюстраторы! Вы можете с легкостью и удовольствием использовать 
          возможности Призмапринт для реализации своих дизайнерских авторских проектов. 
          Для этого можно заключить партнерство с Призмапринт. При этом рекомендованная 
          стоимость м<sup>2</sup> для заказчика останется неизменной. Для получения партнерского 
          предложения достаточно сделать запрос на почту или WhatsApp.
        </p>
        <div class="cooperation__description-list">
          <a href="tel:89673000344" target="_blank">8967 300 03 44</a>  
          <a href="mailto:info@prismaprint.ru" target="_blank">info@prismaprint.ru</a> 
        </div>
      </div>    
		</div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data() {
    return {
      isHiddenEquipment: false,
      isHiddenProject: false,
      isHidden: false
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cooperation {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 160px;
    padding-bottom: 140px;
  }

  .cooperation__container {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    max-width: 1720px;
    width: 100%;
  }

  .cooperation__container h2 {
    margin: 0 0 70px 0;
    width: 630px;


    font-weight: 600;
    font-size: 68px;
    line-height: 100%;
    text-transform: uppercase;
    color: #961E50;
  }

  .cooperation__container img {
    margin-bottom: 30px;
  }

  .cooperation__description-wrapper {
    display: flex;
    flex-direction: column;
  }

  .cooperation__description-text {
    margin: 0 0 30px 0;

    font-family: GothamPro;
    font-size: 24px;
    line-height: 140%;
    color: rgba($color: #000000, $alpha: 0.6);
  }

  .cooperation__description-text sup {
    line-height: 80%;
  }

  .cooperation__description-list {
    display: flex;
    flex-direction: column;
  }

  .cooperation__description-list a {
    font-weight: bold;
    font-size: 24px;
    line-height: 140%;
    color: rgba($color: #000000, $alpha: 0.6);
    text-decoration: none;
  }

  @media (max-width: 1919px) {
    .cooperation__container {
      max-width: 1400px;
    }

    .cooperation__container h2 {
      margin: 0 0 60px 0;
    }

    .cooperation__container img {
      width: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 1599px) {
    .cooperation__container {
      max-width: 1166px;
    }

    .cooperation__container h2 {
      margin: 0 0 30px 0;
      width: 460px;

      font-size: 48px;
    }

    .cooperation__container img {
      height: 233px;
    }

    .cooperation__description-text,
    .cooperation__description-list a {
      font-size: 20px;
    }
  }

  @media (max-width: 1365px) {
    .cooperation__container {
      max-width: 1120px;
    }
  }

  @media (max-width: 1199px) {
    .cooperation__container {
      max-width: 688px;
    }

    .cooperation__container img {
      height: 199px;
    }

    .cooperation__description-text,
    .cooperation__description-list a {
      font-size: 18px;
    }
  }

  @media (max-width: 767px) {
    .cooperation {
      padding-top: 110px;
      padding-bottom: 100px;
    }

    .cooperation__container {
      max-width: 92vw;
      padding: 0;
    }

    .cooperation__container h2 {
      margin: 0 0 40px 0;
      width: 80vw;
      font-size: 35px;
    }

    .cooperation__container img {
      margin-bottom: 20px;
      height: 199px;
    }
  }
</style>