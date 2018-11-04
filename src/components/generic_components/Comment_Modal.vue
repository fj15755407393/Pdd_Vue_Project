<template>
  <!--放入自己的模板-->



  <div >
    <!-- Button trigger modal -->
   <!--设计一个按钮加上data-toggle="modal" data-target="#myModal"-->

    <!-- Modal -->
    <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div class="modal-title text-left" id="myModalLabel">回复</div>

          </div>
          <div  class="text-area text-left topic-content" contenteditable="true"   >
          </div>
          <div class="modal-footer">


            <div  class="col-md-2 topic-commit">发布</div>
            <div  class=" col-md-2 topic-close" data-dismiss="modal">关闭</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'comment_modal',
  data () {
    return {
      msg: '这是一个CopyDemo '
    }
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


</style>
