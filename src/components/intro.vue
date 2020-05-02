<template>
  <div class="intro">
		<div class="intro__container">
      <img class="intro__triangle" src="~@/assets/img/index-intro-logo.svg" alt="Логотип Risma Print" width="528" height="421">      
      <img class="intro__logo-text" src="~@/assets/img/index-intro-text.svg" alt="Логотип Risma Print" width="455" height="94">      
		</div>
  </div>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .intro {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .intro__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
    max-width: 1320px;
    width: 100%;

    background: url('~@/assets/img/index-intro-triangle.svg') center / cover no-repeat;
  }

  .intro__triangle {
    margin-bottom: 38px;
  }

  @media (max-width: 1919px) {
    .intro__container {
      padding-top: 50px;
      max-width: 1134px;
    }
    .intro__triangle {
      padding-top: 50px;
    }

    .intro__logo-text {
      width: 450px;
      height: 80px;
    }
  }

  @media (max-width: 1599px) {
    .intro__container {
      padding: 80px 0 150px 0;
      max-width: 1130px;
    }

    .intro__triangle {
      margin-bottom: 25px;
      padding-top: 0;
      width: 345px;
      height: 275px;
    }

    .intro__logo-text {
      width: 290px;
      height: 50px;
    }
  }

  @media (max-width: 1365px) {
    .intro__container {
      max-width: 960px;

      background: url('~@/assets/img/index-intro-triangle.svg') center / contain no-repeat;
    }
  }
</style>