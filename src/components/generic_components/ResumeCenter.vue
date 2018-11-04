<template>
  <div class="bli">

      <div class="row">
        <div class="col-md-8">
          <div class="exrt" style="height: 100px;font-size: 1.5em">
            <strong class="col-md-5"><span style="text-align: left">Hi</span>，你好！</strong>
            <span style="text-align: right"class="col-md-7">
                <router-link to="/myresume">设置中心</router-link>
            </span>
            <div>你还没有简历，快来
              <router-link to="/myresume">创建简历</router-link>
              吧！

            </div>
          </div>


        </div>
      </div>

  </div>
</template>

<script>
  import axios from 'axios'


  export default {
    name: 'resumecenter',
    data() {
      return {
        msg: 'Welcome to Your  App  Center!',
        myresumes: []

      }
    },
    mounted: function () {



    },
    methods: {



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
    font-size: 1.5em;
    margin-left: 40px;
    margin-top: 60px;
  }

  .col-md-8 {
    margin-top: 50px;
  }


  i {
    color: red;
  }
  .list-group-item:hover{
    font-weight: bold;
    color: #ff6000;
    background-color: #fff;
    border: 1px solid #eee;
    border-right-color: #fff;
    border-left: 2px solid #ff6000;
    font-size: 1.5em;
  }
  .bli{
    width: 100%;


  }
  .row{
    margin-top: 50px;
    box-shadow: 0 0 1px grey;
  }
  </style>
