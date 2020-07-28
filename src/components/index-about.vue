<template>
  <div class="index-about">
		<div class="index-about__container">
			<h2>Мы делаем это с любовью</h2>
      <div class="index-about__list">
        <div class="index-about__item index-about__item--first">
				<img src="~@/assets/img/index/index-dialog@1x.jpg" srcset="~@/assets/img/index/index-dialog@2x.jpg 2x" alt="Photo-1" width="409" height="678">
				<p>
					Мы мобильны и любим украшать мир. 
          Выехать в любую точку Краснодарского края, 
          чтобы сделать ваш интерьер ярче, красивее и уникальней- легко! 
          Даже если ваша поверхность за пределами Кубани, мы знаем как решить этот вопрос. 
				</p>
			</div>

			<div class="index-about__item index-about__item--second">
				<p>
					Наши дизайнеры разработают принт на вашу стену за вас, если ваша муза в отпуске.
        </p>
        <p>
          Оригинальность, полностью интегрированная в ваш интерьер. 
          Мы вместе добьемся ощущения абсолютного слияния и уместности росписи стен в интерьере.
        </p>
				<img src="~@/assets/img/index/index-men@1x.jpg" srcset="~@/assets/img/index/index-men@2x.jpg 2x" alt="Photo-2" width="409" height="678">
			</div>

			<div class="index-about__item index-about__item--third">
				<img src="~@/assets/img/index/index-lamp@1x.jpg" srcset="~@/assets/img/index/index-lamp@2x.jpg 2x" alt="Photo-3" width="409" height="678">
				<p>
					Наша принципиальная позиция - индивидуальный подход. 
          Наше кредо - быстро, чисто, детально, профессионально.
				</p>
			</div>
      </div>
			
		</div>
  </div>
</template>

<script>
export default {
  name: 'IndexAbout'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.index-about {
		display: flex;
		justify-content: center;
		padding-top: 220px;
    max-width: 1400px;
		width: 100%;
	}

	.index-about__container {
		width: 100%;
	}

  .index-about__container h2 {
		margin: 0 0 70px 0;
		width: 595px;

		font-weight: 600;
		font-size: 68px;
		line-height: 100%;
		text-transform: uppercase;
		color: #961E50;
	}

  .index-about__list {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .index-about__item {
    max-width: 409px;

    &--third {
      padding-top: 62px;
    }
  }

  .index-about__item p {
    margin: 0;

    font-family: GothamPro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    color: rgba($color: #000000, $alpha: 0.6);
  }

  .index-about__item--first p {
    padding-top: 35px;
  }

  .index-about__item--second p {
    margin-bottom: 20px;
  }

  .index-about__item--third p {
    padding-top: 35px;
  }

  @media (max-width: 1919px) {
    .index-about {
			padding: 250px 20px 0 20px;
		}
  }

  @media (max-width: 1599px) {
    .index-about {
			padding-top: 170px;
			max-width: 1166px;
		}

    .index-about__container h2 {
      margin-bottom: 40px;

      font-size: 48px;
    }

    .index-about__item {
      max-width: 337px;

      &--third {
        padding-top: 52px;
      }
    }

    .index-about__item img {
      width: 337px;
      height: 453px;
      object-fit: cover;
    }

    .index-about__item p {
      font-size: 14px;
    }

    .index-about__item--first p {
      padding-top: 20px;
    }

    .index-about__item--third p {
      padding-top: 20px;
    }
  }

  @media (max-width: 1365px) {
    .index-about {
			padding-top: 225px;
			max-width: 1120px;
		}

    .index-about__item {
      max-width: 323px;

      &--third {
        padding-top: 52px;
      }
    }

    .index-about__item img {
      width: 323px;
      height: 435px;
    }

    .index-about__item p {
      font-size: 14px;
    }

    .index-about__item--first p {
      padding-top: 20px;
    }

    .index-about__item--third p {
      padding-top: 20px;
    }
  }

   @media (max-width: 1199px) {
    .index-about {
			padding-top: 155px;
			max-width: 688px;
		}

    .index-about__container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .index-about__container h2 {
      width: 405px;
      text-align: center;
    }

    .index-about__item {
      max-width: 194px;

      &--third {
        padding-top: 52px;
      }
    }

    .index-about__item img {
      width: 194px;
      height: 300px;
    }

    .index-about__item--first p {
      padding-top: 20px;
    }

    .index-about__item--third p {
      padding-top: 20px;
    }
  }

  @media (max-width: 767px) {
    .index-about {
			padding: 155px 0 0 0;
			max-width: 92vw;
		}

    .index-about__container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .index-about__container h2 {
      margin-bottom: 80px;
      width: 90%;

      font-size: 36px;
    }

    .index-about__list {
      position: relative;
      flex-direction: column;
      width: 100%;
    }

    .index-about__item {
      max-width: 165px;

      &--first {
        order: 2;
        padding-top: 40px;
      }

      &--second {
        position: absolute;
        top: 123px;
        right: 0;
      }

      &--third {
        order: 1;
        padding-top: 0;
      }
    }

    .index-about__item img {
      width: 165px;
      height: 256px;
    }

    .index-about__item p {
      font-size: 13px;
    }
  }
</style>