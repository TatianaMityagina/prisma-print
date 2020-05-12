<template>
  <div class="print-place">
		<div class="print-place__container">
			<h2 class="print-place__title">УЖЕ ПРИДУМАЛИ <span>КУДА ПЕЧАТАЕМ?</span></h2>
			<div class="print-place__items">
				<div class="print-place__item">
					<div class="print-place__image-wrapper">
						<span>01</span>
						<img src="~@/assets/img/index/index-chair@1x.jpg" srcset="~@/assets/img/index/index-chair@2x.jpg 2x" alt="Photo-1" width="350" height="459">
					</div>
					<div class="print-place__item-text">
						<h3>ДОМОЙ</h3>
						<p>
							Свадебные фотографии, красивые пейзажи, двойные экспозиции, 
							полигональные иллюстрации и просто котики! 
							Вы готовы слышать: “Ах! Как атмосферно!
						</p>
					</div>
				</div>

				<div class="print-place__item print-place__item--second">
					<div class="print-place__image-wrapper print-place__image-wrapper--second">
						<span>02</span>
						<img src="~@/assets/img/index/index-office@1x.jpg" srcset="~@/assets/img/index/index-office@2x.jpg 2x" alt="Photo-2" width="350" height="459">
					</div>
					<div class="print-place__item-text print-place__item-text--second">
						<h3>КОММЕРЦИЯ</h3>
						<p>
							Меняйте корпоративную обстановку чаще. 
							Доказано - это повышает продуктивность рабочих будней. 
							С нами измениться легко - это не ремонт.
						</p>
					</div>
				</div>
			</div>     
		</div>
  </div>
</template>

<script>
export default {
  name: 'PrintPlace'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.print-place {
		display: flex;
		justify-content: center;
		padding-top: 260px;
		width: 100px;
	}

	.print-place__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.print-place__title {
		margin: 0 0 110px 0;
		width: 580px;

		font-weight: 300;
		font-size: 68px;
		line-height: 100%;
		text-align: center;
		color: #961E50;
	}

	.print-place__title span {
		font-weight: 700;
	}

	.print-place__items {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.print-place__item {
		display: flex;
		flex-direction: column;
		margin-right: 75px;

		&:last-child {
			margin-right: 0;
		}
	}

	.print-place__image-wrapper {
		position: relative;
		margin-bottom: 40px;
	}

	.print-place__image-wrapper span {
		position: absolute;
		top: -45px;
		right: -45px;

		display: flex;
		align-items: center;
		justify-content: center;
		width: 91px;
		height: 91px;

		font-family: GothamPro;
		font-weight: 300;
		font-size: 38px;
		line-height: 140%;
		color: #000000;

		background: #FFFFFF;
		box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);

		&:hover {
			color: #FFFFFF;
			background: #961E50;
			box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
			transition: 0.4s;
		}
	}

	.print-place__item-text h3 {
		margin: 0 0 20px 0;

		font-family: GothamPro;
		font-weight: bold;
		font-size: 22px;
		line-height: 140%;
		color: #961E50;
	}

	.print-place__item-text p {
		margin: 0;

		font-family: GothamPro;
		font-size: 18px;
		line-height: 140%;
		color: #343434;
	}

  @media (max-width: 1919px) {
		.print-place {
			padding-top: 280px;
		}
  }

  @media (max-width: 1599px) {
		.print-place {
			padding-top: 165px;
		}

		.print-place__title {
			margin-bottom: 60px;
			width: 410px;
			font-size: 48px;
		}

		.print-place__item {
			flex-direction: row-reverse;
			margin-right: 15px;

			&--second {
				flex-direction: row;
			}
		}

		.print-place__image-wrapper span {
			top: -35px;
			right: 10px;

			width: 70px;
			height: 70px;

			font-size: 26px;
		}

		.print-place__image-wrapper img {
			width: 234px;
			height: 348px;
		}

		.print-place__image-wrapper {
			margin: 0 0 0 50px;

			&--second{
				margin: 0 50px 0 0;
			}	
		}

		.print-place__item-text {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			padding-top: 105px;
			min-width: 270px;

			&--second {
				align-items: flex-start;
			}
		}

		.print-place__item-text h3 {
			margin-bottom: 10px;
		}

		.print-place__item-text p {
			font-size: 14px;
			text-align: end;
		}

		.print-place__item-text--second p {
			text-align: start;
		}
  }

  @media (max-width: 1365px) {
		.print-place {
			padding-top: 220px;
		}

		.print-place__image-wrapper img {
			width: 234px;
			height: 348px;
		}

		.print-place__item-text {
			padding-top: 85px;
			min-width: 190px;
		}
  }

	@media (max-width: 1199px) {
		.print-place {
			padding-top: 165px;
		}

		.print-place__title {
			margin-bottom: 80px;
		}

		.print-place__item {
			flex-direction: column;
			margin-right: 43px;

			&--second {
				flex-direction: column;
			}
		}

		.print-place__image-wrapper span {
			top: -40px;
			right: 10px;

			width: 79px;
			height: 79px;

			font-size: 26px;
		}

		.print-place__image-wrapper img {
			width: 303px;
			height: 397px;
		}

		.print-place__image-wrapper {
			margin: 0 0 32px 0;

			&--second{
				margin: 0 0 32px 0;
			}	
		}

		.print-place__item-text {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding-top: 0;
			min-width: 100%;
		}

		.print-place__item-text p {
			text-align: start;
		}
	}
	
		@media (max-width: 767px) {
		.print-place {
			padding: 120px 0 0 0;
			width: 100%;
		}

		.print-place__container {
			width: 92vw;
		}

		.print-place__title {
			width: 100%;

			font-size: 36px;
			text-align: center;
		}

		.print-place__items {
			flex-direction: column;
		}

		.print-place__item {
			align-items: center;
			width: 100%;
			margin-right: 0;
			margin-bottom: 80px;

			&:last-child {
				margin-bottom: 0;
			}
		}

		.print-place__image-wrapper span {
			top: -40px;
			right: calc(50% - 40px);
		}

		.print-place__image-wrapper {
			margin-bottom: 10px;
		}

		.print-place__image-wrapper img {
			width: 100%;
			height: 285px;
			object-fit: cover;
		}

		.print-place__item-text {
			align-items: center;
		}

		.print-place__item-text p {
			text-align: center;
		}
  }
</style>