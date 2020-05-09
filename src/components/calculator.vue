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
          <fieldset>
            <legend>Тип поверхности:</legend>
            <ul class="calculator__form-list">
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="walls">
                <label class="calculator__form-label" for="walls">Обои</label>
              </li>
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="putty">
                <label class="calculator__form-label" for="putty">Шпаклевка</label>
              </li>
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="plastic">
                <label class="calculator__form-label" for="plastic">Пластик</label>
              </li>
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="ceramic">
                <label class="calculator__form-label" for="ceramic">Керамика</label>
              </li>
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="glass">
                <label class="calculator__form-label" for="glass">Стекло</label>
              </li>
              <li class="calculator__form-item">
                <input class="calculator__form-radio visually-hidden" type="radio" id="wood">
                <label class="calculator__form-label" for="wood">Дерево</label>
              </li>
            </ul>
          </fieldset>

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
                <span>м<sup>2</sup></span>
              </li>
              <li class="calculator__result-item">
                <p>Стоимость</p>
                <span>руб</span>
              </li>
            </ul>
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
    justify-content: space-between;
    width: 100%;
  }

  .calculator__wrapper fieldset {
    border: none;
  }

  .calculator__form-list {
    display: flex;
  }

  .calculator__result-list {
    display: flex;
  }

  @media (max-width: 1919px) {
  }

  @media (max-width: 1599px) {
  }

  @media (max-width: 1365px) {
  }
</style>