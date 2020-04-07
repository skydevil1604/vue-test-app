<template>
  <div class="form-wrapper">
    <div class="social">
      <div class="social__text">You can sign in with social</div>
      <div class="social__items">
        <a class="social__item social__item--vkontakte" href="#">
          <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.8002 0.74C18.9302 0.32 18.8002 0 18.1802 0H16.1602C15.6402 0 15.4102 0.27 15.2802 0.57C15.2802 0.57 14.2502 3.08 12.7902 4.72C12.3102 5.19 12.1002 5.34 11.8402 5.34C11.7102 5.34 11.5002 5.19 11.5002 4.76V0.74C11.5002 0.23 11.3802 0 10.9502 0H7.7602C7.4402 0 7.2502 0.24 7.2502 0.47C7.2502 0.95 8.0002 1.07 8.0502 2.44V5.42C8.0502 6.08 7.9302 6.2 7.6802 6.2C7.0002 6.2 5.3202 3.67 4.3302 0.79C4.1302 0.23 3.9402 0 3.4202 0H1.3902C0.820195 0 0.700195 0.27 0.700195 0.57C0.700195 1.11 1.3902 3.77 3.9002 7.29C5.5702 9.7 7.9302 11 10.0802 11C11.3702 11 11.5302 10.71 11.5302 10.21V8.39C11.5302 7.82 11.6502 7.7 12.0602 7.7C12.3602 7.7 12.8702 7.85 14.0702 9C15.4502 10.38 15.6702 11 16.4502 11H18.4702C19.0502 11 19.3402 10.71 19.1802 10.14C19.0002 9.57 18.3402 8.74 17.4702 7.76C17.0002 7.21 16.2902 6.61 16.0702 6.3C15.7702 5.92 15.8602 5.75 16.0702 5.4C16.0702 5.4 18.5402 1.93 18.8002 0.74Z" fill="#627DA1"/>
          </svg>
        </a>
        <a class="social__item social__item--facebook" href="#">
          <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0V3.2H6.4C5.848 3.2 5.6 3.848 5.6 4.4V6.4H8V9.6H5.6V16H2.4V9.6H0V6.4H2.4V3.2C2.4 2.35131 2.73714 1.53737 3.33726 0.937258C3.93737 0.337142 4.75131 0 5.6 0H8Z" fill="#4B629E"/>
          </svg>
        </a>
        <a class="social__item social__item--google" href="#">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="15.9995" height="15.9998" fill="white" fill-opacity="0.01"/>
            <path d="M7.54632 13.6683L6.9894 15.7474L4.95387 15.7905C4.34554 14.6621 4.00049 13.3712 4.00049 11.9993C4.00049 10.6727 4.3231 9.42177 4.89496 8.32025H4.8954L6.70759 8.6525L7.50144 10.4538C7.33529 10.9382 7.24473 11.4582 7.24473 11.9993C7.2448 12.5866 7.35117 13.1492 7.54632 13.6683Z" fill="#FBBB00"/>
            <path d="M19.8604 10.5052C19.9523 10.9891 20.0002 11.4889 20.0002 11.9997C20.0002 12.5724 19.9399 13.1311 19.8252 13.67C19.4358 15.5038 18.4182 17.1051 17.0086 18.2383L17.0082 18.2378L14.7256 18.1214L14.4026 16.1047C15.3379 15.5561 16.0689 14.6977 16.454 13.67H12.1763V10.5052H16.5164H19.8604Z" fill="#518EF8"/>
            <path d="M17.0077 18.2383L17.0082 18.2387C15.6373 19.3407 13.8957 20 12 20C8.95349 20 6.30479 18.2972 4.95361 15.7913L7.54607 13.6692C8.22164 15.4722 9.96093 16.7557 12 16.7557C12.8764 16.7557 13.6975 16.5188 14.4021 16.1052L17.0077 18.2383Z" fill="#28B446"/>
            <path d="M17.1068 5.84172L14.5152 7.96344C13.786 7.50763 12.924 7.24433 12.0005 7.24433C9.91533 7.24433 8.14351 8.58671 7.50178 10.4544L4.8957 8.32081H4.89526C6.22666 5.75382 8.90877 4 12.0005 4C13.9416 4 15.7213 4.69143 17.1068 5.84172Z" fill="#F14336"/>
          </svg>
        </a>
      </div>
    </div>
    <form class="form" action="#">
      <input class="form__item" type="text" name="name" id="name" placeholder="Your name">
      <input class="form__item" type="email" name="email" id="email" placeholder="E-mail" >
      <input class="form__item" type="tel" name="tel" id="tel" placeholder="Phone">
      <div class="checkbox">
        <input type="checkbox" id="acception" required>
        <label for="acception">
          I accept the terms of the offer of <a href="#">the privacy policy</a> 
        </label>
      </div>
      <<router-link to="/main-page" class="button button--main" type="submit" tag="button">Registration</router-link> >
      <button class="button button--secondary" href="%23sign-in" >Sign in</button>
    </form>
  </div>
</template>

<script>


export default {
  name: 'RegistrationComponent',
}
</script>

<style lang="scss">

  @mixin placeholder {
    &::-webkit-input-placeholder { color: rgba(17, 17, 17, 0.48) }
    &:-moz-placeholder           { color: rgba(17, 17, 17, 0.48) }
    &::-moz-placeholder          { color: rgba(17, 17, 17, 0.48) }
    &:-ms-input-placeholder      { color: rgba(17, 17, 17, 0.48) }  
}
  @mixin placeholder-move-on-focus {
    &:focus::-webkit-input-placeholder { line-height: 20px;  transition: line-height 0.5s ease; }
    &:focus:-moz-placeholder           { line-height: 20px;  transition: line-height 0.5s ease; }
    &:focus::-moz-placeholder          { line-height: 20px;  transition: line-height 0.5s ease; }
    &:focus:-ms-input-placeholder      { line-height: 20px;  transition: line-height 0.5s ease; }  
    &:focus::-webkit-input-placeholder { line-height: 100px; transition: line-height 0.5s ease; }
    &:focus:-moz-placeholder           { line-height: 100px; transition: line-height 0.5s ease; }
    &:focus::-moz-placeholder          { line-height: 100px; transition: line-height 0.5s ease; }
    &:focus:-ms-input-placeholder      { line-height: 100px; transition: line-height 0.5s ease; }
}

  .form {
    display: flex;
    flex-direction: column;

      &__item {
        width: 92%;
        box-shadow: 0px 4px 16px rgba(51, 51, 51, 0.08), 0px 4px 4px rgba(51, 51, 51, 0.04);
        border-radius: 4px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #111111;
        padding: 16px;
        margin-bottom: 20px;
        outline: none;
        border: none;
        @include placeholder;
        @include placeholder-move-on-focus;
      }

      .checkbox {
        text-align: left;
        margin-bottom: 32px;

          & label {
            font-size: 16px;
            line-height: 24px;
            color: #000000;
            
              & a {
                text-decoration: none;
              }
          }
      }

      .button {
        font-size: 16px;
        line-height: 24px;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 4px;
        border: none;
        outline: none;
        cursor: pointer;

          &--main {
            background: #6E41E2;
            color: #ffffff;
            margin-bottom: 8px;

              &:hover {
                background: #502fa3;
              }
          }

          &--secondary {
            background: #ffffff;
            color: #6E41E2;

              &:hover {
                background: #FAFAFA;
              }
          }
      }

      input[type="checkbox"]:checked, 
      input[type="checkbox"]:not(:checked) {
        position: absolute;
        left: -9999px;
      }
      input[type="checkbox"]:checked + label, 
      input[type="checkbox"]:not(:checked) + label {
        display: inline-block;
        position: relative;
        padding-left: 35px;
        cursor: pointer;
      }
      input[type="checkbox"]:checked + label:before, 
      input[type="checkbox"]:not(:checked) + label:before {
        content: "";
        position: absolute;
        left: 0px;
        top: -1px;
        width: 24px;
        height: 24px;
        border: 1px solid #D4D4D4;
        border-radius: 4px;
      }
      input[type="checkbox"]:checked + label:after, 
      input[type="checkbox"]:not(:checked) + label:after {
        content: "";
        position: absolute;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        -o-transition: all 0.2s ease;
        transition: all 0.2s ease;
        left: 6px;
        top: 6px;
        width: 10px;
        height: 5px;
        border-radius: 1px;
        border-left: 4px solid grey;
        border-bottom: 4px solid grey;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      input[type="checkbox"]:not(:checked) + label:after {
        opacity: 0;
      }
      input[type="checkbox"]:checked + label:after {
        opacity: 1;
      }
  }
</style>