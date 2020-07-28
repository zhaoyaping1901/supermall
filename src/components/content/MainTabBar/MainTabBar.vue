<template>
	<div>
		<tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="@/assets/img/tabbar/home.png">
        <img slot="item-active-icon" src="@/assets/img/tabbar/home_select.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="@/assets/img/tabbar/search.png">
        <img slot="item-active-icon" src="@/assets/img/tabbar/search_select.png">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="@/assets/img/tabbar/order.png">
        <img slot="item-active-icon" src="@/assets/img/tabbar/order_select.png">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="@/assets/img/tabbar/user.png">
        <img slot="item-active-icon" src="@/assets/img/tabbar/user_select.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
	</div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
export default {
  name: 'mainTabBar',
  components: {
  	TabBar,TabBarItem
  }
}
</script>

<style scoped>

</style>
