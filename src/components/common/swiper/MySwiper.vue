<template>
	<div class="mySwiper">
		<swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in swipers">
        <img style="width:100%;display:block;height:230px" :src="item.goodsImg">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import '@/assets/css/swiper.css'
export default {
  name: 'mySwiper',
  components: {
		Swiper,
		SwiperSlide
  },
  props:{
		swipers:{
			type:Array,
			value:[]
		},
		swiperOptions:{
			type:Object,
			value:{}
		}
  },
  data(){
  	return {
  		
  	}
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.$swiper
    // }
  }
}
</script>

<style scoped>

</style>
