<template>
  <div class="new-word">
		<div class="new-word__container">
			<div class="new-word__description">
				<h2>Новое слово в интерьере и экстерьере</h2>
				<p>
					Робот Художник - революционная технология росписи стен. 
					Art машина является превосходным синтезом параметров - скорости, 
					качества и цветопередачи, и современных технологий.
				</p>
				<p>
					Детальная прорисовка изображения любой сложности, 4 скорости нанесения, 
					экологически чистые краски придадут стенам экспрессии всего за несколько часов. 
					Душа ваших стен скажет вам "Спасибо!"
				</p>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'NewWord'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.new-word {
		display: flex;
		justify-content: center;
		padding: 375px 0;
		width: 100%;
    max-width: 1920px;
		overflow: hidden;

    background: url('~@/assets/img/index/index-printer@2x.png') bottom right / 1063px 1042px  no-repeat;
	}

	.new-word__container {
		display: flex;
		align-items: center;
		max-width: 1398px;
		width: 100%;
	}

	.new-word__description h2 {
		margin: 0 0 25px 0;
		width: 410px;

		font-weight: 600;
		font-size: 68px;
		line-height: 100%;
		color: #961E50;
	}

	.new-word__description p {
		width: 535px;

		font-family: GothamPro;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 140%;
		color: #000000;
		opacity: 0.6;
	}

	.new-word__image {
		margin-left: auto;
	}

  @media (max-width: 1919px) {
		.new-word {
			background-size: 987px 968px;
		}
	
		.new-word__container {
			padding: 0 20px;
			max-width: 1400px;
		}

		.new-word__image {
			width: 655px;
			height: 609px;
		}
  }

  @media (max-width: 1599px) {
		.new-word {
			padding-top: 135px;
			background-size: 752px 738px;
		}

		.new-word__container {
			max-width: 1166px;
		}

		.new-word__description h2 {
			font-size: 48px;
		}

		.new-word__description p {
			font-size: 14px;
		}

		.new-word__image {
			width: 556px;
			height: 517px;
		}
  }

  @media (max-width: 1365px) {
		.new-word {
			background-position-x: 550px;
		}

		.new-word__container {
			max-width: 1120px;
		}

		.new-word__image {
			width: 488px;
			height: 453px;
		}
  }

  @media (max-width: 1199px) {
    .new-word {
			padding: 50px 0 180px 0;
			background: url('~@/assets/img/index/index-printer-768@1x.png') bottom right / 438px 630px  no-repeat;
			background-position-x: right;
		}

		.new-word__container {
			max-width: 688px;
		}

    .new-word__description {
      max-width: 322px;
    }

    .new-word__description h2 {
			width: 99%;
      font-size: 36px;
		}

		.new-word__description p {
			width: 100%;
		}

		.new-word__image {
			width: 376px;
			height: 400px;
		}
	}
	
	@media (max-width: 767px) {
    .new-word {
			padding-top: 0;
			padding-bottom: 338px;
			background: url('~@/assets/img/index/index-printer@2x.png') bottom center / 100% 368px  no-repeat;
		}

		.new-word__container {
			flex-direction: column;
			align-items: center;
			padding: 0;
			max-width: 92vw;
		}

    .new-word__description {
			flex-direction: column;
			align-items: center;
      max-width: 100%;
    }

    .new-word__description h2 {
			width: 100%;
			margin-bottom: 40px;
      text-align: center;
		}

		.new-word__description p {
			margin-bottom: 25px;
			text-align: center;
		}

		.new-word__image {
			width: 100%;
			height: 302px;
		}
  }
</style>