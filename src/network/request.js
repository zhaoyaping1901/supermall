import axios from 'axios'

export function request(config){
	//1、创建axios实例
	const instance = axios.create({
		baseURL:'http://127.0.0.1:3000',
		timeout:5000
	})

	// 2、axios的拦截器
	// 请求拦截
	instance.interceptors.request.use(config =>{
		return config
		// 1、比如config中的一些信息不符合服务器的要求
		// 2、比如每次发送网络请求时，都希望界面中显示的loading图标
		// 3、某些网络请求（比如登录（token）），必须携带一些特殊的信息
	},err => {
		console.log(err)
	})

	// 响应拦截
	instance.interceptors.response.use(res => {
		return res.data
	},err => {
		console.log(err)
	})

	return instance(config)
}




























