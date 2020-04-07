import Vue                        from 'vue';
import Router                     from 'vue-router';
import MainPageComponent          from '@/components/MainPage';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [

      {
        path: '/main-page',
        name: 'mainPage',
        component: MainPageComponent,
      },
    ]
  });

export default router;
