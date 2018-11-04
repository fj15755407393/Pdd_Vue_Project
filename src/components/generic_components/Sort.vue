<template>
  <div class="sort">
    <ul>
      <li class="li1-css"><span>排序方式:</span></li>
      <li class="li1-css"><a href="#" id="del">默认</a></li>
      <li class="li1-css"><a href="#" id="theNew">最新</a></li>
    </ul>
    <ul class="ul1-css">
      <li class="li1-css"><span>月薪:</span></li>
      <li class="li1-css" >
        <input type="text" placeholder="不限" id="input1">
        <div id="pay" class="xiangdui">
          <a href="#">不限</a>
          <a href="#">5k</a>
          <a href="#">10k</a>
          <a href="#">15k</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "sort"
    }
</script>

<style scoped>

</style>
