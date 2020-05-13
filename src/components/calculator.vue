<template>
  <div class="calculator">
		<div class="calculator__container">    
      <h2 class="calculator__title">
        КАЛЬКУЛЯТОР 
        <span>СТОИМОСТИ</span>
      </h2>
      <p class="calculator__title-text">
        Выберите поверхность и укажите размеры вашего рисунка 
        в ширину и высоту для подсчета стоимости итоговой печати
      </p>
      <div class="calculator__wrapper">
        <form>
          <div class="calculator__wrapper-list">
            <h3>Тип поверхности:</h3>
            <ul class="calculator__form-list">
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="walls" name="type" v-model="pick" v-bind:value="65">
                <label class="calculator__form-label" for="walls">Обои</label>
              </li>
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="putty" name="type" v-model="pick" v-bind:value="25">
                <label class="calculator__form-label" for="putty">Шпаклевка</label>
              </li>
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="plastic" name="type" v-model="pick" v-bind:value="58">
                <label class="calculator__form-label" for="plastic">Пластик</label>
              </li>
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="ceramic" name="type" v-model="pick" v-bind:value="36">
                <label class="calculator__form-label" for="ceramic">Керамика</label>
              </li>
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="glass" name="type" v-model="pick" v-bind:value="158">
                <label class="calculator__form-label" for="glass">Стекло</label>
              </li>
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="wood" name="type" v-model="pick" v-bind:value="111">
                <label class="calculator__form-label" for="wood">Дерево</label>
              </li>
            </ul>
          </div>

          <div class="calculator__result">
            <ul class="calculator__result-list">
              <li class="calculator__result-item">
                <p>Ширина</p>
                <div class="calculator__result-feild">
                  <input type="text" id="width" v-model="valueWidth">
                  <label for="width">см</label>
                </div>
              </li>
              <li class="calculator__result-item">
                <p>Высота</p>
                <div class="calculator__result-feild">
                  <input type="text" id="height" v-model="valueHeight">
                  <label for="height">см</label>
                </div>
              </li>
              <li class="calculator__result-item">
                <p>Размер</p>
                <span>{{size}} м<sup class="calculator__sup">2</sup></span>
              </li>
              <li class="calculator__result-item">
                <p>Стоимость</p>
                <span>{{resultSum}} руб</span>
              </li>
            </ul>
          </div>
        </form>

        <div class="calculator__bg-wrapper">
          <div class="calculator__bg">
            <vue-slider class="calculator__horizontal-range" v-model="valueWidth" v-bind="horizontal" />
            <vue-slider class="calculator__vertical-range" v-model="valueHeight" v-bind="vertical" />
            <img class="calculator__figure" src="~@/assets/img/figure-bg.svg" alt="Photo figure" :width="446" :height="387">
          </div>
        </div>

        <div class="calculator__mobile">
          <h3>Ширина и высота рисунка</h3>
          <vue-slider class="calculator__mobile-width" v-model="valueWidth" v-bind="mobileWidth" />
          <div class="bg-width"></div>
          <vue-slider class="calculator__mobile-height" v-model="valueHeight" v-bind="mobileHeight" />
          <div class="bg-height"></div>

          <table class="calculator__mobile-table">
            <tr class="calculator__table-row">
              <td class="calculator__row-title">Размер</td>
              <td class="calculator__row-result">{{size}} м<sup>2</sup></td>
            </tr>
            <tr class="calculator__table-row">
              <td class="calculator__row-title">Стоимость</td>
              <td class="calculator__row-result">{{resultSum}} руб</td>
            </tr>
          </table>
        </div>

      </div>
		</div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import '../assets/style/calculator.css'

export default {
  name: 'Calculator',
  components: {
    VueSlider
  }, 
  data() {
    return {
      width: null,
      vueCanvas: null,
      valueWidth: 50,
      valueHeight: 50,
      pick: '65',
      horizontal: {
        width: '1114',
        height: 1,
        contained: false,
        data: null,
        min: 0,
        max: 500,
        interval: 1,
        disabled: false,
        clickable: true,
        tooltip: 'always',
        tooltipPlacement: 'bottom',
        useKeyboard: true,
        keydownHook: null,
        dragOnClick: true,
        enableCross: true,
        fixed: true,
        order: true,
        process: true
      },
      vertical: {
        width: '1',
        height: 418,
        contained: false,
        data: null,
        min: 0,
        max: 185,
        interval: 1,
        direction: 'btt',
        disabled: false,
        clickable: true,
        tooltip: 'always',
        tooltipPlacement: 'bottom',
        useKeyboard: true,
        keydownHook: null,
        dragOnClick: true,
        enableCross: true,
        fixed: true,
        order: true,
        process: true
      },
      mobileWidth: {
        width: 'auto',
        height: 1,
        contained: false,
        data: null,
        min: 0,
        max: 500,
        interval: 1,
        disabled: false,
        clickable: true,
        tooltip: 'always',
        tooltipPlacement: 'top',
        useKeyboard: true,
        keydownHook: null,
        dragOnClick: true,
        enableCross: true,
        fixed: true,
        order: true,
        process: true
      },
      mobileHeight: {
        width: 'auto',
        height: 1,
        contained: false,
        data: null,
        min: 0,
        max: 185,
        interval: 1,
        disabled: false,
        clickable: true,
        tooltip: 'always',
        tooltipPlacement: 'top',
        useKeyboard: true,
        keydownHook: null,
        dragOnClick: true,
        enableCross: true,
        fixed: true,
        order: true,
        process: true
      },
    }
  },
  computed: {
    size() {
      return ((this.valueWidth / 100) * (this.valueHeight / 100)).toFixed(1)
    },
    resultSum() {
      return (this.pick * (this.valueWidth / 100) * (this.valueHeight / 100)).toFixed(1)
    }
  },
  created() {
    window.addEventListener('resize', this.updateWidth)
    this.updateWidth()
    this.changeHeight()
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth
      this.changeHeight()
    },

    changeHeight() {
      if (this.width > 1600) {
        this.vertical.height = 418
      }
      if (this.width < 1600) {
        this.vertical.height = 384;
      } 
      
      if (this.width < 1366) {
        this.vertical.height = 329;
      } 
      
      if (this.width < 1200) {
        this.vertical.height = 223;
      } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .calculator {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .calculator__mobile {
    display: none;
  }

  .calculator__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 260px 20px 0 20px;
    max-width: 1720px;
    width: 100%;
  }

  .calculator__title {
    margin: 0 0 20px 0;
    width: 460px;

    font-weight: 300;
    font-size: 68px;
    line-height: 100%;
    text-align: center;
    color: #961E50;
  }

  .calculator__title span {
    font-weight: bold;
  }

  .calculator__title-text {
    margin: 0 0 50px 0;
    max-width: 832px;

    font-family: GothamPro;
    font-size: 18px;
    line-height: 140%;
    text-align: center;
    color: #343434;
  }

  .calculator__wrapper {
    width: 100%;
  }

  .calculator__wrapper form {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 80px;
  }

  .calculator__bg-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .calculator__wrapper-list {
    display: flex;
    flex-direction: column;
  }

  .calculator__wrapper-list h3 {
    margin: 0 0 15px 0;

    font-family: GothamPro;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 140%;
    color: #1893E2;
  }

  .calculator__form-list {
    display: flex;
    margin-right: 105px;
  }

  .calculator__form-item {
    margin-right: 45px;

    &:last-child {
      margin-right: 0;
    }
  }

  .calculator__form-label {
    position: relative;
    
    font-family: GothamPro;
    font-size: 14px;
    line-height: 13px;
    color: #343434;
  }

  .calculator__form-label::before {
    position: absolute;
    content: "";
    left: -26px;
    top: -3px;

    width: 20px;
    height: 20px;

    border: 1px solid #961E50;
    border-radius: 50%;
  }

  .calculator__form-radio:checked + .calculator__form-label::after {
    content: "";
    position: absolute;
    left: -21px;
    top: 2px;

    width: 10px;
    height: 10px;

    background: #961E50;
    border-radius: 50%;
  }

  .calculator__result-list {
    display: flex;
  }

  .calculator__result-item  {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    min-width: 85px;

    font-family: GothamPro;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 140%;
    color: #1893E2;

    &:last-child {
      margin-right: 0;
    }
  }

  .calculator__result-item p {
    margin: 0 0 15px 0;

    font-family: GothamPro;
    font-style: normal;
    font-weight: bold;
    text-align: start;
    font-size: 18px;
    line-height: 140%;
    color: #1893E2;
  }

  .calculator__sup {
    line-height: 90%;
  }

  .calculator__result-feild input {
    border: none;
    outline: none;
    max-width: 40px;
  }

  .calculator__result-feild input[type=text] {
    font-family: GothamPro;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 140%;
    color: #1893E2;
  }

  // Grafic
  .calculator__grafic {
    max-width: 1125px;
    min-height: 597px;
  }

  .calculator__bg {
  position: relative;
  width: 1225px;
  height: 508px;
  background: url('~@/assets/img/calculator-bg.svg') center / 1225px 508px no-repeat;
}

.calculator__horizontal-range {
  position: absolute;
  left: 98px;
  bottom: 47px;

  height: 1px;
  width: 1114px;
}

.calculator__vertical-range {
  position: absolute;
  left: 61px;
  top: 6px;
  width: 1px;
  height: 418px;
}

.calculator__figure {
  position: absolute;
  top: 38px;
  left: 98px;
}

  @media (max-width: 1919px) {
  }

  @media (max-width: 1599px) {
    .calculator__container {
      max-width: 1166px;
    }

    .calculator__title {
      font-size: 48px;
    }

    .calculator__title-text {
      font-size: 14px;
      max-width: 650px;
    }

    .calculator__form-list {
      margin-right: 40px;
    }

    .calculator__result-item {
      margin-right: 15px;
    }

    .calculator__wrapper form {
      padding-left: 50px;
      margin-bottom: 60px;
    }
    
    // Calculator

    .calculator__bg {
      position: relative;
      height: 468px;
      background: url('~@/assets/img/calculator-bg.svg') center/1225px 468px no-repeat;
    }

    .calculator__horizontal-range {
      position: absolute;
      left: 90px;
      bottom: 42px;

      width: 1024px;
    }

    .calculator__vertical-range {
      position: absolute;
      left: 54px;
      top: 6px;

      height: 384px;
    }

    .calculator__figure {
      position: absolute;
      top: 35px;
      left: 88px;

      width: 410px;
      height: 356px;
    }
  }

  @media (max-width: 1365px) {
    .calculator__container {
      max-width: 1120px;
    }

    .calculator__wrapper-list h3 {
      margin-bottom: 11px;
      font-size: 14px;
    }

    .calculator__result-item p,
    .calculator__result-item {
      font-size: 14px;
    }

    .calculator__result-item {
      min-width: 70px;
    }

    .calculator__result-feild input[type=text]  {
      max-width: 30px;
      font-size: 14px;
    }

    .calculator__form-list {
      margin-right: 40px;
    }

    .calculator__result-item {
      margin-right: 15px;
    }

    .calculator__wrapper form {
      padding-left: 50px;
      margin-bottom: 60px;
    }
    
    // Calculator

    .calculator__bg {
      position: relative;
      width: 962px;
      height: 400px;
      background: url('~@/assets/img/calculator-bg.svg') center/962px 400px no-repeat;
    }

    .calculator__horizontal-range {
      position: absolute;
      left: 78px;
      bottom: 36px;

      width: 876px;
    }

    .calculator__vertical-range {
      position: absolute;
      left: 46px;
      top: 6px;

      height: 329px;
    }

    .calculator__figure {
      position: absolute;
      top: 30px;
      left: 76px;

      width: 351px;
      height: 304px;
    }
  }

   @media (max-width: 1199px) {
    .calculator__container {
      max-width: 688px;
    }

    .calculator__title-text {
      margin-bottom: 35px;
    }

    .calculator__form-list {
      margin-right: 0;
    }

    .calculator__wrapper form {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding-left: 0;
      margin-bottom: 40px;
    }

    .calculator__wrapper-list {
      align-items: center;
      margin-bottom: 15px;
    }

    .calculator__wrapper-list h3 {
      font-size: 18px;
    }

    .calculator__result-item p {
      margin-bottom: 10px;
      font-size: 18px;
    }

    .calculator__result-item p,
    .calculator__result-item {
      font-size: 18px;
    }

    .calculator__result-item {
      min-width: 85px;
    }

    .calculator__result-feild input[type=text]  {
      max-width: 30px;
      font-size: 18px;
    }
    
    // Calculator

    .calculator__bg {
      position: relative;
      width: 657px;
      height: 273px;
      background: url('~@/assets/img/calculator-bg.svg') center/657px 273px no-repeat;
    }

    .calculator__horizontal-range {
      position: absolute;
      left: 48px;
      bottom: 22px;

      width: 596px;
    }

    .calculator__vertical-range {
      position: absolute;
      left: 25px;
      top: 4px;

      height: 223px;
    }

    .calculator__figure {
      position: absolute;
      top: 25px;
      left: 47px;

      width: 236px;
      height: 205px;
    }
  }

  @media (max-width: 767px) {
    .calculator__mobile {
      display: block;
    }
    .calculator__container {
      max-width: 92vw;
      padding: 120px 0 0 0;
    }

    .calculator__title {
      font-size: 36px;
    }

    .calculator__title-text {
      width: 100%;
    }

    .calculator__form-list {
      display: flex;
      flex-direction: column; 
      flex-wrap: wrap;
      height: 130px;
      width: 100%;
    }
    
    .calculator__form-item {
      page-break-inside: avoid;
      break-inside: avoid;
      margin-bottom: 20px;
      margin-right: 50px;

      &:nth-child(3n) {
        margin-bottom: 0;
      }

      &:nth-child(4) {
        margin-right: 0;
      }

      &:nth-child(5) {
        margin-right: 0;
      }

      &:nth-child(6) {
        margin-right: 0;
      }
    }

    .calculator__result {
      display: none;
    }

    .calculator__bg-wrapper {
      display: none;
    }

    .bg-height {
      margin-bottom: 40px;
      width: 100%;
      height: 36px;
      background: url('~@/assets/img/bg-mobile-height.svg') center/ contain no-repeat;
    }

    .bg-width {
      margin-bottom: 65px;
      width: 100%;
      height: 26px;
      background: url('~@/assets/img/bg-mobile-width.svg') center/ contain no-repeat;
    }

    .calculator__mobile h3 {
      margin: 0 0 65px 0;

      font-family: GothamPro;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 140%;
      text-align: center;
      color: #1893E2;
    }

    .calculator__row-title {
      font-family: GothamPro;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;
      color: #218ACD;
    }

    .calculator__mobile-table {
      display: flex;
      justify-content: center;
      width: 85vw;
    }

    .calculator__table-row {
      display: flex;
      flex-direction: column;
      width: 110px;
    }

    .calculator__row-result {
      font-family: GothamPro;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 27px;
      white-space: nowrap;
      color: #218ACD;
    }

    .calculator__row-result sup {
      font-size: 14px;
      line-height: 10px;
    }
  }
  
</style>