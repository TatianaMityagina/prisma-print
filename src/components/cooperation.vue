<template>
  <div class="cooperation">
		<div class="cooperation__container">
      <h2>Сотрудничество с prismaprinт</h2>
      <img src="~@/assets/img/index/index-mac@1x.jpg" srcset="~@/assets/img/index/index-mac@2x.jpg 2x" alt="Laptop" width="1680" height="281"> 
      <div class="cooperation__description-wrapper">
        <p class="cooperation__description-text">
          Мы разработали ряд партнёрских выгодных условий. 
          Если у вас имеется предложение или хотите получить 
          данные по сотрудничеству в печати позвоните нам 
          по номеру <a href="tel:89282565554">8928 256 55 54</a>  
          или напишите на почту <a href="mailto:info@prismaprint.ru">info@prismaprint.ru</a> 
        </p>
        <div class="cooperation__description-list">
          <div class="cooperation__description-item">
            <div class="cooperation__icon">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0V7M7 7H0M7 7H14M7 7V14" stroke="white" stroke-width="2"/>
              </svg>
              
              <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H7H14" stroke="white" stroke-width="2"/>
              </svg>
            </div>
            <h3>По проектам</h3>
            <p>
            У вас есть большие проекты для печати на постоянную основу, мы платим % от проекта. Выгодные условия
            </p>
          </div>
          <div class="cooperation__description-item">
            <div class="cooperation__icon">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0V7M7 7H0M7 7H14M7 7V14" stroke="white" stroke-width="2"/>
              </svg>
              
              <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H7H14" stroke="white" stroke-width="2"/>
              </svg>
            </div>
            <h3>Продажа оборудования</h3>
            <p>
              У вас есть большие проекты для печати на постоянную основу, мы платим % от проекта. Выгодные условия
            </p>
          </div>
          <div class="cooperation__description-item">
            <div class="cooperation__icon">
              <svg v-show="!isHidden" @click="isHidden = !isHidden" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0V7M7 7H0M7 7H14M7 7V14" stroke="white" stroke-width="2"/>
              </svg>
              
              <svg v-show="isHidden" @click="isHidden = true" width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H7H14" stroke="white" stroke-width="2"/>
              </svg>
            </div>
            <h3>Промо (Взаимная реклама)</h3>
            <p v-if="isHidden">
              У вас есть большие проекты для печати на постоянную основу, мы платим % от проекта. Выгодные условия
            </p>
          </div>
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
    margin-bottom: 50px;
  }

  .cooperation__description-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .cooperation__description-text {
    margin: 0;
    max-width: 430px;

    font-family: GothamPro;
    font-size: 16px;
    line-height: 140%;
    color: rgba($color: #000000, $alpha: 0.6);
  }

  .cooperation__description-text a {
    font-weight: bold;
    color: rgba($color: #000000, $alpha: 0.7);
  }

  .cooperation__description-list {
    display: flex;
  }

  .cooperation__description-item {
    position: relative;
    width: 335px;
    margin-right: 80px;

    &:last-child {
      margin-right: 0;
    }
  }

  .cooperation__icon {
    position: absolute;
    top: 0;
    left: -40px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;

    font-weight: bold;
    font-size: 18px;
    color: #ffffff;

    background: #A30E4C;
    border-radius: 50%;
  }

  .cooperation__description-item h3 {
    margin: 0 0 5px 0;

    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: #A30E4C;
  }

  .cooperation__description-item p {
    margin: 0;

    font-family: GothamPro;
    font-size: 16px;
    line-height: 140%;
    color: #343434;
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

    .cooperation__description-wrapper {
      justify-content: flex-start;
    }

    .cooperation__description-list {
      flex-direction: column;
      margin-left: 115px;
    }

    .cooperation__description-item {
      margin-bottom: 25px;
      margin-right: 0;

      &:last-child {
        margin-bottom: 0;
      }
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

    .cooperation__description-wrapper {
      justify-content: space-between;
    }

    .cooperation__description-text {
      max-width: 46%;
    }

    .cooperation__description-list {
      max-width: 45%;
      margin-left: 0;
    }
  }
</style>