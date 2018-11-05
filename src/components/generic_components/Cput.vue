<template>
  <div>
    <div class="row" v-show="topstatus === true">
      <div class="col-md-12">
        <tr class="col-md-10">
          <td class="col-md-5">姓名：</td>
          <td class="col-md-7" >{{name}}</td>
        </tr>
        <tr class="col-md-10     float: left!important;">
          <td class="col-md-5">性别：</td>
          <td class="col-md-7">{{sex}}</td>
        </tr>
        <tr class="col-md-10">
          <td class="col-md-5">学历：</td>
          <td class="col-md-7" >{{highest_education}}</td>
        </tr>
        <tr class="col-md-10">
          <td class="col-md-5">邮箱：</td>
          <td class="col-md-7">{{email}}</td>
        </tr>
        <tr class="col-md-10">
          <td class="col-md-5">婚姻状态：</td>
          <td class="col-md-7">{{marital_status}}</td>
        </tr>
        <tr class="col-md-10">
          <td class="col-md-5">出生日期：</td>
          <td class="col-md-7">{{birthday}}</td>
        </tr>
        <tr class="col-md-10">
          <td class="col-md-5">电话号码：</td>
          <td class="col-md-7">{{telephone}}</td>
        </tr>
        <tr class="col-md-10">
          <td class="col-md-5">毕业学校：</td>
          <td class="col-md-7">{{graduation}}</td>
        </tr>
        <tr class="col-md-10">
          <td class="col-md-5"> 居住地址：</td>
          <td class="col-md-7">{{present_address}}</td>
        </tr>
      </div>
      <button class="buto2" style="" @click="tobottom">编辑</button>
    </div>
    <div class="row" v-show="bottomstatus === true">
      <div class="col-md-3">姓名</div>
      <div class="col-md-9">
        <input type="text" class="jb" v-model="name" v-on:blur="a">
      </div>
      <div class="col-md-3" >性别</div>
      <div class="col-md-9">
        <input type="text" class="jb"v-model="sex" v-on:blur="b">
      </div>
      <div class="col-md-3" >出生日期</div>
      <div class="col-md-9">
        <input type="text" class="jb" placeholder="年-月-日" v-model="birthday"v-on:blur="c">
      </div>
      <div class="col-md-3" >婚姻状态</div>
      <div class="col-md-9">
        <input type="text" class="jb" v-model="marital_status" v-on:blur="i">
      </div>
      <div class="col-md-3" >毕业学校</div>
      <div class="col-md-9">
        <input type="text" class="jb" v-model="graduation" v-on:blur="d">
      </div>
      <div class="col-md-3" >学历</div>
      <div class="col-md-9">
        <input type="text" class="jb" v-model="highest_education" v-on:blur="f">
      </div>
      <div class="col-md-3" >电话号码</div>
      <div class="col-md-9">
        <input type="text" class="jb" v-model="telephone" v-on:blur="e">
      </div>
      <div class="col-md-3">邮箱</div>
      <div class="col-md-9">
        <input type="text" class="jb"  v-model="email" v-on:blur="g">
      </div>
      <div class="col-md-3" >居住地址</div>
      <div class="col-md-9">
        <input type="text" class="jb" v-model="present_address" v-on:blur="h">
      </div><div class="col-md-3"></div>
      <div class="col-md-4">
        <button class="buto1" @click="totop">返回</button>
      </div>
      <div class="col-md-4">
        <button class="buto" @click="totop">提交</button>
      </div>
      <div class="col-md-1"></div>

    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    props: ['list', 'imageUrl'],
    data() {
      return {
        isEdit: true,
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
        graduation:'',
        resume_id:''
      }
    },
    methods: {
      // 点击提交
      totop: function () {
        this.topstatus=true
        this.bottomstatus=false
      },
      // 点击编辑
      tobottom: function () {
        this.topstatus=false
        this.bottomstatus=true
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
      addposition:function () {

        axios.post('http://127.0.0.1:8000/resume/addresume/',{
          name: '',
          sex:'',
          highest_education:'',
          email:'',
          marital_status:'',
          birthday:'',
          telephone:'',
          present_address:'',
          graduation:'',
          resume_id:''

        })
      }
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
  .buto2{
    height: 40px;
    width: 60px;
    margin-top: 15px;
    margin-left: 450px;
  }
  .col-md-10{
   margin-left: 100px;
    background-color: rgba(249, 249, 249, 0.9);
    box-shadow: 2px 2px 8px grey;
    margin-top: 20px;
    width: 400px;
    height: 40px;
    font-size: 1.5em;
  }
  .col-md-5{
    text-align: right;
  }


</style>
