<template>
  <div class="calculator">
		<div class="calculator__container">    
      <h2 class="calculator__title">
        КАЛЬКУЛЯТОР 
        <span>СТОИМОСТИ</span>
      </h2>
      <p>
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
            <!-- <img class="calculator__figure" src="~@/assets/img/figure-bg.svg" alt="Photo figure" :width="valueWidth" :height="valueHeight"> -->

            <canvas class="calculator__figure" ref="canvas" id="canvas"/>
          </div>
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
      }
    }
  },
  computed: {
    size() {
      return ((this.valueWidth / 100) * (this.valueHeight / 100)).toFixed(3)
    },
    resultSum() {
      return (this.pick * (this.valueWidth / 100) * (this.valueHeight / 100)).toFixed(1)
    }
  },
  mounted() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    this.VueCanvas = ctx;
  },
  methods: {
    drawRect() {
      // clear canvas
      this.vueCanvas.clearRect(0, 0, 400, 200);
      
      // draw rect
      this.vueCanvas.beginPath();
      this.vueCanvas.rect(0, 0, this.valueWidth, this.valueHeight);
      this.vueCanvas.stroke();      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  top: 6px;
  left: 98px;

  width: 1109px;
  height: 418px;

  border: 2px solid gray;
}

  .calculator {
    display: flex;
    justify-content: center;
    width: 100%;
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

  .calculator__container p {
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

  @media (max-width: 1919px) {
  }

  @media (max-width: 1599px) {
  }

  @media (max-width: 1365px) {
  }
</style>