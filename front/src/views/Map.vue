<template>
  <div>
    <PointList />
    <MainMap />
    <DebugModeChanger />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainMap from "@/components/map/mapbox/MainMap.vue";
import PointList from "@/components/map/pointList/PointList.vue";
import DebugModeChanger from "@/components/map/forDev/DebugModeChanger.vue";

@Component({
  components: {
    MainMap,
    PointList,
    DebugModeChanger
  }
})
export default class Map extends Vue {}
</script>
