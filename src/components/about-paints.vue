<template>
  <div class="about-paints">
		<div class="about-paints__container">     
      <img class="about-paints__image" src="~@/assets/img/index/index-colorfull@1x.jpg" srcset="~@/assets/img/index/index-colorfull@2x.jpg 2x" alt="Photo-paints" width="1094" height="608"> 
			<div class="about-paints__description">
				<h2>Без использования токсичных красок</h2>
				<p>
					Чернила изготовлены из европейских компонентов 
					и держатся до 10 лет. Имеют запах во время печати, 
					но не токсичны. Запах выветривается в течение первых 
					2 часов после печати. Высыхают в процессе нанесения. 
					Высокая плотность и широкая цветовая гамма обеспечивают 
					богатые, чистые оттенки, даже если это оттенки золотого.
				</p>
			</div>     
		</div>
  </div>
</template>

<script>
export default {
  name: 'AboutPaints'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.about-paints {
		padding-top: 205px;
		max-width: 1920px;
		width: 100%;
	}

	.about-paints__container {
		display: flex;
		align-items: center;
		width: 100%;
	}

	.about-paints__image {
		margin-right: 40px;
	}

	.about-paints__description {
		max-width: 666px;
	}

	.about-paints__description h2 {
		margin: 0 0 25px 0;
		width: 510px;

		font-weight: 600;
		font-size: 68px;
		line-height: 100%;
		color: #961E50;
	}

	.about-paints__description p {
		margin: 0;
		width: 470px;

		font-family: GothamPro;
		font-size: 18px;
		line-height: 140%;
		color: #343434;
	}

  @media (max-width: 1919px) {
		.about-paints {
			padding-top: 280px;
		}

		.about-paints__image {
			width: 907px;
		}
  }

  @media (max-width: 1599px) {
		.about-paints {
			padding-top: 187px;
		}

		.about-paints__image {
			margin-right: 35px;
			width: 771px;
			height: 516px;
			object-fit: cover;
		}

		.about-paints__description {
			max-width: 440px;
		}

		.about-paints__description h2 {
			width: 390px;
			font-size: 48px;
		}

		.about-paints__description p {
			width: 100%;
			font-size: 14px;
		}
  }

  @media (max-width: 1365px) {
		.about-paints {
			padding-top: 98px;
		}

		.about-paints__image {
			margin-right: 18px;
			width: 730px;
			height: 452px;
		}

		.about-paints__description {
			max-width: 390px;
		}
  }

	@media (max-width: 1199px) {
    .about-paints {
			padding-top: 138px;
		}

		.about-paints__image {
			margin-right: 15px;
			width: 294px;
			height: 652px;
		}

		.about-paints__description {
			max-width: 400px;
		}
	}
	
	@media (max-width: 767px) {
    .about-paints {
			padding: 120px 0 0 0;
		}

		.about-paints__container {
			flex-direction: column;
		}

		.about-paints__image {
			margin-right: 0;
			margin-bottom: 20px;
			width: 100%;
			height: 230px;
		}

		.about-paints__description {
			display: flex;
			flex-direction: column;
			align-items: center;
			max-width: 92vw;
		}

		.about-paints__description h2 {
			width: 80%;
			margin: 0 0 20px 0;

			font-size: 36px;
			text-align: center;
		}

		.about-paints__description p {
			text-align: center;
		}
  }
</style>