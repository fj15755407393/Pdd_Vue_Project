<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <ul class="nav nav-pills">
          <li role="presentation">
            <router-link to="/index">首页</router-link>
          </li>
        </ul>
      </div>
      <div class="col-md-8">
        <ul class="nav nav-pills">

          <li role="presentation">
            <router-link to="/"><span class="a" >个人中心</span></router-link>
          </li>
          <li role="presentation">
            <router-link to="/usercentera">公司详情</router-link>
          </li>
          <li role="presentation">
            <router-link to="/myresume">校园招聘</router-link>
          </li>
          <li role="presentation">
            <router-link to="/mycentera">职位搜索</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavMain',
    data() {
      return {
        msg: 'Welcome to Your  App  Center!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .row {
    height: 60px;
    font-size: 2.2em;
    width: 100%;

  }
  .container{
    background-color: rgba(156, 202, 157, 0.87);
  }
  a{
    margin-left: 50px;
  }
</style>
