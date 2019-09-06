<template>
  <div class="page--login">
    <div>
        <div>
          <h3>上帝登陆</h3>
          <el-form :model="dataForm" :rules="dataRule" ref="dataForm" status-icon>
            <el-form-item prop="userName">
              <el-input v-model="dataForm.userName" placeholder="帐号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="dataForm.password" type="password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item prop="captcha">
              <el-row :gutter="20">
                <el-col :span="14">
                  <el-input v-model="dataForm.captcha" placeholder="验证码">
                  </el-input>
                </el-col>
                <el-col :span="10">
                  <img :src="captchaPath" @click="getCaptcha()" alt="">
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="dataFormSubmit()">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
          dataForm: {
            userName: "",
            password: "",
            captcha: "",

          }
      }
    },
    created () {

    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .page--login {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(38, 50, 56, .6);
    overflow: hidden;
  &:before {
     position: fixed;
     top: 0;
     left: 0;
     z-index: -1;
     width: 100%;
     height: 100%;
     content: "";
     background-image: url(~@/assets/cute.jpg);
     background-size: cover;
   }
  }
</style>
