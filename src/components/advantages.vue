<template>
  <div class="advantages">
		<div class="advantages__container">
			<h2>Преимущества вертикальной печати</h2>
			<div class="advantages__list">
				<div class="advantages__item">
					<span>01</span>
					<h3>Печать на любой поверхности</h3>
					<p>
						Стекло, шткукатурка, металл, обои, 
						керамическая плитка, дерево и многое другое - 
						принтер печатает на любой вертикальной поверхности.
					</p>
				</div>

				<div class="advantages__item">
					<span>02</span>
					<h3>Без использования токсичных красок</h3>
					<p>
						Специально разработанные краски держатся  до 10 лет, 
						но и совершенно не имеют запаха, не токсичны. 
						За фреской легко ухаживать - просто смахните пыль влажной микрофиброй.
					</p>
				</div>

				<div class="advantages__item">
					<span>03</span>
					<h3>Устойчивость и долговечность</h3>
					<p>
						Изображение нанесенное  с помощью технологии 
						ультрафиолета высыхает моментально и надолго сохраняет сочность и яркость красок.
					</p>
				</div>

				<div class="advantages__item">
					<span>04</span>
					<h3>Высокая степень детализации</h3>
					<p>
						Мы не полагаемся на глазомер художника и 
						его предварительную разметку  - принтер 
						печатает рисунок любой сложности с безупречной точностью.
					</p>
				</div>

				<div class="advantages__item">
					<span>05</span>
					<h3>Чистота во время<br> печати</h3>
					<p>
						После себя мы оставляем только один след- роскошную иллюстрацию. 
						Следы краски на полу и мусор- это не про нас. Время сборки перед печатью - до 20 минут.
					</p>
				</div>

				<div class="advantages__item">
					<span>06</span>
					<h3>Высокая скорость печати</h3>
					<p>
						Наша прерогатива- скорость. 4 режима печати. 
						Это  позволяет наносить  рисунок на поверхность со скоростью 2.5 м<sup>2</sup> в 1 час.
					</p>
				</div>

				<div class="advantages__item">
					<span>07</span>
					<h3>Это не дорого</h3>
					<p>
						Какое-то время назад роспись стен в интерьере стоила больших денег. 
						Сегодня, благодаря появлению новых технологий и с применением более 
						дешевых и более качественных материалов этот вид художественного искусства доступен любому бюджету.
					</p>
				</div>

				<div class="advantages__item">
					<span>08</span>
					<h3>Печать белым цветом</h3>
					<p>
						Это уникальная возможность Art машины Призмапринт. 
						Перекрыть темную основу поверхности с сохранением 
						чистоты базовых оттенков возможно без дополнительных усилий.
					</p>
				</div>

				<div class="advantages__item">
					<span>09</span>
					<h3>Легкий уход</h3>
					<p>
						Готовый принт не  боится влажной уборки, его можно  протирать и мыть.
					</p>
				</div>
			</div>
		</div>
		
  </div>
</template>

<script>
export default {
  name: 'Advantages'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.advantages {
		display: flex;
		justify-content: center;
		padding-top: 290px;
		width: 100%;

		background-image: url('~@/assets/img/index/bg-triangle-advantages.svg');
		background-repeat: no-repeat;
		background-size: 100%;
	}

	.advantages__container {
		max-width: 1400px;
		width: 100%;
	}

	.advantages__container h2 {
		margin: 0 0 70px 0;
		width: 940px;

		font-weight: 600;
		font-size: 68px;
		line-height: 100%;
		text-transform: uppercase;
		color: #961E50;
	}

	.advantages__list {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}

	.advantages__item {
		max-width: 410px;
		margin-right: auto;
		margin-bottom: 65px;

		&:nth-child(3n) {
			margin-right: 0;
		}

		&:hover {
			span {
				color: #FFFFFF;
				background: #961E50;
				box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
				transition: 0.4s;
			}
		}
	}

	.advantages__item span {
		display: flex;
		align-items: center;
		justify-content: center;	
		margin: 0 0 25px 0;
		width: 91px;
		height: 91px;

		font-family: GothamPro;
		font-weight: 300;
		font-size: 38px;
		line-height: 80%;
		text-align: center;
		color: #961E50;

		background: #FFFFFF;
		box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
	}

	.advantages__item h3 {
		margin: 0 0 10px 0;
		font-weight: 600;
		font-size: 36px;
		line-height: 100%;
		color: #961E50;
	}

	.advantages__item p {
		font-size: 18px;
		line-height: 150%;
		color: rgba(0, 0, 0, 0.6);
	}

	.advantages__item sup {
		line-height: 80%;
	}

  @media (max-width: 1919px) {
		.advantages {
			padding: 280px 20px 0 20px;
		}
  }

  @media (max-width: 1599px) {
		.advantages {
			padding-top: 170px;
			max-width: 1166px;
		}

		.advantages__container h2 {
			margin-bottom: 40px;
			width: 651px;

			font-size: 48px;
		}

		.advantages__item {
			margin-bottom: 30px;
			max-width: 365px;
		}

		.advantages__item span {
			margin-bottom: 15px;
			width: 70px;
			height: 70px;

			font-size: 26px;
		}

		.advantages__item h3 {
			font-size: 33px;
		}

		.advantages__item p {
			font-size: 14px;
		}
  }

  @media (max-width: 1365px) {
		.advantages {
			padding-top: 150px;
			max-width: 1120px;
		}

		.advantages__item {
			max-width: 310px;
		}
  }

  @media (max-width: 1199px) {
		.advantages {
			padding-top: 234px;
			max-width: 688px;
		}

    .advantages__container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .advantages__container h2 {
      text-align: center;
    }

		.advantages__item {
      &:nth-child(3n) {
        margin-right: auto;
      }

      &:nth-child(2n) {
        margin-right: 0;
      }
    }
	}
	
	@media (max-width: 767px) {
		.advantages {
			padding: 120px 0 0 0;
			max-width: 92vw;

			background: none;
		}

    .advantages__container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .advantages__container h2 {
			width: 100%;
			font-size: 36px;
		}
		
		.advantages__list {
			flex-direction: column;
			align-items: center;
		}

		.advantages__item {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin:  0 0 50px 0;

      &:nth-child(3n) {
        margin-right: 0;
			}
			
			&:last-child {
				margin-bottom: 0;
			}
		}
		
		.advantages__item h3 {
			font-size: 28px;
			text-align: center;
		}

		.advantages__item p {
			text-align: center;
		}
  }
</style>