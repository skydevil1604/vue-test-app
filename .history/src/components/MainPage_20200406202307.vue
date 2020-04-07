<template>
    <div class="main-page">
        <header class="header">
            <a class="logo" href="#">
                <img src="../assets/logo.png" alt="logo">
            </a>
            <nav class="navigation">
                <ul class="navigation__list">
                    <li class="navigation__item">
                        <a class="navigation__link" href="#">Free test</a>
                    </li>
                    <li class="navigation__item">
                        <a class="navigation__link navigation__link--active" href="#">Catalog</a>
                    </li>
                    <li class="navigation__item">
                        <a class="navigation__link" href="#">Help</a>
                    </li>
                </ul>
                <div class="navigation__profile">
                    <span class="navigation__user-name">Michael Browk</span>
                    <img class="navigation__user-photo" src="../assets/Lion.png" alt="">
                </div>
            </nav>
        </header>

        <section class="info">
            <h1 class="info__heading">Course catalog</h1>
            <p class="info__description">
                Each course contains video lectures, tasks, and text materials. All courses viewed by you are displayed in your personal account
            </p>
        </section>

        <section class="main-filter">
            <input type="search" name="search" id="search">
            <select name="" id=""></select>
        </section>

        <section class="main-content">
            <div class="post">
                <div class="post__header"></div>
                <div class="post__title"></div>
                <div class="post__info"></div>
                <div class="post__button-wrapper">
                    <div class="post__button post__button--main">Continue</div>
                    <div class="post__button post__button--secondary">More</div>
                </div>
            </div>
            <div class="post">
                <div class="post__header"></div>
                <div class="post__title"></div>
                <div class="post__info"></div>
                <div class="post__button-wrapper">
                    <div class="post__button post__button--main">Continue</div>
                    <div class="post__button post__button--secondary">More</div>
                </div>
            </div>
            <div class="post">
                <div class="post__header"></div>
                <div class="post__title"></div>
                <div class="post__info"></div>
                <div class="post__button-wrapper">
                    <div class="post__button post__button--main">Continue</div>
                    <div class="post__button post__button--secondary">More</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'MainPageComponent',
}
</script>

<style lang="scss">
    .main-page {
        max-width: 1366px;
        width: 100%;
        margin: 0 auto;
    }

    .header {
        padding-top: 22px;
        padding-bottom: 22px;
        padding-left: 24px;
        padding-right: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
    }

    .navigation {
        display: flex;
        align-items: center;
        width: 418px;
        justify-content: space-between;

            &__list {
                list-style: none;
                display: flex;
                padding: 0;
                margin: 0;

                  &:last-child {
                    margin-right: 0;
                }  
            }

            &__item {
                margin-right: 24px;
                font-size: 16px;
                color: rgba(17, 17, 17, 0.48);

                    &:hover {
                        color: #111111;
                    }                   
            }

            &__link {
                text-decoration: none;
                font-style: normal;
                font-weight: normal;
                font-size: inherit;
                color: inherit;            
                line-height: 24px;  
                padding-bottom: 35px; 
                    &--active {
                        border-top-width: 6px;
                        color: #111111;
                        box-shadow: inset 0px -2px 0px #6E41E2;
                    }              
            }

            &__profile {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            &__user-name {
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 24px;
                color: #6E41E2;
                margin-right: 12px;
            }
    }

    .info {
        text-align: left;
        padding-top: 40px;
        padding-left: 51px;
        padding-bottom: 32px;
        max-width: 724px;

            &__heading {
                font-style: normal;
                font-weight: bold;
                font-size: 40px;
                line-height: 48px;
                margin:0;
                margin-bottom: 10px;
            }

            &__description {
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 24px;
                margin:0;
            }
    }

    .main-filter {
        height: 56px;
        background-color: grey;
        padding-left: 51px;
        padding-right: 51px;
    }

    .main-content {
        padding-left: 51px;
        padding-right: 51px;
        display: flex;
        justify-content: space-between;
    }

    .post {
        min-width: 400px;
        height: 347px;
    }
</style>