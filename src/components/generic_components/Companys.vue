<template>
  <!--放入自己的模板-->
<div>
  <div class="company-item"  v-for="com in display_companys"  v-bind:id="com.pk">
    <div class="company-message">
      <!--公司头像-->
      <router-link  v-bind:to="'/company/'+com.pk">
        <div class="company-images" v-bind:style="{ 'background-image': 'url(' + com.fields.img_src + ')'}"></div>
        </router-link>
      <!--公司名字-->
      <a href="">
        <div class="name" v-text="com.fields.c_name" ></div>
      </a>
      <div class="other">
        <!--类型-->
        <span class="type"  v-text="com.fields.type"></span>
        <!--融资-->
        <span class="rongzi"  v-text="com.fields.rongzi"></span>
      </div>
      <!--简介-->
      <div class="intro">
        <p v-text="com.fields.c_word.slice(0,15)"></p>
      </div>

    </div>
    <div class="data">
      <div class="data-1">
        <span v-text="com.fields.mspj" ></span>
        <a href="#">面试评价</a>
      </div>
      <div class="data-2">
        <span v-text="com.fields.position_number"></span>
        <a href="#">在招职位</a>
      </div>
      <div class="data-3">
        <span v-text="com.fields.jl_timeliness"></span>
        <a href="#">简历处理率</a>
      </div>
    </div>
</div>


  <div class="get-more" id="get_more_company" v-if="flag" @click="getMoreCompanys"><a href="javascript:void(0)">
    <div>查看更多</div>
  </a></div>
  <div class="get-more" id="get_more_company" v-else><a href="javascript:void(0)">
    <div>已经到底了</div>
  </a></div>
</div>
<!--<div>{{// display_companys[0].fields.c_name}}</div>-->
</template>

<script>
  import axios from 'axios'
export default {
  name: 'company',
  data () {
    return {
      companys:[],
      display_companys:[],
      min:0,
      max:9 ,
      flag:true//公司
    }
  },
  mounted:function () {

   this.getCompanys();





  },
  methods:{

    //加载岗位显示
    loadCompanys:function ( min, max) {
      // 设置默认值
      min=this.min;
      max=this.max;

      let len=this.companys.length;
      for(let index=min;index<max&&index<len;index++){

  this.display_companys.push(this.companys[index])

  // console.log(this.display_companys);
}

      // console.log( this.companys);


  
},
    //获取更多公司
    getMoreCompanys:function () {
      let  get_more_position=document.querySelector('#get_more_company');
        this.min+=9;
        this.max+=9;
      // console.log(this.max);

        this.loadCompanys(this.min,this.max);
        //限制首页刷新的数据数量
        let len=this.companys.length;
        if (this.min>len||len>this.min&&len<this.max||this.max>=90){
            this.flag=false;
          // document.querySelector('#get_more_company>a>div').innerHTML='已经到底了';
        }



      },

    //获取公司
    getCompanys:function () {
        let vm =this;
      axios.get('http://127.0.0.1:8000/company/getcompanys/').then(function (response) {
        // 因为拿到的是str

        // console.log(vm);
        vm.companys=response.data
        console.log(vm.companys);
        vm.loadCompanys(vm.min,vm.max)

      }).catch(function (error) {
        console.log(error);

      });
      // console.log(vm.companys);
    }


    },




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>






</style>
