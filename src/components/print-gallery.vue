<template>
  <div class="print-gallery">
    <div class="print-gallery__container">
      <div class="print-gallery__left">
        <div class="print-gallery__left-top">
          <div class="print-gallery__photo-wrapper">
            <img class="print-gallery__photo-1" src="~@/assets/img/index/index-ferris-wheel@1x.jpg" srcset="~@/assets/img/index/index-ferris-wheel@2x.jpg 2x" alt="Ferris wheel" width="621" height="448">
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
          <img class="print-gallery__photo-2" src="~@/assets/img/index/index-plant@1x.jpg" srcset="~@/assets/img/index/index-plant@2x.jpg 2x" alt="Plant" width="349" height="678">
        </div>
        <div class="print-gallery__left-bottom">
          <img class="print-gallery__photo-3" src="~@/assets/img/index/index-sunset@1x.jpg" srcset="~@/assets/img/index/index-sunset@2x.jpg 2x" alt="Sunset" width="832" height="351">
        </div>
      </div>
      <div class="print-gallery__right">
        <img class="print-gallery__photo-4" src="~@/assets/img/index/index-eiffel-tower@1x.jpg" srcset="~@/assets/img/index/index-eiffel-tower@2x.jpg 2x" alt="Eiffel tower" width="409" height="682">
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
    width: 100% ;
  }

  .print-gallery__photo-wrapper {
    position: relative;
    margin-right: 86px;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 39.96%, #FFFFFF 100%);
  }

  .print-gallery__photo-description {
    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 25px 25px 30px;
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

  .print-gallery__table-row {
    display: flex;
    align-items: center;
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
      width: 549px;
      height: 396px;
    }

    .print-gallery__photo-2 {
      width: 308px;
      height: 599px;
    }

    .print-gallery__photo-3 {
      width: 735px;
      height: 310px;
    }

    .print-gallery__photo-4 {
      width: 361px;
      height: 603px;
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
      width: 455px;
      height: 328px;
    }

    .print-gallery__photo-2 {
      width: 249px;
      height: 484px;
    }

    .print-gallery__photo-3 {
      width: 594px;
      height: 251px;
    }

    .print-gallery__photo-4 {
      width: 292px;
      height: 487px;
    }
  }

  @media (max-width: 1365px) {
    .print-gallery {
      padding-top: 215px;
      max-width: 1000px;
    }

    .print-gallery__left-top {
      margin-bottom: 45px;
    }

    .print-gallery__photo-wrapper {
      margin-right: 63px;
    }

    .print-gallery__left {
      margin-right: 45px;
    }

    .print-gallery__photo-1 {
      width: 389px;
      height: 280px;
    }

    .print-gallery__photo-2 {
      width: 213px;
      height: 414px;
    }

    .print-gallery__photo-3 {
      width: 508px;
      height: 215px;
    }

    .print-gallery__photo-4 {
      width: 250px;
      height: 416px;
    }
  }
</style>