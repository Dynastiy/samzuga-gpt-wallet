import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from "./modules/auth";

Vue.use(VueRouter)

const routes = [
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes.concat(Auth)
})

export default router
