<template>
  <!--放入自己的模板-->

  <div class="ml-item">
    <div class="item-line">
      <div class="intro">在招职位</div>
      <div class="hr">
        <hr>
      </div>
    </div>
    <div class="inviting-item" v-for="pos in positions">
    <div class="inviting-item-top">
      <div class="col-md-4 name" v-text="pos.p_name">position_name</div>
      <div class="col-md-4"></div>
      <div class="col-md-4" v-text="pos.pub_date">pub_date</div>
    </div>
      <div class="inviting-item-footer" >
        <div class="col-md-6 content" >
        <span class="salary" v-text="pos.salary"></span>
        <span class="exp" v-text="pos.exp"></span>
        <span  class="edu"  v-text="pos.edu"></span>
        </div>
    <div class="col-md-6"></div>


      </div>

    </div>
  </div>



</template>

<script>
  import  axios from  'axios'
export default {
  name: 'positioning',
  props:['cid'],
  data () {
    return {
      msg: '这是一个CopyDemo ',
      positions:[]
    }
  },
  computed:{

  },
  mounted:function () {
    this.getPositionsByCid(this.cid);

  },
  methods:{
    getPositionsByCid:function (cid) {
      console.log("cid"+cid);
      cid=396732;
      let vm=this;
      axios.get('http://127.0.0.1:8000/position/getpositionsbycid/'+cid).then(function (response) {
        vm.positions=response.data;
        console.log(vm.positions);
      }).catch(function (error) {
        console.log(error);

      })

    },



  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  div.item-line {
    overflow: hidden;
  }

  div.item-line>div {
    float: left;

  }

  div.item-line>div.intro {

    /*width: 15%;*/
    font-size: 18px;
    position: relative;
    top: 10px;
  }

  div.item-line>div.hr {
    margin-left: 10px;
    width: 85%;

  }

div.inviting-item{
  padding: 5px;
  text-align: left;
  margin: auto;
  margin-top: 10px;
  height: 60px;
  width: 90%;

  /*background-color: red;*/
  box-shadow: 0 0 2px grey;
}
  .inviting-item>div{
    margin-top: 5px;
  }
.name{
  font-size: 16px;
  color:#54cbc4;
  text-overflow: ellipsis;
  white-space: nowrap;


}
.content{
  position: relative;
  left: -50px;
}
  .salary{
    float: left;
    font-size: 16px;
    color:#fd5f39;
  }
  .exp,edu{
    font-size: 14px;
  }
</style>
