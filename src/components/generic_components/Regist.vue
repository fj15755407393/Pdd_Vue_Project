<template>
  <div class="container">
    <div class="header"></div>
    <div class="main">
      <div class="main-regist">
        <div class="regist-right">
          <div class="right-content">
            <div class="signup-h3">注册聘多多</div>
            <!--<span id="error" v-if="telephone_correct" >请输入正确的手机号</span>-->
            <!--<span id="error1" v-if="telephone_alraedy">手机号已注册，请直接登录</span>-->
            <div class="use-phone">
              <span>使用手机号注册</span>
            </div>
            <div class="i-want">
              <span class="cur" name="1" :class="{'isCur1':isEmoply1}" @click="isChangeem1">我是求职者</span>
              <span class="cur1" name="0" :class="{'isCur2':isEmoply2}" @click="isChangeem2">我是企业HR</span>
            </div>
            <div class="inpu" >
              <div class="user-telephone" :class="{'back':isBack}">
                <div class="phone">
                  <input type="text" name="phone1"  class="phone1" placeholder="手机号" maxlength="11" v-model="telephone" @click="changeBack" >
                  <a href="" v-if="telephone_correct">请输入正确的手机号</a>
                  <a href="" v-else v-text="telephone_tip"></a>
                </div>
                <div class="phone-logo">
                </div>
              </div>

              <div class="user-check" :class="{'back':isBack1}">
                <div class="u-check">
                  <input type="text" name="verifyCode" class="check1" placeholder="验证码" @click="changeBack1" v-model="checkcode">
                  <a  class="text-center" v-if="check_correct">请输入正确的验证码</a>
                  <a href="" v-else v-text="check_tip"></a>
                </div>
                <div class="u-check-logo"></div>
              </div>
              <div  class="random-code" id="random-code">
                <div class="code" @click="refreshCode">
                  <Identify  :identifyCode="identifyCode"></Identify>
                </div>

              </div>
              <div class="message-check" :class="{'back':isBack2}">
                <div class="me-check" >
                  <input type="password" name="password" class="check2" placeholder="密码" v-text="password" @click="changeBack2" v-model="password">
                  <a href="" v-if="password_correct">至少8位,至少包括字母,数字,特殊字符</a>
                  <a href="" v-else v-text="password_tip"></a>
                </div>
                <div class="me-check-logo"></div>
              </div>

            </div>
            <div class="chk-auto">
              <div class="check-agree">
                <input type="checkbox" id="chk_auto" checked>
                <label for="chk_auto" >
                  <span class="span-agree">同意聘多多<a href="">用户协议</a></span>
                </label>
              </div>
              <div class="check-login">
                <span class="span-agree">已有账户?<a href="#">[登录]</a></span>
              </div>
            </div>
            <div class="regist-btn">
              <button class="regist-free" type="submit" @click="regist">免费注册</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Identify from '../generic_components/Identify'
  import axios from 'axios';
  export default {
  name: 'Regist',
  data() {
    return {
      msg: '',
      telephone:'13956459579',
      checkcode:'',
      password:'13956459579',
      //------------
      identifyCodes: "1234567890",
      identifyCode: "",
      isEmoply1:false,
      isEmoply2:false,
      isBack:false,
      isBack1:false,
      isBack2:false,
      isDisabled:true,
      telephone_correct:false,
      telephone_tip:'',
      check_correct:false,
      check_tip:'',
      password_correct:false,
      password_tip:"",
      tel_flag:false,

    }
  },created:function(){
    this.debouncePoneAvailable= _.debounce(this.isPoneAvailable,1000)
    this.debouncePassword= _.debounce(this.isPassword,1000)
    this.debounceCheck= _.debounce(this.isCheck,1000)
    },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
          ];
      }
      console.log(this.identifyCode);
    },
    changeBack:function () {
      this.isBack=true;
      this.isBack1=false;
      this.isBack2=false;
    },
    changeBack1:function () {
      this.isBack1=true;
      this.isBack=false;
      this.isBack2=false;
    },
    changeBack2:function () {
      this.isBack=false;
      this.isBack1=false;
      this.isBack2=true;
    },
    isChangeem1:function(){
      this.isEmoply1=true;
      this.isEmoply2=false;
    },
    isChangeem2:function(){
      this.isEmoply2=true;
      this.isEmoply1=false;
    },
    isPoneAvailable:function(){
      console.log((/^[1][3,4,5,7,8][0-9]{9}$/.test(this.telephone)))
      if(!this.telephone){
        this.telephone_correct=false
      }else if (!(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.telephone))) {
        this.telephone_correct=true
      }
      else {
        this.tel_flag=false
        this.telephone_correct=false
      }
    },

    isPassword:function () {
      if (!this.telephone){
        this.password_correct=false
      } else if (this.password.length<=6) {
        this.password_correct=true
      }
      else {
        this.password_correct=false
      }
    },
    isCheck:function () {
      if (this.checkcode!==this.identifyCode){
        this.check_correct=true
      }
      else {
        this.check_correct=false;
        this.check_tip='';
      }
    },
    regist:function () {
        var flag=true;
        if (!this.telephone){
          this.telephone_tip='请输入手机号'
          flag=false
        }
        if (!this.password){
          this.password_tip='请设置密码'
          flag=false
        }
      if (!this.checkcode){
        this.check_tip='请输入验证码'
        flag=false
      }
        var vm=this;
        if (flag){
          axios.post('http://127.0.0.1:8000/user/isExist/',{
            'telephone':vm.telephone,
          })
            .then(function (response) {
              console.log(response.data.code);
              if (response.data.code=='208'){
                vm.telephone_ip='手机号已注册，请直接登录'
              }
              else if (response.data.code=='408') {
                axios.post('http://127.0.0.1:8000/user/regist/',{
                  'telephone':vm.telephone,
                  'password':vm.password
                })
                  .then(function (response) {
                    //判断是否接受到token
                    if(response && response.headers.token){
                      console.log(response);
                      console.log(response.headers);
                      // 存储token
                      sessionStorage.setItem('token',response.headers.token);

                    }

                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }

            })
            .catch(function (error) {
              console.log(error);
            });
        }

    }

  },
    watch: {
      telephone: function (newTel, oldTel) {
        console.log("执行了getTel");
        this.debouncePoneAvailable();
      },
      checkcode:function (newCheck) {
        console.log("执行了getCheck");
        this.debounceCheck();
      },
      password:function (newPassword) {
        console.log("执行了getPassword");
        this.debouncePassword();
      },
    },
    components:{
      Identify
    }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../../static/css/regist_login.css';
</style>
