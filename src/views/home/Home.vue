<template>
  <div class="home">
  	<nav-bar class="home-nav">
  		<div slot="_center">购物街</div>
  	</nav-bar>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in swipers">
        <img style="width:100%;display:block;height:230px" :src="item.goodsImg">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import { getHomeMultation } from '@/network/home'

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import '@/assets/css/swiper.css'
export default {
  name: 'Home',
  components: {
    NavBar,
    Swiper,
    SwiperSlide
  },
  created(){
    getHomeMultation().then(res => {
      console.log(res)
      this.swipers = res;
    }).catch(err => {
      console.log(err)
    })
  },
  mounted () {
      console.log('Current Swiper instance object', this.swiper)
      //this.swiper.slideTo(3, 1000, true)
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
  data () {
    return {
      swipers:[],
        swiperOptions: {
          loop:true,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination'
          }
          // Some Swiper option/callback...
        }
    }
  }
}
</script>
<style scoped>
	.home-nav{
		background-color:var(--color-tint);
		color:#fff;
	}
</style>