<template>
  <div class="commercial-print">
		<div class="commercial-print__container">
      <h2>Коммерческая печать</h2>
      <div class="commercial-print__list-wrapper commercial-print__list-wrapper--content-hidden">
        <ul class="commercial-print__list">
          <li>Кафе</li>
          <li>Рестораны</li>
          <li>Бары</li>
          <li>Кофейни</li>
          <li>Пиццерии</li>
          <li>Столовые</li>
          <li>Суши бары</li>
        </ul>

        <ul class="commercial-print__list">
          <li>Авторемонт</li>
          <li>Автомойки</li>
          <li>Шиномонтаж</li>
          <li>Заправки</li>
        </ul>  
          
        <ul class="commercial-print__list">
          <li>Парикмахерские</li>
          <li>Косметология</li>
          <li>Маникюр / Педикюр</li>
          <li>Магазины косметики</li>
          <li>Солярии</li>
        </ul>

        <ul class="commercial-print__list">
          <li>Бани и сауны</li>
          <li>Кальянные</li>
          <li>Кинотеатры</li>
          <li>Караоке бары</li>
        </ul>

        <ul class="commercial-print__list">
          <li>Аптеки</li>
          <li>Стоматологии</li>
          <li>Мед. центры</li>
          <li>Больницы</li>
          <li>Клиники</li>
        </ul>

        <ul class="commercial-print__list">
          <li>Торговые центры</li>
          <li>Продуктовые магазины</li>
          <li>Детские магазины</li>
          <li>Спортивные магазины</li>
          <li>Хозтовары</li>
          <li>Зоомагазины</li>
          <li>Магазин техники</li>
          <li>Супермаркеты</li>
          <li>Минимаркеты</li>
          <li>Гипермаркеты</li>
        </ul>  

        <ul class="commercial-print__list">
          <li>Гостиницы</li>
          <li>Турагенства</li>
          <li>Отели</li>
          <li>Хостелы</li>
          <li>Базы отдыха</li>
          <li>Зоомагазины</li>
          <li>Магазин техники</li>
        </ul>

        <ul class="commercial-print__list">
          <li>Фитнес-клубы</li>
          <li>Тренажерные залы</li>
          <li>Секции</li>
          <li>Спорткомплексы</li>
          <li>Базы отдыха</li>
        </ul>
      </div>
      <button type="button" class="commercial-print__btn commercial-print__btn--close" @click="toggleList">
        <span class="commercial-print__btn-text commercial-print__btn-text--close">Посмотреть все</span>
        <span class="commercial-print__btn-text commercial-print__btn-text--open">Скрыть</span>
      </button> 
		</div>
  </div>
</template>

<script>
export default {
  name: 'CommercialPrint',
  methods: {
    toggleList() {
      let listWrapper = document.querySelector('.commercial-print__list-wrapper');
      var toggle = document.querySelector('.commercial-print__btn');
      if (listWrapper.classList.contains('commercial-print__list-wrapper--content-hidden')) {
        listWrapper.classList.remove('commercial-print__list-wrapper--content-hidden');
        toggle.classList.remove('commercial-print__btn--close');

        toggle.blur();
      } else {
        listWrapper.classList.add('commercial-print__list-wrapper--content-hidden');
        toggle.classList.add('commercial-print__btn--close');

        toggle.blur();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .commercial-print {
    display: flex;
    justify-content: center;
    max-width: 1920px;
    margin-top: 106px;
    margin-bottom: 250px;
    padding: 60px 0;
    width: 100%;

    background: linear-gradient(106.85deg, #D73690 0%, #8E106B 99.75%);
  }

  .commercial-print__container {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    max-width: 1720px;
    width: 100%;
  }

  .commercial-print__container h2 {
    margin: 0 0 50px 0;

    font-weight: 600;
    font-size: 68px;
    line-height: 100%;
    color: #FFFFFF;
  }

  .commercial-print__list-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .commercial-print__list li {
    margin-bottom: 20px;

    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    color: #FFFFFF;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .commercial-print__btn {
    display: none;
    margin: 0 auto;

    font-family: Panton;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    text-decoration-line: underline;
    color: rgba($color: #ffffff, $alpha: 0.5);

    border: none;
    background: transparent;
    outline: none;
  }

  @media (max-width: 1919px) {
    .commercial-print {
      margin-bottom: 220px;
    }

    .commercial-print__container {
      max-width: 1400px;
    }

    .commercial-print__list li {
      font-size: 15px;
    }
  }

  @media (max-width: 1599px) {
    .commercial-print {
      margin-bottom: 180px;
      padding: 40px 0;
    }
    
    .commercial-print__container {
      max-width: 1166px;
    }

    .commercial-print__container h2 {
      font-size: 48px;
    }
  }

  @media (max-width: 1365px) {
    .commercial-print__container {
      max-width: 1120px;
    }
  }

  @media (max-width: 1199px) {
    .commercial-print {
      padding-bottom: 0;
    }
    
    .commercial-print__container {
      max-width: 688px;
    }

    .commercial-print__list-wrapper {
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    .commercial-print__list {
      margin-right: 40px;
      margin-bottom: 63px;

      &:first-child {
        margin-right: 60px;
      }

      &:nth-child(2) {
        margin-right: 110px;
      }

      &:nth-child(3) {
        margin-right: 15px;
      }

      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }

  @media (max-width: 767px) {
    .commercial-print {
      margin-bottom: 85px;
      margin-top: 72px;
      padding-bottom: 20px;
    }
    
    .commercial-print__container {
      padding: 0;
      max-width: 92vw;
    }

    .commercial-print__container h2 {
      margin-bottom: 30px;
      
      font-size: 31px;
      text-align: center;
    }

    .commercial-print__list-wrapper {
      justify-content: flex-start;
      flex-wrap: wrap;
      height: auto;
    }

    .commercial-print__list-wrapper--content-hidden {
      max-height: 250px;
      overflow-y: hidden;
    }

    .commercial-print__list {
      margin-right: 20px;
      margin-bottom: 40px;

      &:nth-child(4n) {
        margin-right: 20px;
      }

      &:first-child {
        margin-right: 20px;
      }

      &:nth-child(2) {
        margin-right: 20px;
      }

      &:nth-child(3) {
        margin-right: 0;
      }

      &:nth-child(4) {
        margin-right: 5px;
      }


      &:nth-child(5) {
        margin-right: 10px;
      }

      &:nth-child(3n) {
        margin-right: 0;
      }
    }

    .commercial-print__list li {
      font-size: 14px;
    }

    .commercial-print__btn {
      display: block;
    }

    .commercial-print__btn .commercial-print__btn-text--close {
      display: none;
    }

    .commercial-print__btn--close .commercial-print__btn-text--close {
      display: inline;
    }

    .commercial-print__btn--close .commercial-print__btn-text--open {
      display: none;
    }
  }
</style>