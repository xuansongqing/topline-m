<template>
  <div class="tab-bar">
      <!-- 子路由出口 -->
      <router-view></router-view>
      <!-- 底部标签栏 -->
    <van-tabbar route>
        <van-tabbar-item icon="wap-home-o" to='/'>首页</van-tabbar-item>
        <van-tabbar-item icon="coupon-o" to='/coupon'>问答</van-tabbar-item>
        <van-tabbar-item icon="video-o" to='/video'>视频</van-tabbar-item>
        <van-tabbar-item icon="user-o" to='/user'>
        {{ $store.state.user ? '我的' : '未登录' }}
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
