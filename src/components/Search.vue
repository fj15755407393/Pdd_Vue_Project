<template>
  <div>
    <div class="top"><Nav></Nav></div>
    <!--<div class=" top-footer">-->
      <!--<SearchBox ></SearchBox>-->
    <!--</div>-->
    <Searchitem></Searchitem>
    <Sort></Sort>
    <Position_Search  ></Position_Search>
    <Foot></Foot>
  </div>

</template>

<script>

  import Nav from '../components/generic_components/Nav'
  import SearchBox from '../components/generic_components/SearchBox'
  import Searchitem from './generic_components/SearchItem'
  import Sort from './generic_components/Sort'
  import Position_Search from './generic_components/Position_Search'
  import Foot from './generic_components/Foot'
  export default {
    name: 'search',
    components:{
      Nav,Searchitem,Sort,Position_Search,
      Foot,SearchBox
    }
  }
</script>

<style>
  @import '../../static/css/search.css';
*{
  margin: 0;
  padding: 0;
}


  .top-footer{
    padding-top: 20px;
    background-color: rgba(252, 254, 255, 0);

  }
  div.top-footer div#hot-search{
    margin: 10px auto;
    margin-left: 340px;
    color: gray;
    font-size: 14px;
    text-align: left;
  }
  div.top-footer div#hot-search a{
    color: gray;
    margin-right: 10px;
  }
  div.top-footer div#hot-search label{
    margin-right: 15px;
  }
  div.top-footer div#hot-search a:hover{

    color: red;
  }

</style>
