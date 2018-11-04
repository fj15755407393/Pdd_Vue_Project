<template>
  <!--放入自己的模板-->

 <div class="top">
   <div class="col-md-2 c-image " :style="{backgroundImage: 'url(' + company.img_src + ')'}" >
     
   </div>

   <div class="col-md-10 top-right">
     <diV class="base" >
       <!--公司的名称 和公司的官网-->
       <a href="company.href" class="c-name" v-text="company.c_name" ></a>
       <span class="glyphicon glyphicon-paperclip"></span>
       <!--公司的关键字-->
       <div class="c-word"  v-text="company.c_word">聚合支付 SaaS 服务商</div>


     </diV>
     <diV class="mess">
       <div class="col-md-2 mess-item text-center item1">
         <div class="c-count" v-text="company.position_number">32个</div>
         <div class="c-mess">招聘职位 <span class="glyphicon glyphicon-question-sign"></span></div>
       </div>
       <div class="col-md-2 mess-item text-center item2">
         <div class="c-count" v-text="company.jl_timeliness">100%</div>
         <div class="c-mess">简历及时处理率 <span class="glyphicon glyphicon-question-sign"></span></div>
       </div>
       <div class="col-md-2 mess-item text-center item3">
         <div class="c-count" v-text="company.jl_processing_time">1天</div>
         <div class="c-mess">简历处理时间 <span class="glyphicon glyphicon-question-sign"></span></div>
       </div>
       <div class="col-md-2 mess-item text-center item4">
         <div class="c-count" v-text="company.mspj">100个</div>
         <div class="c-mess">面试评价 <span class="glyphicon glyphicon-question-sign"></span></div>
       </div>
       <div class="col-md-2 mess-item text-center item5">
         <div class="c-count" v-text="company.last_login">7天内</div>
         <div class="c-mess">企业最近登录 <span class="glyphicon glyphicon-question-sign"></span></div>
       </div>


     </diV>
 </div>
   </div>
</template>

<script>
export default {
  name: 'company_base_top',
  props:['company'],
  data () {
    return {
      mes: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  div.top {
    margin: auto;
    margin-top: 38px;
    width: 1024px;
    height: 168px;
    border: 1px #b4b4b4 solid;

  }

  div.top>div {
    height: 100%;
    box-sizing: border-box;

  }

  div.c-image {

    border-right: 1px #b4b4b4 solid;
    background-repeat: no-repeat;
    background-size: cover;


  }

  div.top-right {
    padding: 0;

  }

  div.base {
    text-align: left;
    padding: 15px;
    height: 100px;

    border-bottom: 1px solid rgba(128, 128, 128, 0.33);

  }
  .c-word{
    margin-top: 15px;
    font-size: 15px;
  }
  div.base > a {

    font-size: 20px;
    color: black;

  }

  span.glyphicon.glyphicon-paperclip {
    color: rgba(128, 128, 128, 0.59);
  }

  div.mess {
    height: 66px;
    padding-top: 10px;
    background-color: #fafafa;

  }

  div.mess-item {
    padding: 0;
    width: 120px;

    border-right: 1px rgba(128, 128, 128, 0.28) solid;

  }

  div.mess-item > div.c-count {
    font-size: 17px;
  }

  div.mess-item > div.c-mess {
    color: rgba(128, 128, 128, 0.65);
    font-size: 14px;
  }
  ul.nav>li>a{

    font-size: 18px;
  }



</style>
