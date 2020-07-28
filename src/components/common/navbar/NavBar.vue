<template>
	<div class="nav-bar">
		<div class="_left">
			<slot name="_left"></slot>
		</div>
		<div class="_center">
			<slot name="_center"></slot>
		</div>
		<div class="_right">
			<slot name="_right"></slot>
		</div>
	</div>
</template>

<script>

export default {
  name: 'NavBar',
  components: {

  }
}
</script>

<style scoped>
.nav-bar{
	display:flex;
	text-align:center;
	line-height:50px;
}
.nav-bar div{
	height:50px;
}
._left,._right{
	width:20%;
}
._center{
	flex:1;
}
</style>
