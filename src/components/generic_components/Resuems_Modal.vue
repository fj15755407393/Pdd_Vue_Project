<template>
  <!--放入自己的模板-->



  <div >
    <!-- Button trigger modal -->
   <!--设计一个按钮加上data-toggle="modal" data-target="#myModal"-->

    <!-- Modal -->
    <div class="modal fade" id="resumeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div class="modal-title text-center" id="myModalLabel">请选择你要投递的简历</div>

            <div class="text-center resume-item" v-for="re in resumes" v-text="re.id" v-bind:id="re.id" ></div>
          </div>

          <div class="modal-footer">


            <div  class="col-md-2 topic-commit" @click="commit">确定</div>
            <div  class=" col-md-2 topic-close" data-dismiss="modal">退出</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import  axios from 'axios'
export default {
  name: 'resume_modal',
  props:['resumes','islogin'],
  data () {
    return {
      msg: ''
    }
  },
  mounted:function(){
  this.commitResume()
  },
  methods:{
    commitResume:function () {
      console.log(this.resumes);

        let modal_header=document.querySelector('#resumeModal')
        modal_header.onclick=function (event) {
          // alert(event.target.className)
          if (event.target.className=='text-center resume-item'){


            for(let item of document.querySelectorAll('.resume-item')){
              // console.log(item);
              // console.log(item);
              item.classList.remove('resume-item-active')


            }
            event.target.classList.add('resume-item-active')
          }


        }
      },
    commit:function(){
      //判断是否登录
      if(this.islogin){

        // 添加投递简历
        let vm=this;
        this.pid=this.$route.params.pid;
        let resume_select_id=document.querySelector('.resume-item-active').getAttribute('id')

        axios.get('http://127.0.0.1:8000/resume/commit/',{
          params:{
            'position_id':vm.pid,
            'resume_id':resume_select_id
          }
        }).then(function (response) {
          vm.data=response.data;
          console.log(vm.data);
          document.querySelector('.topic-close').click()


        }).catch(function (error) {
          console.log(error);

        })

      }
      else {
        let commit=document.querySelector('.commit');
        alert('请先登录')
        sessionStorage.setItem('from',this.$route.path)
        this.$router.push('/login/')

      }



    },




  },
  watch:{





    }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topic-content{
 min-height: 100px;
  width: 100%;
  padding: 5px;

}
  .topic-close{

    width: 60px;
    height: 30px;
    float: right;
    text-align: center;
    line-height: 30px;
    box-shadow: 0 0 2px grey;
    cursor: pointer;
  }

  .topic-commit{
    float: right;
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-left: 10px;
    box-shadow: 0 0 2px grey;
    cursor: pointer;

  }

div.modal-footer{
  overflow: hidden;
}
div.modal-footer div:hover{


  box-shadow:0 0 4px #676bf6;
  color: #676bf6;
}
.resume-item{
  cursor: pointer;
  box-shadow: 0 0 2px grey;
  height: 30px;
  width: 70%;
  margin: auto;
  margin-top: 10px;
  line-height: 30px;

}
.resume-item:hover{
    background-color: #2BFFE7;
    box-shadow: 0 0 2px #2BFFE7;
  }
.resume-item-active{
  background-color: #2BFFE7;
  box-shadow: 0 0 2px #2BFFE7;

}
</style>
