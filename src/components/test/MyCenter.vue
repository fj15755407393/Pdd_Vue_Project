<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <ul class="list-group">

              <li class="list-group-item">
                <router-link to="/usercentera">我的聘多多</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/usercenter">简历中心</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="">我的收藏</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="">我的申请</router-link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mycenter',
  data () {
    return {
      msg: 'Welcome to Your  App  Center!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul li{
    list-style: none;
  }
  .list-group{
    width: 200px;
    font-size: 2em;
    margin-left: 40px;
    margin-top: 60px;
  }
  .list-group-item:hover{
    font-weight: bold;
    color: #ff6000;
    background-color: #fff;
    border: 1px solid #eee;
    border-right-color: #fff;
    border-left: 2px solid #ff6000;
  }
</style>
