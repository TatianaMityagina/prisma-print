<template>
  <div class="video-intro">
		<div class="video-intro__container">   
      <video class="video-intro__video" preload autoplay loop muted>
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
    padding-top: 50px;
    width: 100%;
  }

  .video-intro__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .video-intro__video {
    width: 100%;
    height: auto;
    outline: none;
  }

  @media (max-width: 1199px) {
		.video-intro {
      padding-bottom: 100px;
    }
  }


  @media (max-width: 767px) {
		.video-intro {
      padding-top: 100px;
    }
  }
</style>