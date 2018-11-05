<template>
  <!--放入自己的模板-->
  <!--搜索栏-->

  <div class="search-box">
    <!--搜索-->

    <div><a href="">
      <div class="search-type text-center">全文

      </div>
    </a></div>
    <div href="" class=""></div>
    <!--输入框-->
    <div class="input" ><input type="text" placeholder="请输入关键字" ></div>
    <!--地点-->
    <div><a href="">
      <div class="address">苏州
        <div id="add"></div>
      </div>
    </a></div>

    <!--搜索按钮-->
    <div><a href="http://localhost:8080/#/search/">
      <div class="btn-box">
        <div class="btn"></div>
      </div>
    </a></div>


  </div>

</template>

<script>
  import vm from '../../../static/js/event.js'
export default {
  name: 'search-box',
  data () {
    return {
      msg: '这是一个CopyDemo '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  /*搜索框*/
  div.top-footer{

    margin-top: 20px;
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 5px;
    width: 100%;
    /*height: 50px;*/
    background-color: #F7F9FA;




  }

  div.top-footer div.search-box{
    overflow: hidden;
    /*position: relative;*/
    /*right: -40px;*/
    margin:  0 auto ;
    width: 700px;
    height: 100%;
    box-shadow: 0px 0px 5px #989898;
    /*background-color: red;*/
    /*background-color: #FF6600;*/
  }

  .search-box>div{

    float: left;
    width: 80px;
    text-align: center;
    line-height: 46px;
    box-sizing: border-box;
    box-shadow: 0px 0px 1px #989898;
    font-size: 16px;



  }

  .search-box>div>a{
    color: black;
  }
  .search-box div:first-child:hover>div{

    background-image: url("../../../static/images/svgs/fold.svg");

  }
  .search-box div:first-child:hover{
    background-color: #c0c0c0;
  }
  .search-box div:first-child:hover+div{
    display: block;


  }
  div.top-footer div>div.search-type:hover{


  }
  .search-type>div{

    float: right;
    box-sizing: border-box;
    width: 25px;
    height: 25px;
    background-size: cover;
    background-image: url("../../../static/images/svgs/unfold.svg");
    position: relative;
    opacity: 0.5;
    right: 10px;
    top: 11px;
    border: none;

  }

  .hidden-search-type{
    display: none;
    position: absolute;
    width: 78px;
    height: 46px;
    bottom: 112px;


  }
  .hidden-search-type:hover{
    display: block;
    background-color: #c0c0c0;
  }


  div.top-footer div>div.search-type:hover{
    /*color: grey;*/
    /*background-color: #2bffe7;*/


  }

  div.top-footer div>div.input{
    padding-left: 10px;
    text-align: left;
    width: 460px;

  }
  div.top-footer div>div.input>input{
    width: 400px;
    height: 35px;
    border: none;
    outline: none;
    font-size: 16px;
    background-color: #F7F9FA;

  }
  #add{
    float: right;
    box-sizing: border-box;
    width: 25px;
    height: 25px;
    background-size: cover;
    background-image: url("../../../static/images/svgs/add.svg");
    position: relative;
    opacity: 0.5;
    right: 10px;
    top: 11px;
    border: none;
  }
  div.top-footer div>div.address{
    float: right;
    /*position: relative;*/
    /*left: -160px;*/

  }
  div.top-footer div>div.address:hover{
    /*color: grey;*/
    /*background-color: #2bffe7;*/
  }
  .search-box div:nth-child(4):active #add{

    animation: add 1s;
    animation-fill-mode: forwards;
  }

  @keyframes add {
    /*旋转*/
    /*0%{ transform:rotate(180deg)}*/
    100%{
      transform: rotate(180deg);}

  }

  .search-box div:nth-child(5) div.btn{
    /*background-color: yellow;*/

    float: right;

    box-sizing: border-box;
    width: 80px;
    height: 46px;
    background-image: url("../../../static/images/svgs/fangdajing.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 15px 0px;
    opacity: 0.5;
    border: none;
  }

  .search-box div:nth-child(5):hover{
    /*background-color: #2bffe7;*/

  }
  .btn-box{

    margin-right: 0px;

    /*background-color: gray;*/

  }





</style>
