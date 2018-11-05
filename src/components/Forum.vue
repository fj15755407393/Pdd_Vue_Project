<template>
  <!--放入自己的模板-->

  <body >
  <div class="container">
    <div class="header">
      <div class="top1  navbar-fixed-top">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">logo</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li><a href="#">| <span class="sr-only">(current)</span></a></li>
                <li><a href="#">image</a></li>
              </ul>
              <form class="navbar-form navbar-left ">
                <div class="form-group">

                  <input type="text" class="form-control t " placeholder="Search">
                  <span class="glyphicon glyphicon-search"></span>
                </div>
                <button type="submit" class="btn btn-default">提问</button>
                <button type="submit" class="btn btn-default btn-mr">发表</button>
              </form>
              <ul class="nav navbar-nav navbar-right">
                <li><a href="./login.html" class="glyphicon glyphicon-user">登录</a></li>

              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
      </div>
      <div class="top2">
        <div class="lunbo">
          <div id="myNiceCarousel" class="carousel slide" data-ride="carousel">
            <!-- 圆点指示器 -->
            <ol class="carousel-indicators">
              <li data-target="#myNiceCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myNiceCarousel" data-slide-to="1"></li>
              <li data-target="#myNiceCarousel" data-slide-to="2"></li>
            </ol>

            <!-- 轮播项目 -->
            <div class="carousel-inner">
              <div class="item active">
                <img alt="First slide" src="../../static/images/image/lunform1.png">
                <div class="carousel-caption">
                  <h3>不请吃饭的销售合格吗？</h3>
                  <span>65541阅读</span><span>2451讨论</span>
                  <a href="">我要参与</a>
                </div>
              </div>
              <div class="item">
                <img alt="Second slide" src="../../static/images/image/lunform2.png">
                <div class="carousel-caption">
                  <h3>我在北漂的日子</h3>
                  <span>75541阅读</span><span>1451讨论</span>
                  <a href="">我要参与</a>
                </div>
              </div>
              <div class="item">
                <img alt="Third slide" src="../../static/images/image/lunform3.png">
                <div class="carousel-caption">
                  <h3>工作福利重要还是薪水重要~</h3>
                  <span>65541阅读</span><span>2451讨论</span>
                  <a href="">我要参与</a>
                </div>
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

      </div>

    </div>

    <div class="main">


      <div class="main-left">
        <ul class="nav nav-tabs nav-justified" @click="changePage" >
          <li role="presentation" class="active"><a href="javascript:void(0);">推荐</a></li>
          <li role="presentation"><a href="javascript:void(0);">热门动态</a></li>
          <!--<li role="presentation"><a href="javascript:void(0);">涨工资</a></li>-->
          <li role="presentation"><a href="javascript:void(0);">HR专区</a></li>
          <li role="presentation"><a href="javascript:void(0);">找工作</a></li>
          <!--<li role="presentation"><a href="javascript:void(0);">吐槽/讨论</a></li>-->
          <li role="presentation"><a href="javascript:void(0);">最新</a></li>
        </ul>

        <!--每一个帖子-->
        <div  class="recommend-item">
          <div class="item-header">
            <a href="">
              <div class="title">什么工作可以到处出差的？就喜欢这样的工作 不喜欢定点</div>
            </a>
            <div class="author">
              <a href=""><span class="icon"></span></a>
              <a href=""><span class="name">树欲静</span></a>
              <span class="conpany">上海仁度生物科技有限公司 </span>
              <span>/</span>
              <span class="pos">东区技术支持负责人</span>
            </div>
            <div class="view">
              <div class="read">
                <a href=""><span>阅读</span>
                  <span class="count text-center">1.7W</span></a>

              </div>
              <div class="split">
                |
              </div>
              <div class="answer">
                <a href=""> <span>回答</span>
                  <span class="count text-center">245</span></a>
              </div>
            </div>
          </div>
          <div class="item-body">
            <div class="content">
              看得出来你没做过频繁出差的工作，因为你没试过连续半个月一睁眼都看得不一样的天花板，也没试过凌晨两点在零下20度的街道找酒店，更没试过在机场大厅一坐坐好几个小时，坐到怀疑人生。
              出差不是旅游，并不是带着玩的心态出去的，你是带着工作任务去的，一切顺利还好，还有个心情出去吃吃转转，要是把事情搞砸了，躺在宾馆哪都不想去，连话都不想说。
              我觉得你应该不喜欢那种坐班的工作，长途出差的工作我真的觉得不适合你，像不用坐班的工作有很多，渠道销售，技术服务，会计审计，活动执行等等吧，很多，根据自己的专业，在网上找找就是了。相信我，来自一个常年跨省出差人的忠告，到处出差的工作不好干。
            </div>
            <div class="date">发布时间：08-09</div>
          </div>
          <div class="item-footer">
            <a href="javascript:void(0);" onclick="" class="glyphicon glyphicon-thumbs-up">155赞</a>
            <a href="javascript:void(0);" class="glyphicon glyphicon-thumbs-down">5踩</a>
            <a  class="glyphicon glyphicon-comment comment"  data-toggle="modal" data-target="#commentModal" >24评论</a>
            <a href="javascript:void(0);" class="glyphicon glyphicon-option-horizontal"></a>
            <a href="javascript:void(0);" class="pack-up">收起&nbsp;<span
              class="glyphicon glyphicon-menu-down"></span></a>
            <a class="reply" data-toggle="modal" data-target="#replyModal"><span class="glyphicon glyphicon-edit "></span>&nbsp;回复</a>
          </div>


        </div>

      </div>


      <div class="main-right">
        <div class="mr">
          <div class="mr-lunbo">
            <div id="myNC" class="carousel slide" data-ride="carousel">
              <!-- 圆点指示器 -->
              <ol class="carousel-indicators">
                <li data-target="#myNC" data-slide-to="0" class="active "></li>
                <li data-target="#myNC" data-slide-to="1"></li>
                <!--<li data-target="#myNiceCarousel1" data-slide-to="2"></li>-->
              </ol>

              <!-- 轮播项目 -->
              <div class="carousel-inner">
                <div class="item active">
                  <img alt="First slide"
                       src="https://ask-image.zhaopin.cn/discover_images/1534842658815.jpeg">
                  <div class="carousel-caption">

                  </div>
                </div>
                <div class="item">
                  <img alt="Second slide"
                       src="https://ask-image.zhaopin.cn/discover_images/1536658658736.jpeg">
                  <div class="carousel-caption">

                  </div>
                </div>


              </div>

            </div>
          </div>


        </div>
        <!--推荐答主-->
        <div class="referrer">
          <div class="rf1">
            <div class="rf1-top">
              <a href="">
                <div class="head-icon"></div>
              </a>
              <div>
                <div class="author-name text-left ">树欲静</div>
                <div class="author-company text-left">上海仁度生物科技有限公司</div>
              </div>


            </div>

            <div class="rf1-footer">
              <label>回答了</label>
              <a href="" tabindex="0" data-placement="bottom" data-toggle="popover" data-trigger="hover"
                 data-content="作为一个资深的销售人员，我觉得将产品/服务卖出去，再将钱收回来，这些都不很难。我觉得最难的是你提供的产品/服务，你给出的价格，你在销售过程中的努力及给客户的印象，让客户觉得值得和信任，这次买你的，下次还想从你这买！">#<span>大家觉得现在做销售最难的事是什么？</span></a>
              <a href="" tabindex="0" data-placement="bottom" data-toggle="popover" data-trigger="hover"
                 data-content="it行业目前景较好，行业热度高">#<span>总是觉得迷茫。不知道做什么行业好？</span></a>
              <a href="" tabindex="0" data-placement="bottom" data-toggle="popover" data-trigger="hover"
                 data-content="不要怕，二次不行去三次，多总结不足的地方，下次改正，总会过的😄我有个朋友面试一家公司七次，终于过了">#<span>面试的二次求助</span></a>


            </div>


          </div>
          <div class="rf2">


          </div>


        </div>


      </div>
    </div>

  </div> <!--end container-->
  <!--模态框-->
  <Reply_Modal></Reply_Modal>
  <Comment_Modal></Comment_Modal>


  </body>
</template>

<script>

  import  Reply_Modal from './generic_components/Reply_Modal.vue'
  import  Comment_Modal from './generic_components/Comment_Modal.vue'
  import  axios from  'axios'
export default {
  name: 'forum',
  data () {
    return {
      msg: ' ',
      comments:[],//从后台取到的帖子
      display_comments:[],//页面渲染的帖子
    }
  },
  methods:{
    //切换
    changePage:function (event) {
      let $lis=$('ul.nav-justified li');
      for(let li of $lis){
        li.classList.remove('active')
      }
      if(event.target.tagName=='LI'){
        event.target.classList.add('active')
      }


    },
    //获取总的评论数
    getComments:function () {
      let vm=this;
      axios.get('http://127.0.0.1:8000/forum/getcomments/').then(function (response) {
        this.comments=response.data
        console.log(this.comments);

      }).catch(function (error) {
        console.log(error);

      })


    }
  },
  components:{Reply_Modal,Comment_Modal }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../static/css/forum.css";





</style>
