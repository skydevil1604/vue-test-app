import Vue                        from 'vue';
import VueRouter                     from 'vue-router';
import MainPageComponent          from '@/components/MainPage';
import AuthenticationForm         from '@/components/AuthenticationForm';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [

      {
        path: '/main-page',
        name: 'mainPage',
        component: MainPageComponent,
      },
      {
        path: '/',
        name: 'authenticationForm',
        component: AuthenticationForm,
      },
    ]
  });

export default router;
