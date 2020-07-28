<template>
	<div class="tab-bar-item" v-on:click="tabbarChange">
		<slot v-if="!isActive" name="item-icon"></slot>
		<slot v-else name="item-active-icon"></slot>
			<div :style="{color:activeStyle}">
			<slot name="item-text"></slot>
		</div>
		
	  </div>
</template>

<script>

export default {
  name: 'TabBarItem',
  props:{
  	path:String,
  	activeColor:{
  		type:String,
  		default:'red'
  	}
  },
  data(){
  	return{
  		
  	}
  },
  components: {

  },
  computed:{
  	isActive(){
  		return this.$route.path.indexOf(this.path) != -1
  	},
  	activeStyle(){
  		return this.isActive?this.activeColor:''
  	}
  },
  methods:{
  	tabbarChange(){
  		this.$router.replace(this.path)
  	}
  }
}
</script>

<style scoped>
#tab-bar .tab-bar-item{
	flex:1;
	text-align:center;
	font-size:14px;
}
#tab-bar .tab-bar-item img{
	display: block;
	width: 24px;
	height: 24px;
	margin:0 auto;
}
#tab-bar .tab-bar-item .active{
	color:#d00
}
</style>
