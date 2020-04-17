<template>
    <div class="manage_login">
      <div class="manage_login_content">
        <el-form ref="form" :model="form" label-width="70px" style="text-align: center; margin-top: 20px;">
          <el-form-item label="用户名；">
            <el-input v-model="form.name" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="form.password" prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登 录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      nameList: {
        name: 'admin',
        password: 'admin123'
      },
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.form.name === this.nameList.name && this.form.password === this.nameList.password) {
        console.log('正确')
      } else {
        console.log('重新登录')
      }
    }
  },
  name: 'Login'
}
</script>

<style lang="scss" scoped>
  .manage_login {
    width: 100%;
    height: 100%;
    background: url("../../assets/login-bg.jpg");
    background-size: 100%;
    position: relative;
  }
  .manage_login_content {
    width: 400px;
    height: 200px;
    background: #fff;
    position: absolute;
    right: 100px;
    top: 40%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 50px;
    border-radius: 10px;
  }
</style>
