<template>
  <!--放入自己的模板-->
  <!--轮播图推广-->

  <div class="lunbo">
    <div id="myNiceCarousel" class="carousel slide" data-ride="carousel">
      <!-- 圆点指示器 -->
      <ol class="carousel-indicators">
        <li data-target="#myNiceCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myNiceCarousel" data-slide-to="1"></li>
        <li data-target="#myNiceCarousel" data-slide-to="2"></li>
        <li data-target="#myNiceCarousel" data-slide-to="3"></li>
        <li data-target="#myNiceCarousel" data-slide-to="4"></li>


      </ol>

      <!-- 轮播项目 -->
      <div class="carousel-inner">
        <div class="item active">
          <img  src="static/images/image/lun1.jpg" >

        </div>
        <div class="item">
          <img  src="static/images/image/lun2.jpg">

        </div>

        <div class="item">
          <img  src="static/images/image/lun4.jpg">

        </div>
        <div class="item">
          <img  src="static/images/image/lun5.jpg">

        </div>
        <div class="item">
          <img  src="static/images/image/lun6.jpg">

        </div>
      </div>

      <!-- 项目切换按钮 -->
      <a class="left carousel-control" href="#myNiceCarousel" data-slide="prev">
        <span class="icon icon-chevron-left"></span>
      </a>
      <a class="right carousel-control" href="#myNiceCarousel" data-slide="next">
        <span class="icon icon-chevron-right"></span>
      </a>
    </div>


  </div>
</template>

<script>
export default {
  name: 'view-pager',
  data () {
    return {
      msg: '这是一个CopyDemo '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .lunbo{
    margin-top: 0px;

  }
  div.carousel-inner>div.item{


  }
  .carousel-inner>.item{

    padding: 0;
  }
  .carousel-inner>.item>img{
    height: 360px;
  }
  .carousel-indicators li {
    display: inline-block;
    width: 25px;
    height: 7px;
    margin: 1px;
    text-indent: -999px;
    cursor: pointer;

    border: 1px solid rgb(250, 250, 250);
    border-radius: 1px;
  }
  .carousel-indicators  .active {
    width: 25px;
    height: 7px;
    margin: 0;

    background-color: rgb(128, 128, 128);
    transform:rotateY(45deg);
  }





</style>
