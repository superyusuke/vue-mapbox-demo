<template>
  <div id="map-wrap">
    <router-link to="/" class="mainMapLink">
      <a>トップページへ移動する</a>
    </router-link>
    <MglMap
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      :zoom.sync="zoom"
      :center="center"
    >
      <MglNavigationControl />
      <MapboxMarker />
    </MglMap>
  </div>
</template>

<script lang="ts">
import "mapbox-gl/dist/mapbox-gl.css"; // mapbox 用の CSS
import * as vueMapbox from "vue-mapbox"; // typeScript 的な記述。内容については後述
import MapboxMarker from "@/components/mapbox/MapboxMarker.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    MglMap: vueMapbox.MglMap, // メインの地図
    MglNavigationControl: vueMapbox.MglNavigationControl, // 拡大縮尺等のコントローラーコンポーネント
    MapboxMarker
  }
})
export default class MainMap extends Vue {
  accessToken = process.env.VUE_APP_MAPBOX_KEY; // 環境変数として持つ。オープンな git リポジトリにキーを公開しないため。
  zoom = 17;
  mapStyle = "mapbox://styles/mapbox/streets-v10"; // 見た目。色々あるが標準のものを採用
  center = { lon: 139.7009177, lat: 35.6580971 }; // 地図の中心地
}
</script>

<style>
.mainMapLink {
  position: absolute;
  z-index: 100;
  left: 0;
  padding: 5px;
  margin: 10px;
  background: #42b983;
  border-radius: 10px;
  text-decoration: none;
  color: white;
}
.mapboxgl-canvas {
  outline: transparent;
  left: 0;
}
#map-wrap {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}

#map-wrap .mgl-map-wrapper {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
}

#map-wrap .mgl-map-wrapper .mapboxgl-map {
  height: 100%;
  left: 0;
  overflow: visible;
  position: absolute;
  top: 0;
  width: 100%;
}

.mapboxgl-ctrl-attrib-inner {
  display: none;
}

.button {
  position: absolute;
  z-index: 100;
  background: rebeccapurple;
}
</style>
