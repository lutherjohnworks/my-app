import Vue from 'vue'
import VueRouter from 'vue-router'
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
    path: "/authentication",
    children: [
      {
        name: "Login",
        path: "/authentication/login",
        component: () => import("@/views/Authentication/Login"),
      },
      {
        name: "Logout",
        path: "/authentication/logout",
        component: () => import("@/views/Authentication/Logout")
      }
    ]
  },
  {
    path: "/tables",
    children: [
      {
        name: "simpletable",
        path: "/tables/simpletables",
        component: () => import("@/views/Tables/simpletable"),
      }
    ]
  }

]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
