<template>
  <!--放入自己的模板-->
<div>
  <div v-for="lal in lals">
  <div id="item00" class="item">
  <label for="" v-text="lal.category_list_type"></label>
  <a href="" v-for="(h,index) in lal.category_list_hot "  v-if="index<4" v-text="h"></a>

  <div class="item-icon"></div>
</div>
  <div class="hidden-items"  >
    <div class="hidden-item" >
      <div v-for="sub in lal.menu_sub">
        <div v-for="s,key in sub">
          <label for=""  v-text="key"  ></label>
          <div class="items"><a href="#"  v-for="a in s" v-text="a"></a></div>
        </div>
      </div>





    </div>
  </div>
</div>
</div>
</template>

<script>

  import axios from 'axios'
export default {
  name: 'lals',
  data() {
    return {
      type: [],
      hot: [],
      sub: [],
      lals: [],
      height: 0
    }
  },
  mounted: function () {

    this.getLals();
// this.loadLals()

    //   let height = 565 ;//第一个隐藏标签的高度
    //   let hiddens = document.querySelectorAll('div.hidden-items');
    //   for (let hidden in hiddens){
    //     hidden.style.top+= height + 'px';
    //     height += 48;
    //   }
  },
  methods: {
    getLals: function () {

      let vm = this
      // console.log(this);// 这里的 this 是 VueComponent
      axios.get('http://127.0.0.1:8000/position/getlals/')
        .then(function (response) {
          // console.log(response.data);// 数据拿到了
          // console.log(this); //这里的 this 是 undefine
          //  将拿到的数据村到data里
          let lals = response.data;
          // vm.lals=lals;

          for (let lal of lals) {


            lal.category_list_hot = eval(lal.category_list_hot)
            lal.menu_sub = eval(lal.menu_sub)

            vm.lals.push(lal)


          }
          console.log(vm.lals);


        })
        .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          }
        );
    },
    loadLals: function () {
//隐藏的标签
      //变量 用来临时存储语句
      let vm = this
      let ms_a = '';
      let items = '';
      let lal = '';
      let a, k;
      let hidden_item = '';
      let hidden_items = '';
      let items_lal = '';

//显示标签
      let height = 565;//第一个隐藏标签的高度
      let lals = this.lals;
      console.log(lals);
      // console.log(lals);

      let main_top_left = document.querySelector("div.main-top-left");
      for (let index = 0; index < lals.length; index++) {
        let as = "";
        let max_len = 4;

        for (let i = 0; i < lals[index].category_list_a.length && i < max_len; i++)
          as += '<a href="">' + lals[index].category_list_hot[i] + '</a>';
        let id = "item0" + index;
        main_top_left.innerHTML += `
    <div id=${id} class="item">
                    <label for="">${lals[index].category_list_type}</label>
                    ${as}

                 <div class="item-icon"></div>
</div> `;


        items_lal = '';
        let firstlal = '';
        let firstitem = '';
        for (let i = 0; i < lals[index].menu_sub.length; i++) {

          for (k in lals[index].menu_sub[i]) {
            ms_a = '';

            for (a in lals[index].menu_sub[i][k]) {
              //将标签中的数据传给url
              let h_url = "../pages/search.html?" + lals[index].menu_sub[i][k][a];

              ms_a += '<a href=' + h_url + '>' + lals[index].menu_sub[i][k][a] + '</a>';
            }


            items = '<div class="items">' + ms_a + '</div>';
            if (i == 0) {
              firstitem = '<div class="items">' + ms_a + '</div>';
              firstlal = '<label for="">' + k + '</label>';
            }

            else {
              lal = '<label for="">' + k + '</label>';

              items_lal += lal + items;
            }


          }


          hidden_item = '<div class="hidden-item">'
            + ' <div class="label-header" >' + firstlal +
            '</div>' + firstitem + items_lal + '</div>';


        }
        hidden_items = '<div class="hidden-items">' + hidden_item + '</div>';
        // console.log(hidden_items);
        main_top_left.innerHTML += `${hidden_items}`;


        // 处理位置
        let hidden = document.querySelectorAll('div.hidden-items')[index];
        hidden.style.top += height + 'px';
        height += 50;

        //


      }


      // 动态生成隐藏标签
      // 需要循环的地方很多
      // 1. a
      // 2. label
      // 3.items
      // 4.hiddle-item


      // 1. 定位到 hidden-items


      // let hidden_items=document.querySelector("div.hidden-items");

      // 循环 hidden-items 标签

    }


  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>






</style>
