<template>
  <div class="all">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <div style="margin: 30px"><img src="../../../static/images/image/pin.png" height="180" width="180"/></div>
          <ul class="list-group">
              <li class="list-group-item">
                <router-link to="/usercenter">基本信息</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/myresume">简历中心</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="">我的收藏</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="">我的申请</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="">我的申请</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="">我的申请</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="">我的申请</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="">我的申请</router-link>
              </li>
          </ul>
        </div>
        <div class="col-md-2">
          <img class="a1" id="base_avatar" src="../assets/images/man.png" alt="头像" width="85" height="104">
        </div>
      <div class="col-md-8">
        <div class="col-md-12">
          <div class="col-md-6 c c2">
            <div class="col-md-3"><span>姓名<i>*</i></span></div>
            <div class="col-md-9">
              <input id="base_name" class="ef" maxlength="" value="" type="text" v-model="names" v-on:blur="a">
              <button><span class="ic pointer" id="namecheck">保存</span></button>
              <button><span class="ic pointer" id="naducation">修改</span></button>

            </div>
            <div class="err" id="base_name_warning" style="display:none"><em class="icons"></em></div>
          </div>
          <div class="col-md-6">
            <div class="col-md-3"><span>性别<i>*</i></span></div>
            <div class="col-md-9 txt">
              <input id="user_name" class="ef" placeholder="男/女" maxlength="" value="" type="text" v-model="se"
                     v-on:blur="b">
              <button><span class="ic pointer" id="gendercheck">保存</span></button>
              <button><span class="ic pointer" id="namedd">修改</span></button>
            </div>
          </div>
          <div class="err" id="nameddd" style="display:none"><em class="icons"></em></div>
        </div>
        <div class="col-md-12">
          <div class="col-md-6 c c2">
            <div class="col-md-3"><span>出生日期<i>*</i></span></div>
            <div class="col-md-9">
              <input class="ef" id="base_birthday_input" placeholder="年-月-日" value="" type="text" v-model="birt"
                     v-on:blur="c">
              <button><span class="ic pointer" id="birthcheck">保存</span></button>
              <button><span class="ic i_calendar" id="datet">修改</span></button>
            </div>
            <div class="err" id="base_birthday_warning" style="display:none"><em class="icons"></em></div>
          </div>
          <div class="col-md-6">
            <div class="col-md-3"><span>工作经验<i>*</i></span></div>
            <div class="c c4" float-index="false">
              <div class="col-md-9 txt">
                <input class="ef" id="base_workyear_input" placeholder="暂无/一年/两年/三年..." value="" type="text"
                       v-model="wor" v-on:blur="d">
                <button><span class="ic pointer" id="workyearcheck">保存</span></button>
                <button><span class="ic pointer" id="workk">修改</span></button>
              </div>
            </div>
            <div class="err" id="base_workyear_warning" style="display:none"><em class="icons"></em>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="col-md-6 c c2">
            <div class="col-md-3"><span>手机<i>*</i></span></div>
            <div class="col-md-9">
              <input class="ef c_bbb" id="tele" value="" type="text" v-model="tell" v-on:blur="e">
              <button><span class="ic pointer" id="telcheck">保存</span></button>
              <button><span class="ic pointer" id="mobilepointer">修改</span></button>
            </div>
            <div class="err" id="base_mobile_warning" style="display:none"><em class="icons"></em></div>
          </div>
          <div class="col-md-6">
            <div class="col-md-3"><span>学历<i>*</i></span></div>
            <div class="col-md-9 txt">
              <input class="ef" id="selectionlist" placeholder="大专/本科/硕士..." type="text" v-model="adv"
                     v-on:blur="f">
              <button><span class="ic pointer" id="reccheck">保存</span></button>
              <button><span class="ic pointer" id="education">修改</span></button>
            </div>
          </div>
          <div class="err" id="base_csituation_warning" style="display:none"><em class="icons"></em>
          </div>
        </div>
        <div class="col-md-12">
          <div class="col-md-6 c c2">
            <div class="col-md-3"><span>邮箱<i>*</i></span></div>
            <div class="col-md-9">
              <input class="ef" id="email" value="" type="text" v-model="ema" v-on:blur="g">
              <button><span class="ic pointer" id="emailcheck">保存</span></button>
              <button><span class="ic pointer" id="emailpointer">修改</span></button>
            </div>
            <div class="err" id="base_email_warning" style="display:none"><em class="icons"></em></div>
          </div>
          <div class="col-md-6">
            <div class="col-md-3"><span>居住地<i>*</i></span></div>
            <div class="col-md-9 txt">
              <input class="ef" maxlength="" id="base_area_input" placeholder="省-市-县" value="" v-model="pac"
                     v-on:blur="h">
              <button><span class="ic pointer" id="adresscheck">保存</span></button>
              <button><span class="ic i_block pointer" id="base_area_click">修改</span></button>
            </div>
          </div>
          <div class="err" id="base_area_warning" style="display:none"><em class="icons"></em></div>
        </div>
      </div>

      <div class="moto">
        <div class="col-md-2"></div>
        <div class="col-md-12">
          <div class="col-md-3"></div>
          <div class="col-md-9">
            <span>自我评价</span>
            <div class="txt">
              <textarea class="b1" name="" id="me" cols="70" rows="3"></textarea>
            </div>
          </div>
          <div class="err" id="base_address_warning" style="display:none"><em class="icons"></em></div>
        </div>
        <div class="col-md-12">
          <div class="col-md-3">

          </div>
          <div class="col-md-9">
            <span>专业技能</span>
            <div class="txt">
              <textarea class="b1" name="" id="can" cols="70" rows="3"></textarea>
            </div>
            <div class="err" id="base_work_warning" style="display:none"><em class="icons"></em></div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="col-md-3">

          </div>
          <div class="col-md-9">
            <span>学习经历</span>
            <div class="txt">
              <textarea class="b1" name="" id="after" cols="70" rows="3"></textarea>
            </div>
          </div>
          <div class="err" id="base_aftering_warning" style="display:none"><em class="icons"></em></div>
        </div>
        <div class="col-md-12">
          <div class="col-md-3">

          </div>
          <div class="col-md-9">
            <span>从业经历</span>
            <div class="txt">
              <textarea class="b1" name="" id="afterr" cols="70" rows="3"></textarea>
            </div>
          </div>
          <div class="err" id="base_aftering_warningg" style="display:none"><em class="icons"></em></div>
        </div>
      </div>
      <div class="col-md-7"></div>
      <div class="col-md-2">
        <button type="button" class="p_but" id="basedetail_save" style="font-size: 2em">保存</button>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    name: 'usercenter',
    data() {
      return {
        names: '',
        se: '',
        birt: '',
        wor: '',
        tell: '',
        adv: '',
        ena: '',
        myresumes: []

      }
    },
    mounted: function () {

      this.getJianli();

    },
    methods: {
      // getJianli: function () {
      //   axios.get('http://127.0.0.1:8000/resume/getResumebyid/').then(function (response) {
      //     alert(request)
      //     vm.myresume = response.data;
      //     console.log(vm.myresume);
      //     // let resumeda=res;
      //   })
      // },
      a() {
        var p = /^[\u4E00-\u9FA5A-Za-z]+$/;
        if (!this.names) {
          alert('姓名不能为空');
        }
        else if (!p.test(this.names)) {
          alert('姓名格式不正确');
        }
      },
      b() {
        var q = /^["男"|"女"]$/;
        if (!this.se) {
          alert('需要填写性别');
        }
        else if (!q.test(this.se)) {
          alert('性别格式不正确');
        }
      },
      c() {
        var r = /^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/;
        if (!this.birt) {
          alert('需要填写出生日期');
        }
        else if (!r.test(this.birt)) {
          alert('出生日期格式不正确');
        }
      },
      d() {
        if (!this.wor) {
          alert('需要填写工作经验');
        }
      },
      e() {
        var s = /^1[34578]\d{9}$/;
        if (!this.tell) {
          alert('需要填写联系电话');
        }
        else if (!s.test(this.tell)) {
          alert('电话号码格式不正确');
        }
      },
      f() {
        if (!this.adv) {
          alert('需要填写学历');
        }
      },
      g() {
        var t = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        if (!this.ema) {
          alert('需要填写邮箱');
        }
        else if (!t.test(this.ema)) {
          alert('邮箱格式不正确');
        }
      },
      h() {
        if (!this.pac) {
          alert('请填写地址')
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul li {
    list-style: none;
  }

  .col-md-6 {
    font-size: 1.2em;
    margin-top: 20px;
  }

  .col-md-8 {
    margin-top: 50px;
  }

  .ef {
    margin-left: -30px;
  }

  .a1 {
    margin-top: 50px;
    margin-left: 80px;
  }

  i {
    color: red;
  }

  .all {
    width: 1110px;
    height: auto;
    background-image: url("../assets/images/bg.png");
  }

  .ds {
    border: 2px solid #000000;
  }

  .b1 {
    font-size: 2em;
  }

  .moto {
    margin-top: -300px;
  }
  .list-group{
    margin-top: 50px;
    margin-left: 35px;
    background-color: #4078c0;
  }
  .list-group-item:hover{
    font-weight: bold;
    color: #ff6000;
    background-color: #fff;
    border: 1px solid #eee;
    border-right-color: #fff;
    border-left: 2px solid #ff6000;
    font-size: 1.2em;
  }

</style>
