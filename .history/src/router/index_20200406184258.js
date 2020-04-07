import Vue                        from 'vue';
import VueRouter                     from 'vue-router';
import MainPageComponent          from '@/components/MainPage';

Vue.use(VueRouter);

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
