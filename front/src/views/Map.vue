<template>
  <div>
    <PointList />
    <MainMap />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainMap from "@/components/map/mapbox/MainMap.vue";
import PointList from "@/components/map/pointList/PointList.vue";

@Component({
  components: {
    MainMap,
    PointList
  }
})
export default class Map extends Vue {}
</script>
