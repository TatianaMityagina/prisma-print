<template>
  <div class="new-word">
		<div class="new-word__container">
			<div class="new-word__description">
				<h2>Новое слово в интерьере и экстерьере</h2>
				<p>
					Если вы находитесь на этом сайте, то вы 
					сделали первый шаг к изменению вашего интерьера. 
					Отныне он никогда не будет прежним
				</p>
				<p>
					Теперь просто отпустите свое воображение и вслух
					представьте нам свою идею, и вы станете обладателем 
					самого уникального интерьера, украшенного печатью 
					от самого быстрого и инновационного принтера для 
					настенных росписей, картин, фотографий, надписей или логотипов.
				</p>
			</div>
			<img class="new-word__image" src="~@/assets/img/index/index-sofa@1x.jpg" srcset="~@/assets/img/index/index-sofa@2x.jpg 2x" alt="Sofa" width="744" height="690">
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
		padding-top: 375px;
		width: 100%;
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
		width: 549px;

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
			padding-top: 175px;
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
		}

		.new-word__container {
			align-items: flex-start;
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
		.new-word__container {
			max-width: 1120px;
		}

		.new-word__description p {
			width: 390px;
		}

		.new-word__image {
			width: 488px;
			height: 453px;
		}
  }
</style>