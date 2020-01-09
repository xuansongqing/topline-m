<template>
  <div class="login-page">
    <!-- 导航栏 -->
    <van-nav-bar title="登录"/>
    <!-- 登陆表单 -->
    <van-cell-group>
      <van-field required clearable label="手机号" placeholder="请输入手机号"/>
      <van-field label="验证码" placeholder="请输入验证码" required>
      <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="login-btn-container">
      <van-button type="info">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-page'
}
</script>

<style lang="less" scoped>
  .login-page {
    .login-btn-container {
      padding: 20px;
      .van-button {
        width: 100%;
        background: #6db4fb
      }
    }
  }

</style>
