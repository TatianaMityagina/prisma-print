<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__overlay"></div>

      <div class="modal__content">
        <button class="modal__close-btn" type="button" @click="$emit('closepopup')">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.9914 1.4142C29.3819 1.80472 29.3819 2.43789 28.9914 2.82841L2.82843 28.9914C2.4379 29.3819 1.80474 29.3819 1.41421 28.9914L0.707107 28.2843C0.316583 27.8937 0.316582 27.2606 0.707107 26.87L26.8701 0.707091C27.2606 0.316567 27.8937 0.316567 28.2843 0.707091L28.9914 1.4142Z" fill="#202020"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.707109 1.4142C0.316585 1.80472 0.316585 2.43789 0.707109 2.82841L26.8701 28.9914C27.2606 29.3819 27.8937 29.3819 28.2843 28.9914L28.9914 28.2843C29.3819 27.8937 29.3819 27.2606 28.9914 26.87L2.82843 0.707091C2.43791 0.316567 1.80474 0.316567 1.41422 0.707091L0.707109 1.4142Z" fill="#202020"/>
          </svg>
          Закрыть окно
        </button>
        <div class="modal__wrapper-content">
          <h2>
            Для заказа принта сообщите контактные данные 
            и мы перезвоним вам в течении 1 часа
          </h2>

          <form action="mail.php" method="post">
            <div class="modal__form-field">
              <input type="text" id="name" name="name" placeholder="Как вас зовут?" required/>
              <label for="name">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.0711 12.9289C15.9819 11.8398 14.6855 11.0335 13.2711 10.5454C14.786 9.50199 15.7812 7.75578 15.7812 5.78125C15.7812 2.59348 13.1878 0 10 0C6.81223 0 4.21875 2.59348 4.21875 5.78125C4.21875 7.75578 5.21402 9.50199 6.72898 10.5454C5.31453 11.0335 4.01813 11.8398 2.92895 12.9289C1.0402 14.8177 0 17.3289 0 20H1.5625C1.5625 15.3475 5.34754 11.5625 10 11.5625C14.6525 11.5625 18.4375 15.3475 18.4375 20H20C20 17.3289 18.9598 14.8177 17.0711 12.9289ZM10 10C7.67379 10 5.78125 8.1075 5.78125 5.78125C5.78125 3.455 7.67379 1.5625 10 1.5625C12.3262 1.5625 14.2188 3.455 14.2188 5.78125C14.2188 8.1075 12.3262 10 10 10Z" fill="#202020" fill-opacity="0.6"/>
                </svg>
              </label>
            </div>
          
            <div class="modal__form-field">
              <input type="tel" id="tel" name="phone" placeholder="Ваш телефон" v-mask="{ mask: '+9{1,15}', greedy: true, placeholder: '' }" required/>
              <label for="tel">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.8952 13.1277C17.6707 13.1277 16.4684 12.9362 15.3291 12.5597C14.7611 12.366 14.1144 12.5163 13.7438 12.8939L11.495 14.5915C8.88703 13.1994 7.28057 11.5934 5.90745 9.00505L7.5551 6.81484C7.98318 6.38734 8.13672 5.76286 7.95276 5.17693C7.57464 4.03161 7.38255 2.8299 7.38255 1.6049C7.3826 0.719948 6.66266 0 5.77776 0H2.10479C1.21995 0 0.5 0.719948 0.5 1.60479C0.5 11.7481 8.75198 20 18.8952 20C19.7801 20 20.5001 19.2801 20.5001 18.3952V14.7325C20.5 13.8477 19.7801 13.1277 18.8952 13.1277ZM19.3889 18.3952C19.3889 18.6676 19.1676 18.8889 18.8952 18.8889C9.36448 18.8889 1.61115 11.1355 1.61115 1.60484C1.61115 1.3325 1.8325 1.11115 2.10484 1.11115H5.77781C6.05016 1.11115 6.27151 1.3325 6.27151 1.60484C6.27151 2.9487 6.48255 4.2676 6.89542 5.51708C6.95292 5.70156 6.90625 5.8925 6.71964 6.08677L4.8099 8.61599C4.68188 8.78578 4.66177 9.01312 4.75781 9.20245C6.31651 12.2661 8.21052 14.1602 11.2959 15.7411C11.4836 15.8393 11.7136 15.8187 11.884 15.6901L14.4714 13.7299C14.6021 13.5992 14.798 13.5526 14.9748 13.6128C16.233 14.0283 17.5519 14.2389 18.8952 14.2389C19.1676 14.2389 19.3889 14.4602 19.3889 14.7326V18.3952Z" fill="#797979"/>
                </svg>
              </label>
            </div>

            <button class="modal__sumbit" type="submit">Отправить заявку</button>

            <div class="modal__consent">
              <input type="checkbox" id="consent" required checked>
              <label class="modal__consent-label" for="consent">
                Я согласен на обработку <span>персональных данных</span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    created() {
      document.addEventListener('keydown', this.onKeyDown)
    },

    beforeDestroy() {
      document.removeEventListener('keydown', this.onKeyDown)
    },
    methods: {
      onKeyDown(e) {
        if (e.keyCode === 27) {
          this.$emit('closepopup')
        }
      }
      // sendForm() {
      //   axios({
      //   method: 'post',
      //   url: 'mail.php',
      //   data: {
      //     name: '',
      //     phone: ''
      //     }
      //   })
      //    .then(function () {
      //     alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      //     this.data = {}
      //   })
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    display: block;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: rgba(0, 0, 0, 0.8);

    &--shown {
      display: block;
    }
  }

  .modal__container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    width: 100%;
    padding: 20px 0;
  }

  .modal__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .modal__content {
    z-index: 101;
    max-width: 700px;
    padding: 25px 37px 37px 37px;
    background-color: #ffffff;
    box-shadow: 0 11px 15px rgba(0, 0, 0, 0.2), 0 9px 46px rgba(0, 0, 0, 0.12),
      0 24px 38px rgba(0, 0, 0, 0.14);
  }

  .modal__close-btn {
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    font-family: "Panton", "Arial", sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 100%;
    color: #202020;

    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transition: opacity 0.3s;

    &:focus {
      opacity: 0.6;
    }

    &:focus:not(.focus-visible) {
      opacity: 1;
    }

    &:active:not(.focus-visible) {
      opacity: 0.6;
    }
  }

  .modal__close-btn svg {
    margin-right: 18px;
  }

  .modal__wrapper-content h2 {
    margin: 0 0 40px 0;

    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    color: rgba($color: #A30E4C, $alpha: 0.8);
  }

  .modal__wrapper-content form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .modal__form-field {
    position: relative;
    margin-bottom: 15px;
    width: 100%;

    &:nth-child(2) {
      margin-bottom: 25px;
    }
  }

  .modal__form-field input {
    padding: 0 85px;
    width: 100%;
    height: 73px;

    border: 1px solid #CECECE;
    border-radius: 42px;
    outline: none;
  }

  .modal__form-field label {
    position: absolute;
    top: 25px;
    left: 40px;
  }

  .modal__form-field input::placeholder {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: rgba(32, 32, 32, 0.6);
  }

  .modal__form-field input[type=text],
  .modal__form-field input[type=tel] {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: rgba(32, 32, 32, 0.6);
  }

  .modal__sumbit {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    width: 261px;
    height: 54px;

    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;

    background: #A30E4C;
    border: none;
    outline: none;
    box-shadow: 0px 10px 15px rgba(47, 128, 237, 0.18), 0px 4px 9px rgba(47, 128, 237, 0.25);
    border-radius: 35px;
    cursor: pointer;

    &:hover {
      transition: 0.4s;
      background: rgb(175, 43, 118);
      box-shadow: 0px 4px 10px rgba(139, 17, 85, 0.5);
    }
  }

  /* прячем input checkbox */
  .modal__consent input[type="checkbox"] {
    display: none;
  }
  
  /* стили для метки */
  .modal__consent-label {
    display: flex;
    align-items: center;

    font-weight: 300;
    font-size: 12px;
    line-height: 120%;
    color: rgba(51, 51, 51, 0.5);
    cursor: default;
  }

  .modal__consent-label span {
    margin-left: 4px;
    font-weight: 300;
    font-size: 12px;
    line-height: 120%;
    color: rgba(51, 51, 51, 0.5);
    
    border-bottom: 1px solid rgba(51, 51, 51, 0.2);

    &:hover {
      border-bottom: 1px solid rgba(51, 51, 51, 0.3);
      transition: 0.4s;
    }
  }
  
  /* формируем внешний вид чекбокса в псевдоэлементе before */
  .modal__consent-label:before {
    position: relative;
    content: " ";

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;

    width: 14px;
    height: 14px;
    background: #ffffff;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
  }
  
  /* вариации внешнего вида в зав-ти от статуса checkbox */
  /* checked */
  .modal__consent input:checked + .modal__consent-label:before {
    border: 1px solid #A30E4C;
    background-color: #A30E4C;
    background-image: url("../assets/img/check.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  @media (max-width: 767px) {
    .modal__content {
      max-width: 92vw;
      padding: 20px 15px 20px 15px;
    }

    .modal__close-btn {
      margin-bottom: 20px;

      font-size: 12px;
    }

    .modal__close-btn svg {
      margin-right: 10px;
      width: 25px;
      height: 25px;
    }

    .modal__wrapper-content h2 {
      margin-bottom: 22px;

      font-size: 14px;
    }

    .modal__form-field {
    position: relative;
    margin-bottom: 15px;
    width: 100%;

    &:nth-child(2) {
      margin-bottom: 25px;
    }
  }

  .modal__form-field input {
    padding: 0 35px;
    width: 100%;
    height: 40px;
  }

  .modal__form-field label {
    position: absolute;
    top: 8px;
    left: 15px;
  }

  .modal__form-field svg {
    width: 14px;
    height: 14px;
  }

  .modal__form-field input::placeholder {
    font-size: 14px;
    line-height: 16px;
  }

  .modal__form-field input[type=text],
  .modal__form-field input[type=tel] {
    font-size: 14px;
    line-height: 16px;
  }

  .modal__sumbit {
    width: 193px;
    height: 45px;

    font-size: 16px;
    line-height: 19px;
  }
}
</style>
