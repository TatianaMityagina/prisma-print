<template>
  <div class="print-gallery">
    <div class="print-gallery__container">
      <div class="print-gallery__left">
        <div class="print-gallery__left-top">
          <div class="print-gallery__photo-wrapper print-gallery__photo-wrapper--photo-1">
            <div class="print-gallery__photo-1">
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
                <button type="button" @click="showPopup = true">Хочу такой принт</button>
              </div>
            </div>
          </div>
          <div class="print-gallery__photo-wrapper print-gallery__photo-wrapper--photo-2">
            <div class="print-gallery__photo-2">
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
                <button type="button" @click="showPopup = true">Хочу такой принт</button>
              </div>
            </div>
          </div>
        </div>
        <div class="print-gallery__left-bottom">
          <div class="print-gallery__photo-wrapper print-gallery__photo-wrapper--photo-3">
            <div class="print-gallery__photo-3">
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
                <button type="button" @click="showPopup = true">Хочу такой принт</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="print-gallery__right">
        <div class="print-gallery__photo-wrapper print-gallery__photo-wrapper--photo-4">
          <div class="print-gallery__photo-4">
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
              <button type="button" @click="showPopup = true">Хочу такой принт</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal v-show="showPopup" @closepopup="showPopup = false" />
  </div>
</template>

<script>
import Modal from '../components/modal'

export default {
  name: 'PrintGallery',
  components: {
    Modal
  },
  data() {
    return {
      showPopup: false
    }
  }
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
    height: 100%;
    justify-content: flex-end;
    padding: 28px 25px 28px 30px;

    opacity: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 39.96%, #FFFFFF 100%);
  }

  .image-bg {
    background-color: transparent;
    height: 99%;
  }

  .print-gallery__photo-wrapper {
    display: flex;
    justify-content: center;

    &:hover {
      background: linear-gradient(0deg, rgba(212, 40, 136, 1) 39.96%, #FFFFFF 100%);

      .print-gallery__photo-description {
        opacity: 1;
        transition: 0.5s;
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

  .print-gallery__photo-1 {
    position: relative;
    width: 617px;
    height: 445px;

    background: url('~@/assets/img/index/index-ferris-wheel@1x.jpg') center / cover no-repeat;
  }

  .print-gallery__photo-2 {
    position: relative;
    width: 345px;
    height: 675px;

    background: url('~@/assets/img/index/index-plant@1x.jpg') center / cover no-repeat;
  }

  .print-gallery__photo-3 {
    position: relative;
    width: 828px;
    height: 348px;

    background: url('~@/assets/img/index/index-sunset@1x.jpg') center / cover no-repeat;
  }

  .print-gallery__photo-4 {
    position: relative;
    width: 405px;
    height: 678px;

    background: url('~@/assets/img/index/index-eiffel-tower@1x.jpg') center / cover no-repeat;
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
    white-space: nowrap;

    border: none;
    background: #D73690;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
      transition: 0.4s;
      background: rgb(175, 43, 118);
      box-shadow: 0px 4px 10px rgba(139, 17, 85, 0.5);
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

  @media (max-width: 1199px) {
    .print-gallery {
      padding-top: 50px;
      max-width: 688px;
    }

    .print-gallery__left-top {
      margin-bottom: 30px;
    }

    .print-gallery__left {
      margin-right: 30px;
    }

    .print-gallery__photo-1 {
      width: 257px;
      height: 185px;
    }

    .print-gallery__photo-2 {
      width: 139px;
      height: 275px;
    }

    .print-gallery__photo-3 {
      width: 337px;
      height: 141px;
    }

    .print-gallery__photo-4 {
      width: 164px;
      height: 275px;
    }

    .print-gallery__photo-wrapper {
      &--photo-1 {
        margin-right: 43px;
        width: 261px;
        height: 188px;
      }

      &--photo-2 {
        width: 143px;
        height: 278px;
      }

      &--photo-3 {
        width: 341px;
        height: 144px;
      }

      &--photo-4 {
        width: 168px;
        height: 278px;
      }
    }

    .print-gallery__table-row {
      margin-bottom: -12px;
    }

    .print-gallery__photo-description button {
      height: 24px;

      font-size: 11px;
    }
  }

  @media (max-width: 767px) {
    .print-gallery {
      padding: 100px 0 0 0;
      max-width: 92vw;
    }

    .print-gallery__container {
      position: relative;
      flex-direction: column;
    }

    .print-gallery__right {
      position: absolute;
      top: 40px;
      right: 0;
    }

    .print-gallery__left {
      width: 100%;
    }

    .print-gallery__left-top {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 30px;
    }

    .print-gallery__left {
      margin-right: 0;
    }

    .print-gallery__photo-1 {
      width: 257px;
      height: 185px;
    }

    .print-gallery__photo-2 {
      width: 139px;
      height: 275px;
    }

    .print-gallery__photo-3 {
      width: 99%;
      height: 141px;
    }

    .print-gallery__photo-4 {
      width: 164px;
      height: 275px;
    }

    .print-gallery__photo-wrapper {
      &--photo-1 {
        order: 2;
        margin: 0 auto;
        width: 261px;
        height: 188px;
      }

      &--photo-2 {
        order: 1;
        width: 143px;
        height: 278px;
        margin-bottom: 83px;
      }

      &--photo-3 {
        width: 100%;
        height: 144px;
      }

      &--photo-4 {
        width: 168px;
        height: 278px;
      }
    }

    .print-gallery__photo-description {
      padding: 15px 5px;
    }

    .print-gallery__table-parameter {
      font-size: 10px;
    }

    .print-gallery__table-field {
      font-size: 10px;
      white-space: nowrap;
    }

    .print-gallery__photo-description button {
      width: 115px;
      height: 24px;

      font-size: 11px;
    }
  }
</style>