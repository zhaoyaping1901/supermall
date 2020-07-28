<template>
  <div class="home">
  	<nav-bar class="home-nav">
  		<div slot="_center">购物街</div>
  	</nav-bar>
    <my-swiper :swipers="swipers" :swiperOptions="swiperOptions"></my-swiper>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import { getHomeMultation } from '@/network/home'
import MySwiper from '@/components/common/swiper/MySwiper'

export default {
  name: 'Home',
  components: {
    NavBar,MySwiper
  },
  data () {
    return {
      swipers:[],
      swiperOptions: {
    　　observer:true,//修改swiper自己或子元素时，自动初始化swiper 
    　　observeParents:true,//修改swiper的父元素时，自动初始化swiper 
        loop:true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
        // Some Swiper option/callback...
      }
    }
  },
  created(){
    
  },
  mounted () {
    var that = this;
    getHomeMultation().then(res => {
      console.log(res);
      this.$nextTick(() => {
        that.swipers = res;
      })
      
    }).catch(err => {
      console.log(err)
    })
      //this.swiper.slideTo(3, 1000, true)
  },
  computed: {

  }
}
</script>
<style scoped>
	.home-nav{
		background-color:var(--color-tint);
		color:#fff;
	}
</style>