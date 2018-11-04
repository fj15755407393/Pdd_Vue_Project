<template>
  <!--放入自己的模板-->
  <div class="footer">

    <!--友情链接-->
    <div class="blogroll">
      <div class="link-label">
        <span>友情链接</span>
        <span>友链交换联系QQ：2695411569@qq.com</span>
        <span>联系邮箱：2695411569@qq.com友情链接</span>
      </div>
      <div class="links">
        <a href="#">媒体及友链合作</a>
        <a href="#">事业招聘单位</a>
        <a href="#">最新招聘信息</a>
        <a href="#">找工作</a>
        <a href="#">苏州人才市场</a>
        <a href="#">卫生人才网</a>
        <a href="#">广西人才网</a>
        <a href="#">拉勾网</a>
        <a href="#">智联招聘</a>
        <a href="#">武汉人才网</a>
        <a href="#">北京旅游攻略</a>
        <a href="#">江门人才网</a>
        <a href="#">找工作</a>
        <a href="#">苏州人才市场</a>
        <a href="#">卫生人才网</a>
        <a href="#">广西人才网</a>
        <a href="#">拉勾网</a>
        <a href="#">智联招聘</a>
        <a href="#">武汉人才网</a>
        <a href="#">北京旅游攻略</a>
        <a href="#">江门人才网</a>
      </div>

    </div>
    <!--底部内容-->
    <div class="buttom">
      <div class="but-1">
        <div>
          <ul>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">法律声明</a></li>
            <li><a href="#">保密承诺</a></li>

          </ul>
        </div>
        <div>
          <ul>
            <li><a href="#">网站地图</a></li>
            <li><a href="#">意见反馈</a></li>
            <li><a href="#">招聘信息</a></li>

          </ul>
        </div>
        <div>
          <ul>
            <li><a href="#">联系我们</a></li>
            <li><a href="#">进入聘多多</a></li>


          </ul>
        </div>
        <div>
          <ul>
            <li><a href="#">客户服务中心</a></li>
            <li>服务热线：010-53981544</li>
            <li>周一至周五9:00-18:00</li>

          </ul>
        </div>
      </div>
      <div class="but-2">
        <p>未经highpin.cn同意,不得转载本网站之所有招聘信息及作品 聘多多版权所有 2013-2018 京
          ICP备12025925号 京ICP证010207号京公网安备 11010502034026号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      msg: '这是一个CopyDemo '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .blogroll{
    /*height: 180px;*/
    background-color: #EDEDED;
    padding: 40px;
  }
  .blogroll span,a{
    font-size: 15px;

  }
  .link-label{

    /*padding-top: 40px;*/
    box-sizing: border-box;
    padding-bottom: 8px;
    border-bottom: 1px solid  grey;
  }
  .link-label span:nth-child(1){
    margin-right: 615px;

  }

  .link-label span:nth-child(2),.link-label span:nth-child(3){
    color: grey;

  }
  .links{

    margin-top: 10px;
    overflow: hidden;
  }
  .links a {
    display: inline-block;
    color: grey;
    height: 25px;
    font-size: 15px;


    margin-right: 20px;
  }
  .links a:hover{

    text-decoration: underline;
    color: black;

  }
  .buttom a,li,p{
    color:grey;
    font-size: 15px;
  }
  .buttom li{
    margin-top: 10px;

  }
  .buttom a:hover{
    text-decoration:underline;

  }
  .buttom{

    background-color: #292829;
    overflow: hidden;
    padding: 30px;
    padding-bottom: 10px;
  }
  .but-1{
    /*height: 100px;*/
    width: 700px;
    margin: auto;
    background-color: #2bffe7;
  }.but-1 div:nth-child(1){
     margin-left: 20px;

   }
  .but-1 div:nth-child(4){
    margin-left: 100px;

  }
  .but-1>div{

    float: left;
    margin-right: 50px;

  }
  .but-2{
    width: 700px;
    margin: auto;
    margin-top: 140px;
    text-align: center;
    /*background-color: #2bffe7;*/
  }







</style>
