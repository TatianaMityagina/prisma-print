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
                <input class="calculator__form-radio visually-hidden" type="radio" id="walls" name="type">
                <label class="calculator__form-label" for="walls">Обои</label>
              </li>
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="putty" name="type">
                <label class="calculator__form-label" for="putty">Шпаклевка</label>
              </li>
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="plastic" name="type">
                <label class="calculator__form-label" for="plastic">Пластик</label>
              </li>
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="ceramic" name="type">
                <label class="calculator__form-label" for="ceramic">Керамика</label>
              </li>
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="glass" name="type">
                <label class="calculator__form-label" for="glass">Стекло</label>
              </li>
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="wood" name="type">
                <label class="calculator__form-label" for="wood">Дерево</label>
              </li>
            </ul>
          </div>

          <div>
            <ul class="calculator__result-list">
              <li class="calculator__result-item">
                <p>Ширина</p>
                <span>см</span>
              </li>
              <li class="calculator__result-item">
                <p>Высота</p>
                <span>см</span>
              </li>
              <li class="calculator__result-item">
                <p>Размер</p>
                <span>м<sup class="calculator__sup">2</sup></span>
              </li>
              <li class="calculator__result-item">
                <p>Стоимость</p>
                <span>руб</span>
              </li>
            </ul>
          </div>
        </form>

        <form>
          <div class="calculator__bg">
          </div>
        </form>

      </div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Calculator'
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
  left: 97px;
  bottom: 52px;

  height: 1px;
  width: 1114px;

  -webkit-appearance: none;
  background-color: transparent;
  outline: none;
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

    &:nth-child(2) {
      margin-top: 80px;
    }
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
    margin-right: 25px;

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
    font-size: 18px;
    line-height: 140%;
    color: #1893E2;
  }

  .calculator__sup {
    line-height: 90%;
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