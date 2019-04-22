<template>
  <div>
    <PointList />
    <MainMap />
    <DebugModeChanger />
    <ChangeNameModal />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainMap from "@/components/map/mapbox/MainMap.vue";
import PointList from "@/components/map/pointList/PointList.vue";
import DebugModeChanger from "@/components/map/forDev/DebugModeChanger.vue";
import ChangeNameModal from "@/components/map/functions/editName/EditNameModal.vue";

@Component({
  components: {
    MainMap,
    PointList,
    DebugModeChanger,
    ChangeNameModal
  }
})
export default class Map extends Vue {}
</script>
