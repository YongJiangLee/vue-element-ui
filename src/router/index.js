import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import main from '@/pages/main'
import child1 from '@/pages/child1'
import child2 from '@/pages/child2'
import child3 from '@/pages/child3'
Vue.use(Router)

var router =  new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/main',
      name: 'mainvue',
      component: main,
      meta: {
          requireAuth: true,  // 需要登录
      },
      children:[
        {
          path: '/main/child1',
          name: 'child1',
          component: child1
           
        },
        {
          path: '/main/child2',
          name: 'child2',
          component: child2,
        },
        {
          path: '/main/child3',
          name: 'child3',
          component: child3,
        }
      ]
    }
  ]
})

//路由拦截
router.beforeEach((to, from, next) => {
    let Token = localStorage.getItem('Token'); 
    if (to.meta.requireAuth) {  
        if (Token) {  
            next();
        }
        else {
            next({
                path: '/',
                query: {redirect: to.fullPath}  
            })
        }
    }
    else {
        next();
    }
})

export default router;



