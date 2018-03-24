<template>
  <el-row type="flex" align="middle" class="login-bg">
    <el-col :span="8" :offset="8" class="login-wrap">
      <el-row>
        <el-col :span="24" class="login-title">WEB系统</el-col>
      </el-row>
      <el-row>
        <el-col :span="16" :offset="4">
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item prop="username">
              <el-input class="login-input" autocomplete="on" v-model="form.username" prefix-icon="iconfont icon-iconzh1" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input class="login-input" type="password" v-model="form.password" prefix-icon="iconfont icon-lock" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login()"  v-loading="listLoading">登录</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default{
  name: 'login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      listLoading:false,
      dialogVisible: true,
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    open() {
      this.$message({
        showClose: true,
        type:'error',
        message: '账号或密码错误！'
      });
    },
    login () {
      if (this.form.username == '' || this.form.password == '') {
        return;
      }
      this.listLoading = true;
      this.$refs.form.validate(valid => {
        if (valid) {
          let url = 'AccountManager/MobileLogin';
          let data = {
            Params: {
              AccountName: "90087243", 
              AccountPwd: "96e79218965eb72c92a549dd5a330112", 
              tci_id: 5071
            }
          }
          this.$http.post(url,data).then(response => {
           if (response.data.Flag == '1') {
             localStorage.setItem('Token', response.data.Data.Token);
             this.$router.push('/main/child1');
           } else {
              this.open();
           }
          }, response => {
             this.open();
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.el-form-item{
  margin-bottom:30px;
}
.login-bg{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: 100% auto;
  background:#2d3a4b;
}
.login-wrap{
  padding: 50px 0 30px;
}
.login-title{
  padding-bottom:40px;
  font-size: 26px;
  color: #fff;
  text-align: center;
}
.el-button{
  width: 100%;
}
.el-input__inner{
  background: transparent;
}

input{
  width:200px !important;
}
</style>