<template>
    <div class="authentication">
        <h1 class="authentication__header">Profile</h1>
        <Tabs>
            <Tab name="Registration">
                <RegistrationComponent />
            </Tab>
            <Tab name="Sign in">
                <LoginComponent :validate="false"/>
            </Tab>
        </Tabs>
    </div>
</template>
<script>
import Tabs from '@/components/Tabs';
import Tab from '@/components/Tab';
import LoginComponent from '@/components/Login';
import RegistrationComponent from '@/components/Registration';

export default {
    name: 'AuthenticationForm',
    components: {
        Tabs,
        Tab,
        LoginComponent,
        RegistrationComponent,
    }
}
</script>

<style lang="scss" scoped>
    .authentication {
        margin: auto;
        width: 474px;
        background: #FFFFFF;
        box-shadow: 0px 4px 16px rgba(51, 51, 51, 0.08), 0px 4px 4px rgba(51, 51, 51, 0.04);
        border-radius: 8px;
        padding: 32px;

            &__header {
                text-align: left;
                font-style: normal;
                font-weight: bold;
                font-size: 32px;
                line-height: 40px;
                margin: 0;
            }
    }

    @media screen and(max-width: 480px){
      .authentication {
        width: 100%;
        padding: 20px;
        padding-top: 5px;
      }
  }
</style>