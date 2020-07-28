import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home.vue')

Vue.use(VueRouter)

const routes = [
  {
		path:'/',
		redirect:'/home',
		meta:{
			title:'首页'
		}
	},
	{
		path:'/home',
		component:Home,
		meta:{
			title:'首页'
		}
	},
]

const router = new VueRouter({
  routes
})

export default router
