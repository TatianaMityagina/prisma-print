<template>
  <div class="print-gallery">
    <div class="print-gallery__container">
      <div class="print-gallery__left">
        <div class="print-gallery__left-top">
          <div class="print-gallery__photo-wrapper print-gallery__photo-wrapper--photo-1">
            <img class="print-gallery__photo-1" src="~@/assets/img/index/index-ferris-wheel@1x.jpg" srcset="~@/assets/img/index/index-ferris-wheel@2x.jpg 2x" alt="Ferris wheel" width="617" height="445">
            <div class="print-gallery__photo-description">
              <table class="print-gallery__table">
                <tbody>
                  <tr class="print-gallery__table-row">
                    <td class="print-gallery__table-parameter">Напечатаем:</td>
                    <td class="print-gallery__table-field">за 2 часа</td>
                  </tr>
                  <tr class="print-gallery__table-row">
                    <td class="print-gallery__table-parameter">Размер:</td>
                    <td class="print-gallery__table-field">185*120см</td>
                  </tr>
                  <tr class="print-gallery__table-row">
                    <td class="print-gallery__table-parameter">Стоимость:</td>
                    <td class="print-gallery__table-field">2000 рублей</td>
                  </tr>
                </tbody>
              </table>
              <button type="button">Хочу такой принт</button>
            </div>
          </div>
          <div class="print-gallery__photo-wrapper print-gallery__photo-wrapper--photo-2">
            <img class="print-gallery__photo-2" src="~@/assets/img/index/index-plant@1x.jpg" srcset="~@/assets/img/index/index-plant@2x.jpg 2x" alt="Plant" width="345" height="675">
            <div class="print-gallery__photo-description">
              <table class="print-gallery__table">
                <tbody>
                  <tr class="print-gallery__table-row">
                    <td class="print-gallery__table-parameter">Напечатаем:</td>
                    <td class="print-gallery__table-field">за 2 часа</td>
                  </tr>
                  <tr class="print-gallery__table-row">
                    <td class="print-gallery__table-parameter">Размер:</td>
                    <td class="print-gallery__table-field">185*120см</td>
                  </tr>
                  <tr class="print-gallery__table-row">
                    <td class="print-gallery__table-parameter">Стоимость:</td>
                    <td class="print-gallery__table-field">2000 рублей</td>
                  </tr>
                </tbody>
              </table>
              <button type="button">Хочу такой принт</button>
            </div>
          </div>
        </div>
        <div class="print-gallery__left-bottom">
          <div class="print-gallery__photo-wrapper print-gallery__photo-wrapper--photo-3">
            <img class="print-gallery__photo-3" src="~@/assets/img/index/index-sunset@1x.jpg" srcset="~@/assets/img/index/index-sunset@2x.jpg 2x" alt="Sunset" width="828" height="348">
            <div class="print-gallery__photo-description">
              <table class="print-gallery__table">
                <tbody>
                  <tr class="print-gallery__table-row">
                    <td class="print-gallery__table-parameter">Напечатаем:</td>
                    <td class="print-gallery__table-field">за 2 часа</td>
                  </tr>
                  <tr class="print-gallery__table-row">
                    <td class="print-gallery__table-parameter">Размер:</td>
                    <td class="print-gallery__table-field">185*120см</td>
                  </tr>
                  <tr class="print-gallery__table-row">
                    <td class="print-gallery__table-parameter">Стоимость:</td>
                    <td class="print-gallery__table-field">2000 рублей</td>
                  </tr>
                </tbody>
              </table>
              <button type="button">Хочу такой принт</button>
            </div>
          </div>
        </div>
      </div>
      <div class="print-gallery__right">
        <div class="print-gallery__photo-wrapper print-gallery__photo-wrapper--photo-4">
          <img class="print-gallery__photo-4" src="~@/assets/img/index/index-eiffel-tower@1x.jpg" srcset="~@/assets/img/index/index-eiffel-tower@2x.jpg 2x" alt="Eiffel tower" width="405" height="678">
          <div class="print-gallery__photo-description">
            <table class="print-gallery__table">
              <tbody>
                <tr class="print-gallery__table-row">
                  <td class="print-gallery__table-parameter">Напечатаем:</td>
                  <td class="print-gallery__table-field">за 2 часа</td>
                </tr>
                <tr class="print-gallery__table-row">
                  <td class="print-gallery__table-parameter">Размер:</td>
                  <td class="print-gallery__table-field">185*120см</td>
                </tr>
                <tr class="print-gallery__table-row">
                  <td class="print-gallery__table-parameter">Стоимость:</td>
                  <td class="print-gallery__table-field">2000 рублей</td>
                </tr>
              </tbody>
            </table>
            <button type="button">Хочу такой принт</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrintGallery'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .print-gallery {
    display: flex;
    overflow: hidden;
    justify-content: flex-end;
    padding: 190px 20px 0 20px;
    max-width: 1720px;
    width: 100%;
  }

  .print-gallery__container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }

  .print-gallery__left {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 74px;
    max-width: 1056px;
    width: 100%;
  }

  .print-gallery__left-top {
    display: flex;
    align-items: center;
    margin-bottom: 75px;
  }

  .print-gallery__left-bottom {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .print-gallery__photo-description {
    position: absolute;
    z-index: 2;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 25px 28px 30px;

    opacity: 0;
  }

  .print-gallery__photo-wrapper {
    position: relative;

    display: flex;
    justify-content: center;

    &::after {
      position: absolute;
      z-index: 1;
      content: "";
      top: 0;
      left: 2px;
      right: 2px;

      display: none;
      width: calc(100% -2.2px);
      height: 99.4%;

      background-color: rgba($color: #ffffff, $alpha: 0.5);
    }

    &:hover {
      background: linear-gradient(0deg, rgba(212, 40, 136, 1) 39.96%, #FFFFFF 100%);

      .print-gallery__photo-description {
        opacity: 1;
        transition: 0.5s;
      }

      &::after {
        display: block;
      }
    }

    &--photo-1 {
      margin-right: 86px;
      width: 621px;
      height: 448px;
    }

    &--photo-2 {
      width: 349px;
      height: 678px;
    }

    &--photo-3 {
      width: 832px;
      height: 351px
    }

    &--photo-4 {
      width: 409px;
      height: 682px;
    }
  }

  .print-gallery__photo-description button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 152px;
    height: 32px;

    font-family: GothamPro;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #FFFFFF;

    border: none;
    background: #D73690;
    border-radius: 20px;

     &:hover {
      filter: contrast(110%);
      transition: 0.4s;
    }
  }

  .print-gallery__table {
    margin-bottom: 15px;
  }

  .print-gallery__table-row {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .print-gallery__table-parameter {
    margin-right: 5px;

    font-family: GothamPro;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 140%;
    color: #A30E4C;
  }

  .print-gallery__table-field {
    font-family: GothamPro;
    opacity: 0.9;
  }

  @media (max-width: 1919px) {
    .print-gallery {
      display: flex;
      justify-content: center;
      padding-top: 280px;
      max-width: 1400px;
    }

    .print-gallery__left {
      margin-right: 65px;
    }

    .print-gallery__photo-1 {
      width: 545px;
      height: 393px;
    }

    .print-gallery__photo-2 {
      width: 304px;
      height: 596px;
    }

    .print-gallery__photo-3 {
      width: 731px;
      height: 307px;
    }

    .print-gallery__photo-4 {
      width: 358px;
      height: 600px;
    }

    .print-gallery__photo-wrapper {
      &--photo-1 {
        width: 549px;
        height: 396px;
      }

      &--photo-2 {
        width: 308px;
        height: 599px;
      }

      &--photo-3 {
        width: 735px;
        height: 310px;
      }

      &--photo-4 {
        width: 361px;
        height: 603px
      }
    }
  }

  @media (max-width: 1599px) {
    .print-gallery {
      display: flex;
      justify-content: center;
      padding-top: 170px;
      max-width: 1168px;
    }

    .print-gallery__left-top {
      margin-bottom: 55px;
    }

    .print-gallery__left {
      margin-right: 53px;
    }

    .print-gallery__table-parameter {
      font-size: 14px;
    }

    .print-gallery__table-field {
      font-size: 14px;
    }

    .print-gallery__photo-description {
      padding: 15px;
    }

    .print-gallery__photo-description button {
      width: 134px;
      height: 28px;

      font-size: 12px;
    }

    .print-gallery__photo-1 {
      width: 451px;
      height: 325px;
    }

    .print-gallery__photo-2 {
      width: 245px;
      height: 481px;
    }

    .print-gallery__photo-3 {
      width: 590px;
      height: 248px;
    }

    .print-gallery__photo-4 {
      width: 288px;
      height: 484px;
    }

    .print-gallery__photo-wrapper {
      &--photo-1 {
        width: 455px;
        height: 328px;
      }

      &--photo-2 {
        width: 249px;
        height: 484px;
      }

      &--photo-3 {
        width: 594px;
        height: 251px;
      }

      &--photo-4 {
        width: 292px;
        height: 487px;
      }
    }
  }

  @media (max-width: 1365px) {
    .print-gallery {
      padding-top: 215px;
      max-width: 1120px;
    }

    .print-gallery__table-parameter {
      font-size: 12px;
    }

    .print-gallery__table-field {
      font-size: 12px;
    }

    .print-gallery__left-top {
      margin-bottom: 45px;
    }

    .print-gallery__left {
      margin-right: 51px;
    }

    .print-gallery__photo-1 {
      width: 434px;
      height: 313px;
    }

    .print-gallery__photo-2 {
      width: 236px;
      height: 463px
    }

    .print-gallery__photo-3 {
      width: 567px;
      height: 238px;
    }

    .print-gallery__photo-4 {
      width: 277px;
      height: 466px;
    }

    .print-gallery__photo-wrapper {
      &--photo-1 {
        margin-right: 71px;
        width: 438px;
        height: 316px;
      }

      &--photo-2 {
        width: 240px;
        height: 466px
      }

      &--photo-3 {
        width: 571px;
        height: 241px;
      }

      &--photo-4 {
        width: 281px;
        height: 469px;
      }
    }
  }
</style>