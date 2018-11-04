<template>


      <div class="content" >

        <div class="col-md-12">
          <div class="col-md-2" style="margin-left: 50px">
            <img class="a1" id="base_avatar" src="../../../static/images/image/man.png" alt="头像" width="85"
                 height="104">
          </div>
          <div class="col-md-7"><h3 style="font-size:2em;margin-top: 55px">欢迎来到聘多多</h3></div>
          <div class="col-md-2">
            <span style="text-align: right">
                <router-link to="/myresume" style="font-size: 1.3em">设置中心</router-link>
            </span>
          </div>
          <div class="col-md-12 " style="background-color: red">
          </div>
          <div class="col-md-12">
            <div class="col-md-6 c c2">
              <div class="col-md-3"><span>姓名<i>*</i></span></div>
              <div class="col-md-9">
                <input id="base_name" class="ef"  value="" type="text">
                <button><span class="ic pointer" id="namecheck">保存</span></button>
                <button><span class="ic pointer" id="naducation">修改</span></button>

              </div>
              <div class="err" id="base_name_warning" style="display:none"><em class="icons"></em></div>
            </div>
            <div class="col-md-6">
              <div class="col-md-3"><span>性别<i>*</i></span></div>
              <div class="col-md-9 txt">
                <input id="user_name" class="ef" placeholder="男/女" maxlength="" value="" type="text"
                >
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
                <input class="ef" id="base_birthday_input" placeholder="年-月-日" value="" type="text"
                >
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
                  >
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
                <input class="ef c_bbb" id="tele" value="" type="text">
                <button><span class="ic pointer" id="telcheck">保存</span></button>
                <button><span class="ic pointer" id="mobilepointer">修改</span></button>
              </div>
              <div class="err" id="base_mobile_warning" style="display:none"><em class="icons"></em></div>
            </div>
            <div class="col-md-6">
              <div class="col-md-3"><span>学历<i>*</i></span></div>
              <div class="col-md-9 txt">
                <input class="ef" id="selectionlist" placeholder="大专/本科/硕士..." type="text"
                >
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
                <input class="ef" id="email" value="" type="text">
                <button><span class="ic pointer" id="emailcheck">保存</span></button>
                <button><span class="ic pointer" id="emailpointer">修改</span></button>
              </div>
              <div class="err" id="base_email_warning" style="display:none"><em class="icons"></em></div>
            </div>
            <div class="col-md-6">
              <div class="col-md-3"><span>居住地<i>*</i></span></div>
              <div class="col-md-9 txt">
                <input class="ef" maxlength="" id="base_area_input" placeholder="省-市-县" value=""
                >
                <button><span class="ic pointer" id="adresscheck">保存</span></button>
                <button><span class="ic i_block pointer" id="base_area_click">修改</span></button>
              </div>
            </div>
            <div class="err" id="base_area_warning" style="display:none"><em class="icons"></em></div>
          </div>
        </div>
        <div class="moto">
          <div class="col-md-2"></div>
          <div class="col-md-12" >
            <div class="col-md-9 area-item">
              <span>自我评价</span>
              <div class="txt">
                <textarea class="b1" name="" id="self" cols="70" rows="3"></textarea>
              </div>
            </div>
            <div class="err" style="display:none"><em class="icons"></em></div>
          </div>
          <div class="col-md-12">
            <div class="col-md-9 area-item">
              <span>教育经历</span>
              <div class="txt">
                <textarea class="b1" name=""   id="edu"cols="70" rows="3"></textarea>
              </div>
            </div>
            <div class="err" id="base_address_warning" style="display:none"><em class="icons"></em></div>
          </div>
          <div class="col-md-12">
            <div class="col-md-9 area-item">
              <span>工作经历</span>
              <div class="txt">
                <textarea class="b1" name="" id="exp" cols="70" rows="3"></textarea>
              </div>
            </div>
            <div class="err" style="display:none"><em class="icons"></em></div>
          </div>
          <div class="col-md-12">
            <div class="col-md-9 area-item">
              <span>项目经验</span>
              <div class="txt">
                <textarea class="b1" name="" id="project_exp" cols="70" rows="3"></textarea>
              </div>
            </div>
            <div class="err" style="display:none"><em class="icons"></em></div>
          </div>


  </div>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'basemessage',
    data() {
      return {
        msg: '!',
        myresumes: []

      }
    },
    mounted: function () {


    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul li {
    list-style: none;
  }

  .list-group {
    width: 200px;
    font-size: 2em;
    margin-left: 40px;
    margin-top: 60px;
  }

  .col-md-6 {
    font-size: 1.2em;
    margin-top: 20px;
  }

  .col-md-8 {
    /*margin-top: 50px;*/
  }

  .ef {
    margin-left: -30px;
  }

  i {
    color: red;
  }

  .list-group-item:hover {
    font-weight: bold;
    color: #ff6000;
    background-color: #fff;
    border: 1px solid #eee;
    border-right-color: #fff;
    border-left: 2px solid #ff6000;
    font-size: 1.3em;
  }

  .bli {
    /*width: 1110px;*/
    /*height: 500px;*/
    /*background-image: url("../../../static/images/bg.png");*/
  }
  .area-item{
    margin: auto;
  }
  div input{
    width: 120px;
  }
  .content{
    margin-top: 50px;
  }

</style>
