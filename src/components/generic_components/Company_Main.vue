<template>
  <!--放入自己的模板-->

  <div>
    <div class="ml-item">
      <div class="item-line">
        <div class="intro">公司介绍</div>
        <div class="hr">
          <hr>
        </div>
      </div>
      <div class="text-area"  v-text="company.intro" >

        <div><a href="">收起 <span class="glyphicon glyphicon-menu-up"></span></a></div>


      </div>


      <div class="item-line">
        <div class="intro">公司位置</div>
        <div class="hr">
          <hr>
        </div>

      </div>


      <div class="c-address">

        <!--地图-->
        <div id="c-addr-left">
          <BMap></BMap>

        </div>
        <!--地址信息-->
        <div class="c-addr-right scrollbar-hover">
          <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div class="panel " v-for=" (add,index) in addrs">
              <div class="panel-heading" role="tab" :id="add.fields.a_id">
                <h4 class="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" :href="'#'+index" aria-expanded="true" aria-controls="collapseOne"
                  v-text="add.fields.addr_shi">
简单地址1                  </a>
                </h4>
              </div>
              <div :id="index" class="panel-collapse collapse " role="tabpanel" :aria-labelledby="add.fields.a_id">
                <div class="panel-body" v-text="add.fields.addr_particular">
                  详细地址1
                </div>
              </div>
            </div>


          </div>


          <hr>
          <div class="addr-res">
          该公司共有 <span v-text="addrs.length"></span> 个地址
          </div>

        </div>


      </div>

    </div>



      <!--<div class="item-line">-->
      <!--<div class="intro">公司位置</div>-->
      <!--<div class="hr">-->
      <!--<hr>-->
      <!--</div>-->

      <!--</div>-->


      <!--<div class="c-address">-->

      <!--&lt;!&ndash;地图&ndash;&gt;-->
      <!--<div id="c-addr-left">-->

      <!--</div>-->
      <!--&lt;!&ndash;地址信息&ndash;&gt;-->
      <!--<div class="c-addr-right">-->

      <!--<div class="addr-title" data-toggle="tooltip" data-placement="bottom" title="上海市浦东新区"><a-->
      <!--href="">上海市,浦东...</a></div>-->
      <!--&lt;!&ndash;标签 办公区域&ndash;&gt;-->
      <!--<div class="addr-businessarea">-->
      <!--<div class="bus-item ">张江</div>-->

      <!--</div>-->
      <!--&lt;!&ndash;详细地址&ndash;&gt;-->
      <!--<div class="addr-desc">上海浦东新区碧波路912弄11号楼</div>-->
      <!--<hr>-->
      <!--<div class="addr-res">-->
      <!--该公司共有 <span>1</span> 个地址-->
      <!--</div>-->
      <!--<div id="accordion">-->
      <!--<p>-->
      <!--<div class="addr-title" data-toggle="tooltip" data-placement="bottom" title="上海市浦东新区">-->
      <!--<a href="#collapseExample1" data-toggle="collapse" data-parent="#accordion" class="btn btn-link">上海市,浦东...</a>-->
      <!--</div>-->
      <!--</p>-->
      <!--<div class="collapse in" id="collapseExample1">-->
      <!--<div class=" with-padding">-->
      <!--<div class="addr-businessarea">-->
      <!--<div class="bus-item ">张江</div>-->
      <!--</div>-->
      <!--<div class="addr-desc">上海浦东新区碧波路912弄11号楼</div>-->

      <!--</div>-->
      <!--</div>-->

      <!--</div> &lt;!&ndash;-end accordion >-->

      <!--</div>-->


    </div>
  </div>
</template>

<script>
import BMap from '@/components/generic_components/BMap'
export default {
  name: 'company_main',
  props:['company','addrs'],
  data () {
    return {
      msg: '这是一个CopyDemo '
    }
  },
  components:{
    BMap
  }
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

  div.text-area {

    padding: 10px;
  }

  div.text-area > div {
    margin-left: 80%;

  }

  div.text-area > div > a {
    color: rgba(172, 191, 255, 0.81);
  }
  div.c-address{
    overflow: hidden;

  }
  #c-addr-left {
    float: left;
    margin-top: 30px;
    width: 430px;
    height: 300px;
    /*background-color: red;*/
  }

  div.c-addr-right {
    /*overflow-x: hidden;*/
    overflow-y: auto;

    float: left;
    margin-top: 30px;
    width: 270px;
    height: 300px;
    border: rgba(117, 117, 117, 0.3) 1px solid;
    border-left: none;
    padding: 0 15px;
  }

  div.addr-title {

    margin-top: 2px;

  }

  div.addr-title > a {
    padding: 0;
    font-size: 17px;

    color: black;

  }
  div.addr-title > span{
    color: dodgerblue;
  }
  div.addr-title > a:hover{



  }

  div.addr-businessarea {

    margin-top: 2px;
  }

  div.addr-businessarea > div {
    text-align: center;
    width: 50px;
    height: 22px;
    border: grey 1px solid;
    border-radius: 25px 25px;
    color: grey;

  }

  div.addr-desc {
    margin-top: 10px;
    color: grey;

  }
  div.addr-res{
    text-align: center;
    font-size: 17px;
  }
  div.addr-res>span{
    color: dodgerblue;
  }

.panel {

  margin-top: 10px;
 box-shadow: none;
}




</style>
