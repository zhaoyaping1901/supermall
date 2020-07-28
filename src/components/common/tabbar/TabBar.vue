<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>

export default {
  name: 'TabBar',
  components: {

  }
}
</script>

<style scoped>
#tab-bar{
	position:fixed;
	left:0;
	right:0;
	bottom:0;
	height:49px;
	display:flex;
	background-color:#f6f6f6;
	padding-top:3px;
}

</style>
