<template>
  <div class="video-intro">
		<div class="video-intro__container">   
      <video class="video-intro__video" preload autoplay loop :muted="muted">
        <source src="/video/printer.webm" type="video/webm">
        <source src="/video/printer.mp4" type="video/mp4">
        Ваш браузер не поддерживает видеотеги.
      </video>  
      <button class="video-intro__btn-sound" type="button" @click="muted = !muted">sound 
        <span v-if="muted">on</span>
        <span v-else>off</span>
      </button>
		</div>
  </div>
</template>

<script>
export default {
  name: 'VideoIntro',
  data(){
    return {
      muted: true
    }
  }
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
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .video-intro__btn-sound {
    position: absolute;
    bottom: 40px;
    right: 50px;

    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    text-transform: uppercase;
    color: #961E50;

    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .video-intro__video {
    width: 100%;
    height: auto;
    outline: none;
  }

  @media (max-width: 1599px) {
    .video-intro__btn-sound {
      right: 30px;
      bottom: 30px;
      font-size: 16px;
    }
  }

  @media (max-width: 1199px) {
		.video-intro {
      padding-bottom: 100px;
    }

    .video-intro__btn-sound {
      font-size: 14px;
    }
  }

  @media (max-width: 767px) {
		.video-intro {
      padding-top: 100px;
    }

    .video-intro__btn-sound {
      right: 10px;
      bottom: 10px;
      font-size: 12px;
    }
  }
</style>