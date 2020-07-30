<template>
  <div class="footer">
		<div class="footer__container">
      <img class="footer__image" src="~@/assets/img/footer-logo.svg" alt="Логотип Risma Print" width="262" height="161">
      <ul class="footer__nav-list">
        <li>
          <router-link to="/home" name="Home">
            Печать для дома
          </router-link>
        </li>
        <li>
          <router-link to="/office" name="Office">
            Печать для коммерции
          </router-link>
        </li>
        <li>
          <router-link to="/calculation" name="Calculation">
            Калькулятор стоимости
          </router-link>
        </li>
        <li>
          <router-link to="/contract" name="Contract">
            Сотрудничество
          </router-link>
        </li>
        <li>
          <router-link to="/" name="Index">
            Главная
          </router-link>
        </li>
      </ul> 

      <ul class="footer__social-list">
        <li class="footer__social-item">
          <a class="footer__social-link" href="https://vk.com/robothudozhnik" target="_blank" rel="noopener" aria-label="Мы в VK">
            <svg width="52" height="52" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#4D76A1"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4334 21.579H15.6107C15.6107 21.579 15.9663 21.5399 16.1479 21.3442C16.315 21.1645 16.3097 20.8271 16.3097 20.8271C16.3097 20.8271 16.2867 19.2473 17.0198 19.0147C17.7426 18.7856 18.6707 20.5415 19.6544 21.2167C20.3983 21.7276 20.9636 21.6156 20.9636 21.6156L23.5939 21.579C23.5939 21.579 24.9699 21.4942 24.3174 20.4123C24.264 20.3238 23.9375 19.6121 22.3618 18.1494C20.7125 16.6186 20.9334 16.8662 22.9201 14.2183C24.13 12.6056 24.6137 11.6211 24.4626 11.1994C24.3185 10.7978 23.4286 10.904 23.4286 10.904L20.467 10.9224C20.467 10.9224 20.2475 10.8925 20.0847 10.9898C19.9256 11.0853 19.8232 11.3077 19.8232 11.3077C19.8232 11.3077 19.3544 12.5556 18.7293 13.6169C17.4105 15.8563 16.8832 15.9745 16.6677 15.8354C16.1663 15.5114 16.2915 14.5335 16.2915 13.8388C16.2915 11.6687 16.6206 10.7639 15.6505 10.5296C15.3286 10.4518 15.0917 10.4005 14.2684 10.3922C13.2117 10.3812 12.3173 10.3954 11.8108 10.6435C11.4739 10.8085 11.214 11.1762 11.3723 11.1973C11.5681 11.2235 12.0114 11.3168 12.2464 11.6369C12.5499 12.0497 12.5392 12.9771 12.5392 12.9771C12.5392 12.9771 12.7135 15.5317 12.132 15.8491C11.7328 16.0667 11.1851 15.6223 10.0094 13.5907C9.40701 12.55 8.95218 11.3997 8.95218 11.3997C8.95218 11.3997 8.86448 11.1847 8.70806 11.0698C8.51821 10.9305 8.25296 10.8861 8.25296 10.8861L5.43869 10.9045C5.43869 10.9045 5.01621 10.9163 4.86113 11.1C4.72315 11.2634 4.85016 11.6013 4.85016 11.6013C4.85016 11.6013 7.05345 16.7561 9.54819 19.3538C11.8357 21.7354 14.4334 21.579 14.4334 21.579Z" fill="white"/>
            </svg>
          </a>
        </li>
        <li class="footer__social-item">
          <a class="footer__social-link" href="https://instagram.com/prismaprint_" target="_blank" rel="noopener" aria-label="Мы в Insragram">
            <svg width="52" height="52" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.4707 7.98145H10.5293C9.10215 7.98145 7.94102 9.14257 7.94102 10.5697V19.5111C7.94102 20.9383 9.10215 22.0997 10.5293 22.0997H19.4707C20.8979 22.0997 22.0593 20.9386 22.0593 19.5111V10.5697C22.0593 9.14257 20.8982 7.98145 19.4707 7.98145ZM15 19.6883C12.4374 19.6883 10.3525 17.6033 10.3525 15.0404C10.3525 12.4779 12.4374 10.3929 15 10.3929C17.5629 10.3929 19.6478 12.4779 19.6478 15.0404C19.6478 17.603 17.5626 19.6883 15 19.6883ZM19.7972 11.3538C19.1906 11.3538 18.6973 10.8605 18.6973 10.2542C18.6973 9.64793 19.1906 9.1546 19.7972 9.1546C20.4035 9.1546 20.8969 9.64793 20.8969 10.2542C20.8969 10.8605 20.4035 11.3538 19.7972 11.3538Z" fill="#C71866"/>
              <path d="M15 12.3569C13.5207 12.3569 12.3161 13.5608 12.3161 15.0401C12.3161 16.5201 13.5207 17.7244 15 17.7244C16.48 17.7244 17.6835 16.5201 17.6835 15.0401C17.6835 13.5612 16.4796 12.3569 15 12.3569Z" fill="#C71866"/>
              <path d="M15 0C6.71606 0 0 6.71606 0 15C0 23.2839 6.71606 30 15 30C23.2839 30 30 23.2839 30 15C30 6.71606 23.2839 0 15 0ZM24.0229 19.5111C24.0229 22.0215 21.9811 24.0634 19.4707 24.0634H10.5293C8.01923 24.0634 5.97707 22.0215 5.97707 19.5111V10.5698C5.97707 8.05967 8.01923 6.01751 10.5293 6.01751H19.4707C21.9811 6.01751 24.0229 8.05967 24.0229 10.5698V19.5111Z" fill="#C71866"/>
            </svg>
          </a>
        </li>
        <li class="footer__social-item">
          <a class="footer__social-link" href="https://www.youtube.com/channel/UCK8IXhkzGufEuDhu7SI9jvA" target="_blank" rel="noopener" aria-label="Мы на Youtube">
            <svg width="52" height="52" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#D22215"/>
              <path d="M20.0185 8.92603H9.9815C8.01228 8.92603 6.41595 10.5224 6.41595 12.4916V17.5091C6.41595 19.4783 8.01234 21.0746 9.9815 21.0746H20.0185C21.9877 21.0746 23.584 19.4782 23.584 17.5091V12.4916C23.584 10.5224 21.9877 8.92603 20.0185 8.92603ZM17.6071 15.2444L12.9125 17.4834C12.7874 17.5431 12.6428 17.452 12.6428 17.3134V12.6954C12.6428 12.5548 12.7912 12.4637 12.9165 12.5273L17.611 14.9062C17.7508 14.9769 17.7483 15.1772 17.6071 15.2444Z" fill="white"/>
            </svg>
          </a>
        </li>
      </ul>
      <p class="footer__text">Призмапринт - это студия, развивающая роспись стен цифровой культурной эпохи. Мы не меньше художников вкладываем душу в наши работы</p>
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
  .footer {
    display: flex;
    justify-content: center;
    padding: 120px 0;
    width: 100%;
    
    // background: url('~@/assets/img/bg-triangle.svg') bottom / contain no-repeat;
  }

  .footer__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 910px;
    width: 100%;
  }

  .footer__image {
    margin-bottom: 40px;
  }

  .footer__nav-list {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 50px 0;
  }

  .footer__nav-list a {
    font-weight: 600;
    font-size: 18px;
    line-height: 140%;
    color: #343434;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      transition: 0.4s;
    }
  }

  //SOCIAL

  .footer__social-list {
    display: flex;
    margin-bottom: 40px;
  }

  .footer__social-item {
    margin-right: 15px; 

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      svg {
        filter: contrast(150%);
        transition: 0.4s;
      }
    }
  }
  //

  .footer__text {
    margin: 0;
    max-width: 890px;

    font-size: 16px;
    line-height: 140%;
    text-align: center;
    color: #343434;
    opacity: 0.7;
  }

  @media (max-width: 1599px) {
    .footer__container {
      max-width: 725px;
    }

    .footer__nav-list a {
      font-size: 14px;
    }
  }

  @media (max-width: 1119px) {
    .footer__nav-list {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }

    .footer__social-link svg {
      width: 41px;
      height: 41px;
    }

    .footer__text {
      max-width: 559px;
      font-size: 14px;
    }
  }

   @media (max-width: 767px) {
    .footer {
      background: none;
    }

    .footer__social-link svg {
      width: 52px;
      height: 52px;
    }

    .footer__text {
      max-width: 92vw;
    }
  }
</style>