<template>
<div>
  <div class="row" v-show="topstatus === true">
    <div class="col-md-1"></div>
    <div class="col-md-10">
      <div class="col-md-12 li" v-for="li in list" :key="li">
        <span class="col-md-10">我的简历{{li}}</span>
        <button class="col-md-2 buto2 " @click="totop">查看</button>
      </div>
    </div>
    <div class="col-md-1"></div>
  </div>
  <div class="row" v-show="bottomstatus === true">
    <div class="col-md-3">姓名</div>
    <div class="col-md-9">
      <input type="text" class="jb" v-model="name" v-on:blur="a">
    </div>
    <div class="col-md-3">性别</div>
    <div class="col-md-9">
      <input type="text" class="jb" v-model="sex" v-on:blur="b">
    </div>
    <div class="col-md-3">出生日期</div>
    <div class="col-md-9">
      <input type="text" class="jb" placeholder="年-月-日" v-model="birthday" v-on:blur="c">
    </div>
    <div class="col-md-3">婚姻状态</div>
    <div class="col-md-9">
      <input type="text" class="jb" v-model="marital_status" v-on:blur="i">
    </div>
    <div class="col-md-3">毕业学校</div>
    <div class="col-md-9">
      <input type="text" class="jb" v-model="graduation" v-on:blur="d">
    </div>
    <div class="col-md-3">学历</div>
    <div class="col-md-9">
      <input type="text" class="jb" v-model="highest_education" v-on:blur="f">
    </div>
    <div class="col-md-3">电话号码</div>
    <div class="col-md-9">
      <input type="text" class="jb" v-model="telephone" v-on:blur="e">
    </div>
    <div class="col-md-3">邮箱</div>
    <div class="col-md-9">
      <input type="text" class="jb" v-model="email" v-on:blur="g">
    </div>
    <div class="col-md-3">居住地址</div>
    <div class="col-md-9">
      <input type="text" class="jb" v-model="present_address" v-on:blur="h">
    </div>
    <div class="col-md-3"></div>
    <div class="col-md-4">
      <button class="buto1" @click="tobottom">返回</button>
    </div>
    <div class="col-md-4">
      <button class="buto" @click="tobottom">提交</button>
    </div>
    <div class="col-md-1"></div>

  </div>


</div>
</template>

<script>
  export default {
    // props: ['list', 'imageUrl'],
    data() {
      return {
        list: [],
        //   isEdit: true,
        topstatus: true,
        bottomstatus: false,
        name: '',
        sex:'',
        highest_education:'',
        email:'',
        marital_status:'',
        birthday:'',
        telephone:'',
        present_address:'',
        graduation:''
      }

    },
    methods: {
      // 点击查看
      totop: function () {
        this.topstatus = false
        this.bottomstatus = true
        console.log(this.name)
      },
      // 点击编辑
      tobottom: function () {
        this.topstatus = true
        this.bottomstatus = false
      },
      a() {
        var p = /^[\u4E00-\u9FA5A-Za-z]+$/;
        if (!this.name) {
          alert('姓名不能为空');
        }
        else if (!p.test(this.name)) {
          alert('姓名格式不正确');
        }
      },
      b() {
        var q = /^["男"|"女"]$/;
        if (!this.sex) {
          alert('需要填写性别');
        }
        else if (!q.test(this.sex)) {
          alert('性别格式不正确');
        }
      },
      c() {
        var r = /^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/;
        if (!this.birthday) {
          alert('需要填写出生日期');
        }
        else if (!r.test(this.birthday)) {
          alert('出生日期格式不正确');
        }
      },
      d() {
        if (!this.graduation) {
          alert('需要填写毕业学校');
        }
      },
      e() {
        var s = /^1[34578]\d{9}$/;
        if (!this.telephone) {
          alert('需要填写联系电话');
        }
        else if (!s.test(this.telephone)) {
          alert('电话号码格式不正确');
        }
      },
      f() {
        if (!this.highest_education) {
          alert('需要填写学历');
        }
      },
      g() {
        var t = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        if (!this.email) {
          alert('需要填写邮箱');
        }
        else if (!t.test(this.email)) {
          alert('邮箱格式不正确');
        }
      },
      h() {
        if (!this.present_address) {
          alert('请填写地址')
        }
      },
      i() {
        if (!this.marital_status) {
          alert('请填婚姻状态')
        }
      },
    }
  }
</script>

<style scoped>
  .jb{
  margin-top: 10px;
  width: 400px;
  height: 40px;
  border-radius: 8px 5px;

  }
  .col-md-3{
  margin-top: 15px;
  text-align: right;
  }
  .buto{
  height: 40px;
  width: 60px;
  margin-top: 15px;
  }
  .buto1{
  height: 40px;
  width: 60px;
  margin-top: 15px;
  margin-left: 80px;
  }

    .li {
    border: 1px solid gainsboro;
    box-shadow: 2px 2px 8px grey;
    font-size: 2em;
    margin-top: 10px;
  }

</style>
