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
            <input class="search" type="search" name="search" id="search" placeholder="Search">
            <select name="select" id="select"></select>
        </section>

        <section class="main-content">
            <div class="post">
                <div class="post__header post__header--first-post">
                    <div class="post__progress-bar">
                        <div class="post__progress-bar-fill" style="width: 12%">
                            <span class="post__progress-count">Progress: 12%</span>
                        </div>        
                    </div>
                    <div class="post__author-photo">
                        <img src="../assets/ava1.png" alt="">
                        <span class="post__author-name">Alexa</span>
                    </div>
                </div>
                <div class="post__title">Take exam in Mathematics at 100 points</div>
                <div class="post__info">
                    <span class="post__lessons">12 lessons</span>
                    <span class="post__tasks">12 tasks</span>
                    <span class="post__minutes">30 minutes</span>
                </div>
                <div class="post__button-wrapper">
                    <button class="post__button post__button--main">Continue</button>
                    <button class="post__button post__button--secondary">More</button>
                </div>
            </div>
            <div class="post">
                <div class="post__header post__header--second-post">
                    <div class="post__progress-bar">
                        <div class="post__progress-bar-fill" style="width: 12%">
                            <span class="post__progress-count">Progress: 12%</span>
                        </div>        
                    </div>
                    <div class="post__author-photo">
                        <img src="../assets/ava2.png" alt="">
                        <span class="post__author-name">Kathryn Nguyen</span>
                    </div>
                </div>
                <div class="post__title">How buy new clothes without money in USA</div>
                <div class="post__info">
                    <span class="post__lessons">12 lessons</span>
                    <span class="post__tasks">12 tasks</span>
                    <span class="post__minutes">30 minutes</span>
                </div>
                <div class="post__button-wrapper">
                    <button class="post__button post__button--main">Continue</button>
                    <button class="post__button post__button--secondary">More</button>
                </div>
            </div>
            <div class="post">
                <div class="post__header post__header--third-post">
                    <div class="post__progress-bar">
                        <div class="post__progress-bar-fill" style="width: 12%">
                            <span class="post__progress-count">Progress: 12%</span>
                        </div>        
                    </div>
                    <div class="post__author-photo">
                        <img src="../assets/ava3.png" alt="">
                        <span class="post__author-name">Diane Miles</span>
                    </div>
                </div>
                <div class="post__title">Why people hate me?</div>
                <div class="post__info">
                    <span class="post__lessons">12 lessons</span>
                    <span class="post__tasks">12 tasks</span>
                    <span class="post__minutes">30 minutes</span>
                </div>
                <div class="post__button-wrapper">
                    <button class="post__button post__button--main">Continue</button>
                    <button class="post__button post__button--secondary">More</button>
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
        padding-bottom: 20px;
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
        display: flex;
        padding-left: 51px;
        padding-right: 51px;
        position: relative;
            &::before {
                content: '';
                position: absolute;
                top: 20px;
                left: 67px;
                width: 16px;
                height: 16px;
                background-image: url('../assets/search-icon.svg');
            }
    }

    .search {
        background: #FFFFFF;
        box-shadow: 0px 4px 16px rgba(51, 51, 51, 0.08), 0px 4px 4px rgba(51, 51, 51, 0.04);
        border-radius: 4px;
        border: none;
        outline: none;
        padding-left: 44px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        max-width: 985px;
        width: 100%;
        @include placeholder-move-on-focus;
    }

    .main-content {
        padding-left: 51px;
        padding-right: 51px;
        display: flex;
        justify-content: space-between;
        padding-top: 32px;
        flex-wrap: wrap;
        margin-bottom: 77px;
    }

    .post {
        width: 400px;
        border-radius: 8px;
        position: relative;
        box-shadow: 0px 4px 16px rgba(51, 51, 51, 0.08), 0px 4px 4px rgba(51, 51, 51, 0.04);
        transition: all 0.6s ease;
            &:hover {
                transform: scale(1.05);
            }

            &__header {
                height: 134px;
                border-top-right-radius: 8px;
                border-top-left-radius: 8px;
                position: relative;
                margin-bottom: 24px;
                    &--first-post {
                        background-image: url('../assets/first-post-image.jpg');
                    }
                    &--second-post {
                        background-image: url('../assets/second-post-image.jpg');
                    }
                    &--third-post {
                        background-image: url('../assets/third-post-image.jpg');
                    }

                    &::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(180deg, rgba(17, 17, 17, 0.4) 0%, rgba(17, 17, 17, 0.72) 93.75%);  
                        z-index: 1;
                        border-top-right-radius: 8px;
                        border-top-left-radius: 8px;
                    }
            } 

            &__progress-bar {
                width: 100%;
                background-color: transparent;
                border-top-right-radius: 8px;
                border-top-left-radius: 8px;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
            }

            &__progress-bar-fill {
                display: block;
                height: 24px;
                background-color: #27AE60;
                border-top-right-radius: 8px;
                border-top-left-radius: 8px;
                padding-top: 3px;
            }

            &__progress-count {
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                line-height: 20px;
                color:#ffffff;
                margin-left: 20px;
                width: 86px;
                display: block;
            }

            &__author-photo {
                position: absolute;
                left: 20px;
                bottom: -8px;
                width: 183px;
                height: 56px;
                z-index: 2;
                display: flex;
                align-items: center;
            }

            &__author-name {
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 24px;
                color:#ffffff;
                margin-left: 12px;
            }

            &__title {
                font-size: 20px;
                line-height: 28px;
                color: #111111;
                padding-left: 20px;
                padding-right: 20px;
                font-weight: bold;
                text-align: left;
                margin-bottom: 17px;
            }

            &__info {
                display: flex;
                justify-content: space-between;
                margin-bottom: 32px;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 24px;
                color: #111111;
                padding-left: 20px;
                padding-right: 20px;
                margin-bottom: 96px;
            }

            &__lessons {
                padding-left: 28px;  
                position: relative;   
                    &::before {
                        content: '';
                        top: 3px;
                        left: 0;
                        width: 20px;
                        height: 14px;
                        position: absolute;
                        background-image: url('../assets/lessons-logo.svg');
                    }
            }

            &__tasks {
                padding-left: 28px;  
                position: relative;   
                    &::before {
                        content: '';
                        top: 3px;
                        left: 0;
                        width: 16px;
                        height: 17px;
                        position: absolute;
                        background-image: url('../assets/tasks-logo.svg');
                    }
            }

            &__minutes {
                padding-left: 28px;  
                position: relative;   
                    &::before {
                        content: '';
                        top: 4px;
                        left: 0;
                        width: 18px;
                        height: 14px;
                        position: absolute;
                        background-image: url('../assets/minutes-logo.svg');
                    }
            }
            &__button-wrapper {
                display: flex;
                justify-content: flex-start;
                position: absolute;
                bottom: 20px;
            }

            &__button {
                color: #6E41E2;
                padding: 10px 20px 10px 20px;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 24px;
                border-radius: 4px;
                background-color: #ffffff;
                outline: none;
                border: none;
                    &--main {
                        border: 1px solid #6E41E2;
                        margin-right: 8px; 
                        margin-left: 20px;
                        &:hover {
                            background-color: #6E41E2;
                            color: #ffffff;
                        }    
                    }
            }
    }


</style>