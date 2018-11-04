<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
      </div>
      <div class="col-md-8">
        <div class="col-md-12">
          <div class="col-md-6 c c2">
            <div class="col-md-3"><span>姓名<i>*</i></span></div>
            <div class="col-md-9">
              <input id="base_name" class="ef" maxlength="" value="" type="text">
              <button><span class="ic pointer" id="naducation">修改</span></button>

            </div>
            <div class="err" id="base_name_warning" style="display:none"><em class="icons"></em></div>
          </div>
          <div class="col-md-6">
            <div class="col-md-3"><span>性别<i>*</i></span></div>
            <div class="col-md-9 txt">
              <input id="user_name" class="ef" maxlength="" value="" type="text">
              <button><span class="ic pointer" id="namedd">修改</span></button>
            </div>
          </div>
          <div class="err" id="nameddd" style="display:none"><em class="icons"></em></div>
        </div>
        <div class="col-md-12">
          <div class="col-md-6 c c2">
            <div class="col-md-3"><span>出生日期<i>*</i></span></div>
            <div class="col-md-9">
              <input class="ef" id="base_birthday_input" value="" type="text">
              <span class="ic i_calendar" id="datet">修改</span>
            </div>
            <div class="err" id="base_birthday_warning" style="display:none"><em class="icons"></em></div>
          </div>
          <div class="col-md-6">
            <div class="col-md-3"><span>工作经验<i>*</i></span></div>
            <div class="c c4" float-index="false">
              <div class="col-md-9 txt">
                <input class="ef" id="base_workyear_input" value="" type="text">
                <span class="ic pointer" id="workk">修改</span>
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
              <span class="ic pointer" id="mobilepointer">修改</span>
            </div>
            <div class="err" id="base_mobile_warning" style="display:none"><em class="icons"></em></div>
          </div>
          <div class="col-md-6">
            <div class="col-md-3"><span>学历<i>*</i></span></div>
            <div class="col-md-9 txt">
              <input class="ef" id="selectionlist" type="text">
              <span class="ic pointer" id="education">修改</span>
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
              <span class="ic pointer" id="emailpointer">修改</span>
            </div>
            <div class="err" id="base_email_warning" style="display:none"><em class="icons"></em></div>
          </div>
          <div class="col-md-6">
            <div class="col-md-3"><span>居住地<i>*</i></span></div>
            <div class="col-md-9 txt">
              <input class="ef" maxlength="" id="base_area_input" placeholder="" value="">
              <span class="ic i_block pointer" id="base_area_click">修改</span>
            </div>
          </div>
          <div class="err" id="base_area_warning" style="display:none"><em class="icons"></em></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mycentera',
  data () {
    return {
      msg: 'Welcome to Your  App  Center!'
    }
  }
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
  .col-md-6{
    font-size: 1.2em;
    margin-top: 20px;
  }
  .col-md-8{
    margin-top: 50px;
  }
  .ef {
    margin-left: -30px;
  }
</style>
