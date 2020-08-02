<template>
  <div class="video-intro">
		<div class="video-intro__container">   
      <video class="video-intro__video" width="550" height="350" loop controls>
        <source src="/video/printer.webm" type="video/webm">
        <source src="/video/printer.mp4" type="video/mp4">
        Ваш браузер не поддерживает видеотеги.
      </video>  
		</div>
  </div>
</template>

<script>
export default {
  name: 'VideoIntro'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .video-intro {
    display: flex;
    justify-content: center;
    padding-top: 100px;
    width: 100%;
  }

  .video-intro__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 150px 0 150px 0;
    max-width: 1320px;
    width: 100%;

    background: url('~@/assets/img/index-intro-triangle.svg') center / cover no-repeat;
  }

  .video-intro__video {
    outline: none;
  }

  @media (max-width: 1919px) {
    .video-intro__container {
      padding: 100px 0 150px 0;
      max-width: 1134px;
    }
  }

  @media (max-width: 1599px) {
    .video-intro__container {
      padding: 80px 0 150px 0;
      max-width: 1130px;
    }
  }

  @media (max-width: 1365px) {
    .video-intro__container {
      max-width: 960px;

      background: url('~@/assets/img/index-intro-triangle.svg') center / cover no-repeat;
    }
  }

   @media (max-width: 767px) {
    .video-intro__container {
      padding-top: 60px;
      max-width: 92vw;

      background: url('~@/assets/img/index-intro-triangle-mobile.svg') center / cover no-repeat;
    }

    .video-intro__video {
      width: 100%;
      height: auto;
    }
  }
</style>