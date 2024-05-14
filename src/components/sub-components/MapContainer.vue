<script>
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  name: "MapContainer",
};
let map = null;

onMounted(() => {
  AMapLoader.load({
    key: "b60dc3b74df97fba1c1bcb248f4e88a6",
    version: "2.0",
    plugins: ['AMap.Scale', "AMap.ToolBar"]
  })
    .then((AMap) => {
      map = new AMap.Map("container", {
        mapStyle: "amap://styles/fresh",
        viewMode: "3D",
        zoom: 5,
        center: [116.397428, 39.90923],
      });
      map.on('mousemove', function (e) {
        const lng = e.lnglat.getLng();
        const lat = e.lnglat.getLat();
        const lngDegrees = Math.floor(lng); // 获取经度的度数
        const lngMinutes = Math.floor((lng - lngDegrees) * 60); // 获取经度的分钟数
        const lngSeconds = Math.floor(((lng - lngDegrees) * 60 - lngMinutes) * 60); // 获取经度的秒数
        const latDegrees = Math.floor(lat); // 获取纬度的度数
        const latMinutes = Math.floor((lat - latDegrees) * 60); // 获取纬度的分钟数
        const latSeconds = Math.floor(((lat - latDegrees) * 60 - latMinutes) * 60); // 获取纬度的秒数
        document.getElementById("lonlat").textContent = "经度:" + lngDegrees + '°' + lngMinutes + '\'' + lngSeconds + '″ 纬度:' + latDegrees + '°' + latMinutes + '\'' + latSeconds + '″';
      });
      var scale = new AMap.Scale();
      map.addControl(scale);
      var toolbar = new AMap.ToolBar(); //创建工具条插件实例
      map.addControl(toolbar); //添加工具条插件到页面

      //创建右键菜单
      var contextMenu = new AMap.ContextMenu();
      //右键放大
      contextMenu.addItem("放大一级", function () {
        map.zoomIn();
      }, 0);
      //右键缩小
      contextMenu.addItem("缩小一级", function () {
        map.zoomOut();
      }, 1);
      //右键显示全国范围
      contextMenu.addItem("缩放至全国范围", function () {
        map.setZoomAndCenter(4, [108.946609, 34.262324]);
      }, 2);
      //地图绑定鼠标右击事件——弹出右键菜单
      map.on('rightclick', function (e) {
        contextMenu.open(map, e.lnglat);
      });




      
    })
    .catch((e) => {
      console.log(e);
    });
});

onUnmounted(() => {
  if (map) {
    map.destroy();
  }
});
</script>

<template>
  <div id="container">
    <iframe id='weatherwidget' scrolling="no" src="https://widget.tianqiapi.com/?style=ty&skin=pitaya" frameborder="0"
      width="200" height="75" allowtransparency="true"></iframe>
    <!-- <p id="lonlat"></p> -->
    <el-text class="mx-1" type="default" id="lonlat"></el-text>
  </div> <!-- 地图容器 -->

</template>

<style scoped>
#container {
  position: relative;
  /* 使绝对定位的子元素相对于它定位 */
  width: 100%;
  height: 800px;
  z-index: 0;
  border: 1px solid #000;
  border-radius: 10px;
}

#weatherwidget {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
}

#lonlat {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  margin: 5px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.5);
}
</style>

<style>
/* html,
body,
#container {
  height: 100%;
  width: 100%;
} */



.input-card {
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: .25rem;
  width: 22rem;
  border-width: 0;
  border-radius: 0.4rem;
  box-shadow: 0 2px 6px 0 rgba(114, 124, 245, .5);
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;

}


.content-window-card p {
  height: 2rem;
}

.custom-info {
  border: solid 1px silver;
}




div.info-top {
  position: relative;
  background: none repeat scroll 0 0 #F9F9F9;
  border-bottom: 1px solid #CCC;
  border-radius: 5px 5px 0 0;
}

div.info-top div {
  display: inline-block;
  color: #333333;
  font-size: 14px;
  font-weight: bold;
  line-height: 31px;
  padding: 0 10px;
}

div.info-top img {
  position: absolute;
  top: 10px;
  right: 10px;
  transition-duration: 0.25s;
}

div.info-top img:hover {
  box-shadow: 0px 0px 5px #000;
}

div.info-middle {
  font-size: 12px;
  padding: 10px 6px;
  line-height: 20px;
}

div.info-bottom {
  height: 0px;
  width: 100%;
  clear: both;
  text-align: center;
}

div.info-bottom img {
  position: relative;
  z-index: 104;
}


.info-middle img {
  float: left;
  margin-right: 6px;
}
</style>