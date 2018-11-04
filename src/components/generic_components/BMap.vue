<template>
  <!--地图容器-->

</template>
<script>
  export default {
    name:'',
    data () {
      return {

      }
    },
    mounted() {
      /*
     创建地图实例
     * 位                </div>于BMap命名空间下的Map类表示地图，通过new操作符可以创建一个地图实例。
     * 其            </div>参数可以是元素id也可以是元素对象。
     * 注意在调用此构造函数时应确保容器元素已经添加到地图上。*/
      let map = new BMap.Map("c-addr-left");
      /*
       创建点坐标
       * 这里我们使用BMap命名空间下的Point类来创建一个坐标点。
       * Point类描述了一个地理坐标点，其中120.58531600000003表示经度，31.298886表示纬度。*/
      let point = new BMap.Point(120.58531600000003, 31.298886);
      /*
       地图初始化
       * 在创建地图实例后，我们需要对其进行初始化，BMap.Map.centerAndZoom()方法要求设置中心点坐标和地图级别。
       * 地图必须经过初始化才可以执行其他操作。*/
      map.centerAndZoom(point, 11);//后面的参数表示地图级别，地图的最小，最大级别分别是1,18.
// getCurrentPosition() 方法来获得用户的位置
      map.addControl(new BMap.NavigationControl());//添加地图控件
      let myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(300, 157));
      let marker2 = new BMap.Marker(point);  // 创建标注
      map.addOverlay(marker2);              // 将标注添加到地图中
      let local = new BMap.LocalSearch(map, {
        renderOptions: {map: map}
      });

      let marker = new BMap.Marker(point);
      map.addOverlay(marker);
      map.enableScrollWheelZoom(true);
      /*
      默认情况下地图不支持鼠标滚轮缩放操作，因为这样可能会影响整个页面的用户体验，
      但是如果您希望在地图中使用鼠标滚轮控制缩放，则可以调用map.enableScrollWheelZoom方法来开启。
      * */
      map.addControl(new BMap.MapTypeControl());
      let routePolicy = [BMAP_DRIVING_POLICY_LEAST_TIME];

    }
  }
</script>
<style scoped>
  html,body,.bmap{
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    font-family: "微软雅黑";
  }
</style>
