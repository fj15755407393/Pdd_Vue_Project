<template>
  <div class="search">
  <ul>
    <li class="li01-css">
      <div>
        工作地点:
      </div>
      <a href="#" class="a1-css">全国</a>
      <a href="#" @click="getPositionByaddr('北京')" data_set="北京">北京</a>
      <a href="#" @click="getPositionByaddr('上海')" data_set="上海">上海</a>
      <a href="#" @click="getPositionByaddr('杭州')" data_set="杭州">杭州</a>
      <a href="#" @click="getPositionByaddr('苏州')" data_set="苏州">苏州</a>
      <a href="#" @click="getPositionByaddr('成都')" data_set="成都">成都</a>
      <a href="#" @click="getPositionByaddr('重庆')" data_set="重庆">重庆</a>
    </li>
    <div class="clear"></div>
    <li class="li02-css" @click="getPositionByexp"><div>工作经验:</div>
      <a href="#" class="a1-css">不限</a>
      <a href="#">应届毕业生</a>
      <a href="#">3年及以下</a>
      <a href="#">3-5年</a>
      <a href="#">5-10年</a>
      <a href="#">10年以上</a>
    </li>
    <div class="clear"></div>
    <li class="li03-css" @click="getPositionByedu"><div>学历要求:</div>
      <a href="#" class="a1-css">不限</a>
      <a href="#">大专</a>
      <a href="#">本科</a>
      <a href="#">硕士</a>
      <a href="#">博士</a>
    </li>
    <div class="clear"></div>
    <li class="li04-css" @click="getPositionBycom_lal"><div>融资阶段:</div>
      <a href="#" class="a1-css">不限</a>
      <a href="#">未融资</a>
      <a href="#">天使轮</a>
      <a href="#">A轮</a>
      <a href="#">B轮</a>
      <a href="#">C轮</a>
      <a href="#">D轮及以上</a>
      <a href="#">上市公司</a>
      <a href="#">不需要融资</a></li>
    <div class="clear"></div>

    <li class="li05-css" @click="getPositionBycom_lal"><div>公司规模:</div>
      <a href="#" class="a1-css">不限</a>
      <a href="#">少于15人</a>
      <a href="#">15-50人</a>
      <a href="#">50-150人</a>
      <a href="#">150-500人</a>
      <a href="#">500-2000人</a>
      <a href="#">2000人以上</a>
    </li>
    <div class="clear"></div>
    <li class="li06-css" @click="getPositionByprofesstion">
      <div>行业领域:</div>
      <span id="hangye_neirong">
                <a href="#" class="a1-css">不限</a>
                <a href="#">金融</a>
                <a href="#">IT软件</a>
                <a href="#">游戏</a>
                <a href="#">文化娱乐</a>
                <a href="#">移动互联网</a>
                <a href="#">教育培训</a>
                <a href="#">电子商务</a>
                <a href="#">健康医疗</a>
                <a href="#">生活服务</a>
                <a href="#">信息安全</a>
                <a href="#">数据服务</a>
                <a href="#">智能硬件</a>
                <a href="#">文化娱乐</a>
                <a href="#">网络招聘</a>
                <a href="#">通信</a>
                <a href="#">企业服务</a>
            </span>
    </li>
  </ul>
  </div>
</template>

<script>
  import $ from 'jquery'
  import axios from'axios'

    export default {
        name: "searchItem",

      data:function () {
        return {
          con:'',
          result_position:[],
          list:[]
        }
      },
      mounted:function(){
        this.getAllposition()
      },

      methods:{
          getAllposition:function(){
              var vm = this;
              axios.get('http://localhost:8000/position/getAllpositions/')
                .then(function (response) {
                  vm.list = eval('('+response.data+")");
                  console.log(vm.list)
                })
                .catch(function (error) {
                  console.log(error)
                })
            },
          getPositionByaddr:function (ad) {
            // console.log(this.list)
            let li = document.querySelectorAll('[data_set]');
            for(let l of li){
              // console.log(l.text)
              if(ad == l.text){
                this.con = ad;
                if(this.con){
                  this.result_position=[];

                  for(var pos of this.list){
                    let result=pos.addr;
                    // console.log(result)
                    if(result.indexOf(ad)!==-1){
                      this.result_position.push(pos)
                    }
                  }
                  console.log(this.result_position);
                  this.$emit('getlist',this.result_position)
                }

              }
            }


          },
        getPositionByexp:function () {
          if(this.con){
            result_position=[];
            for(var pos in list){
              result=pos.exp;
              if(result.match(this.con)){
                result_position.push(pos)
              }
            }
            list=result_position;
            this.$emit('Itemclick',list);
          }
        },
        getPositionByedu:function () {
          if(this.con){
            result_position=[];
            for(var pos in list){
              result=pos.edu;
              if(result.match(this.con)){
                result_position.push(pos)
              }
            }

            list=result_position;
            this.$emit('Itemclick',list);
          }
        },
        getPositionBycom_lal:function () {
          if(this.con){
            result_position=[];
            for(var pos in list){
              result=pos.com_lal;
              if(result.match(this.con)){
                result_position.push(pos)
              }
            }
            list=result_position;
            this.$emit('Itemclick',list);
          }
        },
        getPositionBypeople:function () {
          con=text;
          if(this.con){
            result_position=[];
            for(var pos in list){
              result=pos.com_lal;
              if(result.match(this.con)){
                result_position.push(pos)
              }
            }
            list=result_position;
            this.$emit('Itemclick',list);
          }
        },

        getPositionByprofesstion:function () {
          if(this.con){
            result_position=[];
            for(var pos in list){
              result=pos.com_lal;
              if(result.match(this.con)){
                result_position.push(pos)
              }
            }
            list=result_position;
            this.$emit('Itemclick',list);
          }
        }
      }
    }
</script>

<style scoped>

</style>
