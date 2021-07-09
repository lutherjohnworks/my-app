import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from "vuetify/es5/services/goto";
import Todo from '../views/Todo.vue'
import About from '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/form',
    name: 'Form',
    component: () => import("@/views/Forms/Form")
  },
  {
    path: "/authentication",
    redirect: "/authentication/login",
    component: () => import("@/layouts/SecondLayout"),
    children: [
      {
        path: "/authentication/login",
        name: "Login",        
        component: () => import("@/views/Authentication/Login"),
      },
      {
        path: "/authentication/logout",
        name: "Logout",        
        component: () => import("@/views/Authentication/Logout")
      }
    ]
  },
  {
    path: "/projects",
    redirect: "/projects/projects",
    component: () => import("@/layouts/SecondLayout"),
    children: [
      {
        path:'/projects/projects',
        name: 'Projects',
        component: () => import("@/views/Projects/Projects")
      },
    ]
  },
  {
    path: "/tables",
    redirect: "/tables/simpletable",
    component: () => import("@/layouts/SecondLayout"),
    children: [
      {
        path: "/tables/simpletable",
        name: "simpletable",        
        component: () => import("@/views/Tables/SimpleTable"),
      }
    ]
  },
  
    

]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
  routes
});

import NProgress from "nprogress";

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start(800);
  }
  next();
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});


export default router
