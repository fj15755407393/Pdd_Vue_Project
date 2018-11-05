<template>
  <!--放入自己的模板-->
<div class="po">
  <div class="position" v-for="item in display_positions">
    <!--岗位信息-->
    <div class="position_info">
      <div class="row-1">
        <router-link v-bind:to="'/position/'+item.position.p_id">
          <div class="position_name" v-text="item.position.p_name.slice(0,10)"></div>
        </router-link>
        <div class="pub_time" v-text="item.position.pub_date.slice(5,-1)"></div>
        <a href="">
          <div class="more_info"></div>
        </a>
        <div class="salary" v-text="item.position.salary"></div>
      </div>
      <div class="row-2">
        <div class="exp" v-text="item.position.exp"></div>

        <div class="edu" v-text="item.position.edu"></div>

      </div>
      <div class="row-3">
        <div class="position_label" v-for="lal in item.position.word_cut" v-text="lal"></div>

      </div>
    </div>
    <!--所属公司-->
    <div class="company" >
      <router-link v-bind:to="'/company/'+item.company.c_id" >
        <div   v-bind:style="{ 'background-image': 'url(' + item.company.img_src + ')'}" class="company_icon">
        </div>
      </router-link>
      <div class="company_info">
        <router-link :to="'/company/'+item.company.c_id">
          <div class="company_name"v-text="item.company.c_name"></div>
        </router-link>
        <span v-text="item.company.type"></span><span>|</span>
        <span v-text="item.company.rongzi"></span><span>|</span>
        <span v-text="item.company.addr_heade"></span>
      </div>
    </div>

  </div>

  <div class="get-more" id="get_more_position" v-if="flag" @click="getMorePosition"><a href="javascript:void(0)">
    <div>查看更多</div>
  </a></div>
  <div class="get-more"  id="get_more_position"  v-else><a href="javascript:void(0)">
    <div>已经到底了</div>
  </a></div>
</div>

</template>

<script>
  import axios from 'axios'

  export default {
    name: 'position',
    data() {
      return {

        positions: [],//获取的数据
        display_positions: [],//用来显示的数据
        company:{},
        min: 0,
        max: 9 ,//岗位
        flag:true ,//控制getmore按钮是否有效


      }
    },
    mounted: function () {

      this.getPositions();


    },
    methods: {

      //根据岗位里的cid查找公司
      // getCompanyById: function (cid) {
      //   let vm=this
      //   axios.get('http://127.0.0.1:8000/company/getcompanybyid/' + '396732').then(function (reponse) {
      //
      //     vm.company=reponse.data
      //     // console.log(vm.company);
      //
      //
      //   }).catch(function (error) {
      //     console.log('getCompanyById go wrong please try again or check your code !');
      //
      //   })
      //
      // },
      //获取岗位
      getPositions: function () {

        let vm = this
        // console.log(this);// 这里的 this 是 VueComponent

        axios.get('http://127.0.0.1:8000/position/getpositions/')
          .then(function (response) {

            // console.log(response.data);// 数据拿到了
            // console.log(this); //这里的 this 是 undefine
            //  将拿到的数据村到data里
            // console.log( eval(response.data));
            let positions = eval(response.data);

            // vm.positions=positions;

            for (let pos of positions) {
              pos.position.word_cut = eval(pos.position.word_cut)
              vm.positions.push(pos)
              // console.log(vm.positions);


            }
            console.log(vm.positions);

            vm.loadPosition(0, 9);


            // console.log(vm.display_positions);


          })
          .catch(function (error) {
              vm.answer = 'Error! Could not reach the API. ' + error
            }
          );


      },

      //加载岗位显示
      loadPosition: function (min, max) {
      //设置默认值

        let vm=this;
        let len=vm.positions.length;
        for (let index = min; index < max&&index<len; index++) {
          this.display_positions.push(this.positions[index])
        }
        console.log( this.display_positions);
      },
      //获取更多岗位
      getMorePosition: function () {
        let get_more_position = document.querySelector('#get_more_position');
        this.min += 9;
        this.max += 9;
        // console.log(this.max);
        this.loadPosition(this.min, this.max);
        //限制首页刷新的数据数量
        let len = this.positions.length;
        if (this.min > len || len > this.min && len < this.max || this.max >= 90) {
          this.flag=false;
          console.log(this.flag);

          // document.querySelector('#get_more_position>a>div').innerText = '已经到底了'+this.flag;

        }


      }
    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



  .company_icon{
    width: 80px;
    height: 70px;
    border-right: rgba(128, 128, 128, 0.19) 1px dashed;
    overflow:hidden ;
    /*position: relative;*/
    /*right: 0px;*/


    /*background-size: cover;*/
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }





</style>
