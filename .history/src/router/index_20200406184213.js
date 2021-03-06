import Vue                        from 'vue';
import Router                     from 'vue-router';
import MainPageComponent          from '@/components/MainPage';

Vue.use(Router);

const router = new VueRouter({
    routes: [

      {
        path: '/main-page',
        name: 'mainPage',
        component: MainPageComponent,
      },
    ]
  });

export default router;
