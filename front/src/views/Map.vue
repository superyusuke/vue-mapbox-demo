<template>
  <div>
    <MainMap />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainMap from "@/components/map/mapbox/MainMap.vue";

@Component({
  components: {
    MainMap
  }
})
export default class Map extends Vue {}
</script>
