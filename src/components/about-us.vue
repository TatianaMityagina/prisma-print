<template>
  <div class="about-us">
		<div class="about-us__container">
      <img class="about-us__triangle" src="~@/assets/img/index-intro-logo.svg" alt="Логотип Risma Print" width="364" height="290">      
      <img class="about-us__logo-text" src="~@/assets/img/index-intro-text.svg" alt="Логотип Risma Print" width="314" height="65">      		
      <p>
        Призмапринт - это компания развивающая роспись стен  цифровой культурной эпохи. 
        Мы не меньше художников вкладываем душу в наши работы. 
        С нашим портфолио можно ознакомиться на нашем канале <a class="youtube" href="https://www.youtube.com/">YouTube</a>, 
        на сайте <a class="site" href="https://www.prismaprint.ru/">prismaprint.ru</a> и в Инстаграм <a class="insta" href="https://www.instagram.com/">@prismaprint_</a>
        Настенный принтер может перенести любой фотомомент на любую вертикальную поверхность 
        с помощью экологически чистых ультрафиолетовых красок. Категории наших клиентов 
        ограничиваются фантазией. Мы работаем для полной аудитории - от детской спальни до 
        графити на уличной бетонной стене.
      </p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'about-us'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .about-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0 114px 0;
    width: 100%;
  }

  .about-us__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 150px 20px 0 20px;
    width: 100%;

    background: url('~@/assets/img/index-intro-triangle.svg') center / cover no-repeat;
  }

  .about-us__triangle {
    margin-bottom: 38px;
  }

  .about-us__logo-text {
    margin-bottom: 70px;
  }

  .about-us__container p {
    margin: 0;
    max-width: 1205px;

    font-size: 36px;
    line-height: 150%;
    text-align: center;
    color: rgba($color: #000000, $alpha: 0.8);
  }

  .about-us__container a {
    text-decoration: none;
    padding-bottom: 1px;
  }

  .youtube {
    color: #B21112;
    border-bottom: 1px solid #B21112;

    &:hover {
      transition: 0.4s;
      color: rgb(221, 74, 74);
      border-bottom: 1px solid rgb(221, 74, 74);
    }
  }

  .site {
    color: #218ACD;
    border-bottom: 1px solid #218ACD;

    &:hover {
      transition: 0.4s;
      color: rgb(40, 164, 241);
      border-bottom: 1px solid rgb(40, 164, 241);
    }
  }

  .insta {
    color: #D42888;
    border-bottom: 1px solid #D42888;

    &:hover {
      transition: 0.4s;
      color: rgb(189, 10, 108);
      border-bottom: 1px solid rgb(189, 10, 108);
    }
  }

  @media (max-width: 1919px) {
    .about-us__container {
      padding-top: 50px;
    }
    .about-us__triangle {
      padding-top: 50px;
      margin-bottom: 20px;
    }

    .about-us__logo-text {
      width: 300px;
      height: 60px;
    }

    .about-us__container p {
      font-size: 28px;
    }
  }

  @media (max-width: 1599px) {
    .about-us__triangle {
      margin-bottom: 25px;
      padding-top: 0;
      width: 345px;
      height: 275px;
    }

    .about-us__logo-text {
      width: 300px;
      height: 61px;
    }

    .about-us__container p {
      font-size: 22px;
    }
  }

  @media (max-width: 1365px) {
    .about-us__container p {
      max-width: 1080px;
    }
  }

  @media (max-width: 1199px) {
    .about-us__container p {
      max-width: 520px;
    }
  }

  @media (max-width: 767px) {
    .about-us__container {
      max-width: 92vw;
      padding: 65px 0 0 0;

      background: url('~@/assets/img/about-triangle-mobile.svg') top / contain no-repeat;
    }

    .about-us__triangle {
      margin-bottom: 15px;
      width: 258px;
      height: 205px;
    }

    .about-us__logo-text {
      width: 225px;
      height: 46px;
    }

    .about-us__container p {
      max-width: 100%;
      font-size: 20px;
    }
  }
</style>