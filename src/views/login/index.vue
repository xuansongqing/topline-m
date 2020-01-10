<template>
  <div class="login-page">
    <!-- 导航栏 -->
    <van-nav-bar title="登录"/>
    <!-- 登陆表单 -->
    <ValidationObserver ref="form">
      <!-- //name 配置验证字段的名称 -->
      <!-- //rules 验证规则 -->
      <ValidationProvider name="手机号" rules="required">
      <van-field
       required
       clearable
       label="手机号"
       placeholder="请输入手机号"
       v-model="user.mobile"/>
      </ValidationProvider>
      <ValidationProvider name="验证码" rules="required">
        <van-field
          label="验证码"
          placeholder="请输入验证码"
          required
          v-model="user.code">
          <van-count-down
            v-if="isCountDown"
            slot="button"
            :time="1000*60"
            format="ss s"
            @finish="isCountDown=false"
          />
          <van-button
          v-else
          slot="button"
          size="small"
          type="primary" @click="sendSmsCode">发送验证码</van-button>
        </van-field>
      </ValidationProvider>
    </ValidationObserver>
    <div class="login-btn-container">
      <van-button type="info" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login, getSmsCode } from '@/api/user'
export default {
  name: 'login-page',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      },
      isCountDown: false // 倒计时默认不显示
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLogin () {
      // 1.获取表单数据
      const user = this.user
      // 2.表单验证(完事了再说)
      const success = await this.$refs.form.validate()
      if (!success) {
        // console.log('验证失败')
        // return

        setTimeout(() => {
          const errors = this.$refs.form.errors
          // find遍历数组  Object.values(errors)取出对象值，Object.keys(errors)去除对象键名
          const item = Object.values(errors).find(item => {
            return item[0]
          })
          this.$toast(item[0])
          // for循环
          // for (let key in errors) {
          //   const item = errors[key]
          //   if (item[0]) {
          //     this.$toast(item[0])
          //     return
          //   }
          // }
        }, 100)
        return
      }
      // 验证通过转圈圈
      this.$toast.loading({
        message: '登陆中...',
        forbidClick: true,
        loadingType: 'spinner'
      })
      // 3.请求提交
      try {
        const res = await login(user)
        console.log(res)
        // 登陆成功
        this.$toast.success('登陆成功')
      } catch (err) {
        // console.log('登陆失败', err)
        this.$toast.fail('登陆失败')
      }
      // 4.根据接口返回结果执行后续处理
    },
    async sendSmsCode () {
      // 1.获取手机号
      const { mobile } = this.user
      // 校验手机号

      // 发送验证吗
      try {
        // 显示倒计时
        this.isCountDown = true

        // 发送
        await getSmsCode(mobile)
      } catch (err) {
        // console.log(err)
        // 发送失败，关闭倒计时
        this.isCountDown = false

        if (err.response.status === 429) {
          this.$toast('请勿频繁发送')
          return
        }

        this.$toast('发送失败')
      }
    }
  }
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
