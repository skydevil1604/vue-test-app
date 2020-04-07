<template>
    <section class="main-page">
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
    </section>
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
</style>