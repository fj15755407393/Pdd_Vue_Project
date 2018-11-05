<template>
  <!--放入自己的模板-->



  <body>
  <div class="top"><Nav :islogin="islogin"></Nav></div>
  <div class="header2-css">
    <div class="left-mess">
      <div>
        <span >公司发布</span>
        <span v-text="data.position.p_name"></span>
      </div>
      <p>
        <span v-text="data.position.salary"></span>/
        <span v-text="">2</span>/
        <span v-text="data.position.exp"></span>/
        <span v-text="data.position.edu"></span>/
        <span v-text="">全职</span>
      <br>
      <span v-for="lal in doeval(data.position.word_cut)"  style="display: inline-block;box-shadow:0 0 2px grey;margin-left: 5px;margin-top: 5px;padding: 2px;" v-text="lal"></span>
      </p>



      <span v-text="data.position.pub_date+'发布于拉勾网'">555555555</span>
    </div>
    <div class="right-mess">
      <a href="javascript:void(0);"@click="canclecollect" v-if="iscolected">已收藏</a>
      <a href="javascript:void(0);"@click="collect" v-else>收藏</a>
      <a class="commit"  @click="getResuemByuid" data-toggle="modal" :data-target="islogin? '#resumeModal':'' " >提交简历</a>
    </div>
  </div>
  <div class="all-body">
    <div class="left-body">
      <dt>


      <dd>
        <span>
            岗位职责
        </span>
        <p>
          1、配合交互设计师及视觉设计师实现交互效果，配合后台工程师完成应用开发；<br>
          2、实现海量用户产品一流的移动端界面，优化代码并保持良好兼容性；<br>
          3、设计并实现海量用户产品的交互，提高网页性能和用户体验；<br>
          4、JavaScript程序模块开发，通用类库、框架编写能力。<br>
        </p>
      </dd>
      <dd>
                <span>
                    岗位要求
                </span>
        <p>
          1、熟悉移动端前端技术，对符合移动端标准的网站重构有丰富经验，有成功作品；<br>
          2、理解并掌握Javascript语言核心技术DOM、BOM、Ajax、JSON等，对Javascript框架应用（如jQuery/bootstrap等）有一定的经验；<br>
          3、熟悉Python/Django优先；<br>
          4、对CSS/Javascript性能优化、解决多浏览器兼容性问题有一定的经验；<br>
          5、对用户体验、交互操作流程、及用户需求有一定了解；<br>
          6、具备良好的服务意识、责任心、较强的学习能力、优秀的团队沟通与协作能力。<br>
        </p>
      </dd>
      </dt>

      <dd>
        <span>工作地址</span>
        <p v-text="data.company.addr_heade"></p>
      </dd>
      <dd>
        <span>职位发布者：</span>
        <p class="namep-css">姓名</p>
        <p v-text="data.company.c_name"></p>
      </dd>
    </div>
    <div class="right-body">

      <ul class="base-message">
        <li class="glyphicon glyphicon-th-large" v-text="' '+data.company.type">&nbsp;企业服务,金融</li>
        <li class="glyphicon glyphicon-grain" v-text="' '+data.company.rongzi">&nbsp;B轮</li>
        <li class="glyphicon glyphicon-user" v-text="' '+data.company.size">&nbsp;50-150人</li>
        <li class="glyphicon glyphicon-map-marker" v-text="' '+data.company.addr_heade">&nbsp;上海</li>
      </ul>
      <div class="two-css">
        <span>相似职位</span>
        <div class="divfl-css">
          <div></div>
          <div class="small-css">
            <span>python开发工程师</span>
            <span>10k-20k</span>
            <span>阿里巴巴</span>
          </div>
        </div>
        <div class="divfl-css">
          <div></div>
          <div class="small-css">
            <span>python开发工程师</span>
            <span>10k-20k</span>
            <span>阿里巴巴</span>
          </div>
        </div>
        <div class="divfl-css">
          <div></div>
          <div class="small-css">
            <span>python开发工程师</span>
            <span>10k-20k</span>
            <span>阿里巴巴</span>
          </div>
        </div>
        <div class="divfl-css">
          <div></div>
          <div class="small-css">
            <span>python开发工程师</span>
            <span>10k-20k</span>
            <span>阿里巴巴</span>
          </div>
        </div>
        <span class="span2-css"><a href="#">查找更多相似岗位</a></span>
      </div>
      <div></div>
    </div>
  </div>
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
  <div class="buttom">
    <div class="but-1">
      <div>
        <ul>
          <li><a href="#">关于我们</a></li>
          <li><a href="#">法律声明</a></li>
          <li><a href="#">保密承诺</a></li>

        </ul>
      </div>
      <div>    <ul>
        <li><a href="#">网站地图</a></li>
        <li><a href="#">意见反馈</a></li>
        <li><a href="#">招聘信息</a></li>

      </ul></div>
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
    <div  class="but-2">
      <p>未经highpin.cn同意,不得转载本网站之所有招聘信息及作品 聘多多版权所有 2013-2018 京
        ICP备12025925号 京ICP证010207号京公网安备 11010502034026号</p>
    </div>
  </div>


  <!--模态框位置-->
  <Resuems_Modal v-bind:resumes="resumes" v-bind:islogin="islogin" ></Resuems_Modal>
  </body>
</template>

<script>
  import  Nav from '../components/generic_components/Nav'
  import  Resuems_Modal from '../components/generic_components/Resuems_Modal'
  import axios from 'axios'

export default {
  name: 'position',

  data () {
    return {
      msg: '这是一个CopyDemo ',
      islogin:false,
      uid:'',//用户id
      pid:'',//岗位id
      iscolected:false,//是否收藏
      data:{position:{p_name:''},
      company:{type:''}},
      resumes:[], //该用户的简历
      selectresume:{} //选择的简历
    }
  },

  mounted:function(){
    this.isLogin();
    this.getUserId();
    this.getPositionBypid();
    // alert(this.islogin);
    if(this.islogin)
    this.getResuemByuid()

  },
  components:{
    Nav,Resuems_Modal
  },

  watch:{
    islogin:function (newvalue,oldvalue) {
      console.log(newvalue);
      console.log(oldvalue);
      return newvalue}
  },
  filters:{


  },methods:{
    //收藏
    collect:function () {
      //判断是否登录
      if(this.islogin){

        // 添加收藏

        //获取当前用户id

        //获取岗位id
         this.pid=this.$route.params.pid;
         let vm =this;

        axios.get('http://127.0.0.1:8000/position/savecollection/',{params:{
            operation:'add',
            uid:vm.uid,
            pid:vm.pid
        }}).then(function (response) {
          console.log(response.data);
          vm.iscolected=true;


        }).catch(function (error) {
          console.log(error);

        })



      }
      else {
        alert('请先登录')
        sessionStorage.setItem('from',this.$route.path)
        this.$router.push('/login/')

      }



    },
    //取消收藏
    canclecollect:function(){
      //判断是否登录
      if(this.islogin){

        // 添加收藏

        //获取当前用户id

        //获取岗位id
        this.pid=this.$route.params.pid;
        let vm =this;

        axios.get('http://127.0.0.1:8000/position/savecollection/',{params:{
            operation:'add',
            uid:vm.uid,
            pid:vm.pid
          }}).then(function (response) {
          console.log(response.data);
          vm.iscolected=true;


        }).catch(function (error) {
          console.log(error);

        })



      }
      else {
        alert('请先登录')
        sessionStorage.setItem('from',this.$route.path)
        this.$router.push('/login/')

      }


    },
    //获取用户的所有简历
    getResuemByuid:function(){

      let vm=this;
      if(this.islogin&&vm.resumes){
        axios.get('http://127.0.0.1:8000/resume/getresumesbyuid',{
          headers:{
            'token':sessionStorage.getItem('token')
          },
          params:{

          }
        }).then(function (response) {
          vm.resumes=response.data;
          console.log(vm.resumes);

        }).catch(function (error) {
          console.log(error);

        })
      }
      else {
        alert('请先登录')
        sessionStorage.setItem('from',this.$route.path)
        this.$router.push('/login/')

      }

    },

    //提交简历
    // commit:function(){
    //   //判断是否登录
    //   if(this.islogin){
    //
    //     // 添加投递简历
    //     let vm=this;
    //     this.pid=this.$route.params.pid;
    //     axios.get('http://127.0.0.1:8000/resume/commit/',{
    //       params:{
    //         'position_id':vm.pid,
    //         'resume_id':'1'
    //       }
    //     }).then(function (response) {
    //       // vm.resumes=response.data;
    //       // console.log(vm.resumes);
    //     }).catch(function (error) {
    //       console.log(error);
    //
    //     })
    //
    //   }
    //   else {
    //     let commit=document.querySelector('.commit');
    //     alert('请先登录')
    //     sessionStorage.setItem('from',this.$route.path)
    //     this.$router.push('/login/')
    //
    //   }
    //
    //
    //
    // },
    //是否登录
    isLogin: function () {
      let vm=this;
      let token=sessionStorage.getItem('token');
      // console.log( token);
      if(token){

        axios.post('http://127.0.0.1:8000/user/verify/',
          {
            token:token
          }
        ).then(function (response) {
          let res=response.data;
          // console.log(vm.islogin);
          vm.islogin= res.user;
          // console.log(vm.islogin);

        }).catch(function (error) {
          vm.islogin= false;
          console.log(error);

        })
      }
      // axios.get()

    },
    //获取用户id
    getUserId:function (user) {
      user=13956459579;

      let vm=this;

       axios.get('http://127.0.0.1:8000/user/getuseridbyname/'+user).then(function (response) {

         vm.uid=response.data.id;

       }).catch(function (error) {
        console.log(error);

      });


    },

    //接受从子组件传过来的值
    //获取用户
    getUser:function (data) {
      console.log('this is user' + data);

    },
    //通过岗位id获取岗位信息
    getPositionBypid:function () {

      //获取pid
      let pid= this.$route.params.pid
      // console.log(pid);
      let vm=this;
      axios.get('http://127.0.0.1:8000/position/getpositionbypid/'+pid).then(function (response) {
        vm.data=response.data;
        // console.log(vm.data);

      }).catch(function (error) {

        console.log(error);
      })




    },
    //eval函数
    doeval:function (value) {
      if(typeof value==typeof " ")
      return eval(value)
      else
        return null
    },


  },
  // watch:{
  //   islogin:function () {
  //      return this.$options.methods.isLogin()
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../static/css/position.css';

.commit{
  cursor:pointer;
}



</style>
