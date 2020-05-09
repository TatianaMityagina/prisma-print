<template>
  <div class="top-header">
    <div class="menu">
      <div class="menu__logo">
        <div class="menu__burger" @click="isMenuShow = true">
          <svg width="54" height="27" viewBox="0 0 54 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M39 2C39 2.55228 38.5523 3 38 3H1C0.447715 3 0 2.55228 0 2V1C0 0.447715 0.447715 0 1 0H38C38.5523 0 39 0.447715 39 1V2Z" fill="#202020"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M54 14C54 14.5523 53.5523 15 53 15H1C0.447715 15 0 14.5523 0 14V13C0 12.4477 0.447715 12 0.999999 12H53C53.5523 12 54 12.4477 54 13V14Z" fill="#202020"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M39 26C39 26.5523 38.5523 27 38 27H1C0.447715 27 0 26.5523 0 26V25C0 24.4477 0.447715 24 1 24H38C38.5523 24 39 24.4477 39 25V26Z" fill="#202020"/>
          </svg>
          <span>МЕНЮ</span>
        </div>
        <router-link to="/" name="Index">
          <img src="~@/assets/img/index-menu-logo.svg" alt="Логотип Risma Print" width="249" height="27">      
        </router-link>
      </div>

      <div class="menu__contacts">
        <div class="menu__contacts-tel">
          <a href="tel:89282565554">8928 256 55 54</a>
          <span>отдел печати</span>
        </div>  
        
        <ul class="menu__social-list">
          <li class="menu__social-item">
            <a class="menu__social-link" href="https://vk.com/" aria-label="Мы в VK">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#4D76A1"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4334 21.579H15.6107C15.6107 21.579 15.9663 21.5399 16.1479 21.3442C16.315 21.1645 16.3097 20.8271 16.3097 20.8271C16.3097 20.8271 16.2867 19.2473 17.0198 19.0147C17.7426 18.7856 18.6707 20.5415 19.6544 21.2167C20.3983 21.7276 20.9636 21.6156 20.9636 21.6156L23.5939 21.579C23.5939 21.579 24.9699 21.4942 24.3174 20.4123C24.264 20.3238 23.9375 19.6121 22.3618 18.1494C20.7125 16.6186 20.9334 16.8662 22.9201 14.2183C24.13 12.6056 24.6137 11.6211 24.4626 11.1994C24.3185 10.7978 23.4286 10.904 23.4286 10.904L20.467 10.9224C20.467 10.9224 20.2475 10.8925 20.0847 10.9898C19.9256 11.0853 19.8232 11.3077 19.8232 11.3077C19.8232 11.3077 19.3544 12.5556 18.7293 13.6169C17.4105 15.8563 16.8832 15.9745 16.6677 15.8354C16.1663 15.5114 16.2915 14.5335 16.2915 13.8388C16.2915 11.6687 16.6206 10.7639 15.6505 10.5296C15.3286 10.4518 15.0917 10.4005 14.2684 10.3922C13.2117 10.3812 12.3173 10.3954 11.8108 10.6435C11.4739 10.8085 11.214 11.1762 11.3723 11.1973C11.5681 11.2235 12.0114 11.3168 12.2464 11.6369C12.5499 12.0497 12.5392 12.9771 12.5392 12.9771C12.5392 12.9771 12.7135 15.5317 12.132 15.8491C11.7328 16.0667 11.1851 15.6223 10.0094 13.5907C9.40701 12.55 8.95218 11.3997 8.95218 11.3997C8.95218 11.3997 8.86448 11.1847 8.70806 11.0698C8.51821 10.9305 8.25296 10.8861 8.25296 10.8861L5.43869 10.9045C5.43869 10.9045 5.01621 10.9163 4.86113 11.1C4.72315 11.2634 4.85016 11.6013 4.85016 11.6013C4.85016 11.6013 7.05345 16.7561 9.54819 19.3538C11.8357 21.7354 14.4334 21.579 14.4334 21.579Z" fill="white"/>
              </svg>
            </a>
          </li>
          <li class="menu__social-item">
            <a class="menu__social-link" href="https://instagram.com/" aria-label="Мы в Insragram">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4707 7.98145H10.5293C9.10215 7.98145 7.94102 9.14257 7.94102 10.5697V19.5111C7.94102 20.9383 9.10215 22.0997 10.5293 22.0997H19.4707C20.8979 22.0997 22.0593 20.9386 22.0593 19.5111V10.5697C22.0593 9.14257 20.8982 7.98145 19.4707 7.98145ZM15 19.6883C12.4374 19.6883 10.3525 17.6033 10.3525 15.0404C10.3525 12.4779 12.4374 10.3929 15 10.3929C17.5629 10.3929 19.6478 12.4779 19.6478 15.0404C19.6478 17.603 17.5626 19.6883 15 19.6883ZM19.7972 11.3538C19.1906 11.3538 18.6973 10.8605 18.6973 10.2542C18.6973 9.64793 19.1906 9.1546 19.7972 9.1546C20.4035 9.1546 20.8969 9.64793 20.8969 10.2542C20.8969 10.8605 20.4035 11.3538 19.7972 11.3538Z" fill="#C71866"/>
                <path d="M15 12.3569C13.5207 12.3569 12.3161 13.5608 12.3161 15.0401C12.3161 16.5201 13.5207 17.7244 15 17.7244C16.48 17.7244 17.6835 16.5201 17.6835 15.0401C17.6835 13.5612 16.4796 12.3569 15 12.3569Z" fill="#C71866"/>
                <path d="M15 0C6.71606 0 0 6.71606 0 15C0 23.2839 6.71606 30 15 30C23.2839 30 30 23.2839 30 15C30 6.71606 23.2839 0 15 0ZM24.0229 19.5111C24.0229 22.0215 21.9811 24.0634 19.4707 24.0634H10.5293C8.01923 24.0634 5.97707 22.0215 5.97707 19.5111V10.5698C5.97707 8.05967 8.01923 6.01751 10.5293 6.01751H19.4707C21.9811 6.01751 24.0229 8.05967 24.0229 10.5698V19.5111Z" fill="#C71866"/>
              </svg>
            </a>
          </li>
          <li class="menu__social-item">
            <a class="menu__social-link" href="https://youtube.com/" aria-label="Мы на Youtube">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#D22215"/>
                <path d="M20.0185 8.92603H9.9815C8.01228 8.92603 6.41595 10.5224 6.41595 12.4916V17.5091C6.41595 19.4783 8.01234 21.0746 9.9815 21.0746H20.0185C21.9877 21.0746 23.584 19.4782 23.584 17.5091V12.4916C23.584 10.5224 21.9877 8.92603 20.0185 8.92603ZM17.6071 15.2444L12.9125 17.4834C12.7874 17.5431 12.6428 17.452 12.6428 17.3134V12.6954C12.6428 12.5548 12.7912 12.4637 12.9165 12.5273L17.611 14.9062C17.7508 14.9769 17.7483 15.1772 17.6071 15.2444Z" fill="white"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <transition name="fade-adaptivity-menu">
      <div class="interactive-menu" v-show="isMenuShow">
        <div class="interactive-menu__button">
          <svg @click="closeMenu" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.9914 1.4142C29.3819 1.80472 29.3819 2.43789 28.9914 2.82841L2.82843 28.9914C2.4379 29.3819 1.80474 29.3819 1.41421 28.9914L0.707107 28.2843C0.316583 27.8937 0.316582 27.2606 0.707107 26.87L26.8701 0.707091C27.2606 0.316567 27.8937 0.316567 28.2843 0.707091L28.9914 1.4142Z" fill="#202020"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.707109 1.4142C0.316585 1.80472 0.316585 2.43789 0.707109 2.82841L26.8701 28.9914C27.2606 29.3819 27.8937 29.3819 28.2843 28.9914L28.9914 28.2843C29.3819 27.8937 29.3819 27.2606 28.9914 26.87L2.82843 0.707091C2.43791 0.316567 1.80474 0.316567 1.41422 0.707091L0.707109 1.4142Z" fill="#202020"/>
          </svg>
          <span>Закрыть меню</span>
        </div>
        <div class="interactive-menu__container">
          <nav class="menu-nav">
            <h1>Куда печатаем?</h1>
            <ul class="menu-nav__list-type">
              <li>
                <router-link to="/home" name="Home" @click.native="anchor">
                  Домой
                </router-link>
              </li>
              <li>
                <router-link to="/office" name="Office" @click.native="anchor">
                  Коммерция
                </router-link>
              </li>
            </ul>

            <ul class="menu-nav__list">
              <li class="menu-nav__list-item">
                <router-link to="/about" name="About" @click.native="anchor">
                  О нас
                </router-link>
              </li>
              <li class="menu-nav__list-item">
                <router-link to="/gallery" name="Gallery" @click.native="anchor">
                  Галерея работ
                </router-link>
              </li>
              <li class="menu-nav__list-item">
                <a href="#">Калькулятор стоимости</a>
              </li>
              <li class="menu-nav__list-item">
                <router-link to="/contract" name="Contract" @click.native="anchor">
                  Сотрудничество
                </router-link>
              </li>
            </ul>
          </nav>
          <div class="interactive-menu__contacts">
            <a class="interactive-menu__contacts-tel" href="tel:89282565554">8928 256 55 54</a>  
            
            <ul class="interactive-menu__social-list">
              <li class="interactive-menu__social-item">
                <a class="interactive-menu__social-link" href="https://vk.com/" aria-label="Мы в VK">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#4D76A1"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4334 21.579H15.6107C15.6107 21.579 15.9663 21.5399 16.1479 21.3442C16.315 21.1645 16.3097 20.8271 16.3097 20.8271C16.3097 20.8271 16.2867 19.2473 17.0198 19.0147C17.7426 18.7856 18.6707 20.5415 19.6544 21.2167C20.3983 21.7276 20.9636 21.6156 20.9636 21.6156L23.5939 21.579C23.5939 21.579 24.9699 21.4942 24.3174 20.4123C24.264 20.3238 23.9375 19.6121 22.3618 18.1494C20.7125 16.6186 20.9334 16.8662 22.9201 14.2183C24.13 12.6056 24.6137 11.6211 24.4626 11.1994C24.3185 10.7978 23.4286 10.904 23.4286 10.904L20.467 10.9224C20.467 10.9224 20.2475 10.8925 20.0847 10.9898C19.9256 11.0853 19.8232 11.3077 19.8232 11.3077C19.8232 11.3077 19.3544 12.5556 18.7293 13.6169C17.4105 15.8563 16.8832 15.9745 16.6677 15.8354C16.1663 15.5114 16.2915 14.5335 16.2915 13.8388C16.2915 11.6687 16.6206 10.7639 15.6505 10.5296C15.3286 10.4518 15.0917 10.4005 14.2684 10.3922C13.2117 10.3812 12.3173 10.3954 11.8108 10.6435C11.4739 10.8085 11.214 11.1762 11.3723 11.1973C11.5681 11.2235 12.0114 11.3168 12.2464 11.6369C12.5499 12.0497 12.5392 12.9771 12.5392 12.9771C12.5392 12.9771 12.7135 15.5317 12.132 15.8491C11.7328 16.0667 11.1851 15.6223 10.0094 13.5907C9.40701 12.55 8.95218 11.3997 8.95218 11.3997C8.95218 11.3997 8.86448 11.1847 8.70806 11.0698C8.51821 10.9305 8.25296 10.8861 8.25296 10.8861L5.43869 10.9045C5.43869 10.9045 5.01621 10.9163 4.86113 11.1C4.72315 11.2634 4.85016 11.6013 4.85016 11.6013C4.85016 11.6013 7.05345 16.7561 9.54819 19.3538C11.8357 21.7354 14.4334 21.579 14.4334 21.579Z" fill="white"/>
                  </svg>
                </a>
              </li>
              <li class="interactive-menu__social-item">
                <a class="interactive-menu__social-link" href="https://instagram.com/" aria-label="Мы в Insragram">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.4707 7.98145H10.5293C9.10215 7.98145 7.94102 9.14257 7.94102 10.5697V19.5111C7.94102 20.9383 9.10215 22.0997 10.5293 22.0997H19.4707C20.8979 22.0997 22.0593 20.9386 22.0593 19.5111V10.5697C22.0593 9.14257 20.8982 7.98145 19.4707 7.98145ZM15 19.6883C12.4374 19.6883 10.3525 17.6033 10.3525 15.0404C10.3525 12.4779 12.4374 10.3929 15 10.3929C17.5629 10.3929 19.6478 12.4779 19.6478 15.0404C19.6478 17.603 17.5626 19.6883 15 19.6883ZM19.7972 11.3538C19.1906 11.3538 18.6973 10.8605 18.6973 10.2542C18.6973 9.64793 19.1906 9.1546 19.7972 9.1546C20.4035 9.1546 20.8969 9.64793 20.8969 10.2542C20.8969 10.8605 20.4035 11.3538 19.7972 11.3538Z" fill="#C71866"/>
                    <path d="M15 12.3569C13.5207 12.3569 12.3161 13.5608 12.3161 15.0401C12.3161 16.5201 13.5207 17.7244 15 17.7244C16.48 17.7244 17.6835 16.5201 17.6835 15.0401C17.6835 13.5612 16.4796 12.3569 15 12.3569Z" fill="#C71866"/>
                    <path d="M15 0C6.71606 0 0 6.71606 0 15C0 23.2839 6.71606 30 15 30C23.2839 30 30 23.2839 30 15C30 6.71606 23.2839 0 15 0ZM24.0229 19.5111C24.0229 22.0215 21.9811 24.0634 19.4707 24.0634H10.5293C8.01923 24.0634 5.97707 22.0215 5.97707 19.5111V10.5698C5.97707 8.05967 8.01923 6.01751 10.5293 6.01751H19.4707C21.9811 6.01751 24.0229 8.05967 24.0229 10.5698V19.5111Z" fill="#C71866"/>
                  </svg>
                </a>
              </li>
              <li class="interactive-menu__social-item">
                <a class="interactive-menu__social-link" href="https://youtube.com/" aria-label="Мы на Youtube">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#D22215"/>
                    <path d="M20.0185 8.92603H9.9815C8.01228 8.92603 6.41595 10.5224 6.41595 12.4916V17.5091C6.41595 19.4783 8.01234 21.0746 9.9815 21.0746H20.0185C21.9877 21.0746 23.584 19.4782 23.584 17.5091V12.4916C23.584 10.5224 21.9877 8.92603 20.0185 8.92603ZM17.6071 15.2444L12.9125 17.4834C12.7874 17.5431 12.6428 17.452 12.6428 17.3134V12.6954C12.6428 12.5548 12.7912 12.4637 12.9165 12.5273L17.611 14.9062C17.7508 14.9769 17.7483 15.1772 17.6071 15.2444Z" fill="white"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  data() {
    return {
      isMenuShow: false
    }
  },
  methods: {
    closeMenu() {
      this.isMenuShow = false
    },
    anchor() {
      this.$emit('closeMenu')
      this.$nextTick(() => {
        location.href = this.$router.currentRoute.hash
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .top-header {
    position: fixed;
    z-index: 50;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    background-color: #FFFFFF;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 20px 20px 20px;
    max-width: 1720px;
    width: 100%;
  }

  .menu__logo {
    display: flex;
  }

  .menu__burger {
    display: flex;
    flex-direction: column;
    margin-right: 35px;
  }

  .menu__burger svg {
    margin-bottom: 10px;
    cursor: pointer;
  }

  .menu__burger span {
    font-weight: 300;
    font-size: 14px;
    line-height: 100%;
    color: #202020;
  }

  .menu__contacts {
    display: flex;
  }

  .menu__contacts-tel {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 45px;
  }

  .menu__contacts-tel a {
    margin: 0 0 10px 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    color: #202020;
    text-decoration: none;
    

    &:hover {
      text-decoration: underline;
      transition: 0.4s;
    }
  }

  .menu__contacts-tel span {
    margin: 0;
    padding: 2px 8px;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    color: #FFFFFF;

    background: #C71866;
    border-radius: 2px;
  }

  .menu__social-list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .menu__social-item {
    margin-right: 10px;

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

  // Interactive menu

  .interactive-menu {
    position: absolute;
    top: 0;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 120px 0;
    width: 100%;

    background-color: #FFFFFF;
  }
  
  .interactive-menu__button {
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 100px;
    max-width: 1720px;
    width: 100%;
    cursor: pointer;
  }

  .interactive-menu__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1320px;
    width: 100%;

    background: url('~@/assets/img/index-intro-triangle.svg') center / contain no-repeat;
  }

  

  .interactive-menu__button svg {
    margin-right: 10px;
  }

  .interactive-menu__button span {
    font-weight: 300;
    font-size: 14px;
    line-height: 100%;
    color: #202020;
  }

  .menu-nav h1 {
    margin: 0 0 20px 0;

    font-weight: 300;
    font-size: 28px;
    line-height: 100%;
    color: rgba(150, 30, 80, 0.4);
    text-align: center;
  }

  .menu-nav__list-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }

  .menu-nav__list-type a {
    font-weight: 600;
    font-size: 68px;
    line-height: 100%;
    color: #961E50;
    text-decoration: none;
  }

  .menu-nav__list-type li {
    margin-bottom: 20px;
  }

  .menu-nav__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 45px;
  }

  .menu-nav__list a {
    font-weight: 600;
    font-size: 28px;
    line-height: 100%;
    text-align: center;
    color: #202020;
    text-decoration: none;
  }

  .menu-nav__list-item {
    margin-bottom: 15px;
  }

  .interactive-menu__contacts-tel {
    font-weight: 600;
    font-size: 28px;
    line-height: 100%;
    text-align: center;
    color: #2D9CDB;
    text-decoration: none;
  }

  .interactive-menu__social-list {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  .interactive-menu__social-item {
     margin-right: 10px;

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

  .fade-adaptivity-menu-enter-active,
  .fade-adaptivity-menu-leave-active {
    transition: 0.6s;
  }

  .fade-adaptivity-menu-enter,
  .fade-adaptivity-menu-leave-to {
    opacity: 0;
  }

  // 1600

  @media (max-width: 1919px) {
    .menu {
      max-width: 1400px;
    }

    .interactive-menu__button {
      max-width: 1400px;
    }
  }

  @media (max-width: 1599px) {
    .menu {
      max-width: 1168px;
    }

    .interactive-menu__button {
      margin-bottom: 40px;
      max-width: 1168px;
    }

    .menu-nav__list-type a {
      font-size: 48px;
    }
  }

  @media (max-width: 1365px) {
    .menu {
      max-width: 1120px;
    }

    .interactive-menu__button {
      max-width: 1120px;
    }

    .menu-nav h1 {
      font-size: 22px;
    }

    .menu-nav__list a {
      font-size: 18px;
    }
    
    .interactive-menu__contacts-tel {
      font-size: 22px;
    }
  }

   @media (max-width: 1199px) {
     .menu {
      max-width: 688px;
    }

    .interactive-menu {
      padding-bottom: 0;
    }

    .interactive-menu__container {
      padding: 150px 0 220px 0;
      max-width: 100%;

      background: url('~@/assets/img/index-intro-triangle-tablet.svg') top / contain no-repeat;
    }

    .interactive-menu__button {
      max-width: 688px;
    }

    .menu__logo img {
      width: 169px;
      height: 18px;
    }

    .menu__burger {
      margin-right: 25px;
    }
   }
</style>
