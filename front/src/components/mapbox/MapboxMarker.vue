<template>
  <MglMarker
    :coordinates="coordinates"
    :offset="[-10, -40]"
    ref="marker"
    :draggable="true"
    @dragend="dragEnd"
  >
    <!-- この名前の slot に与えることで、custom の UI を使える -->
    <template slot="marker">
      <div class="tempMarker">{{ point }}</div>
    </template>
  </MglMarker>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as vueMapbox from "vue-mapbox";
import randomcolor from "randomcolor";
import { PointForUI } from "@/store/modules/map/types";

@Component({
  components: {
    MglMarker: vueMapbox.MglMarker
  }
})
export default class MapboxMarker extends Vue {
  @Prop() private point!: PointForUI;
  // マーカーの位置
  get coordinates() {
    const { coordinates } = this.point;
    const { lng, lat } = coordinates;
    return [lng, lat];
  }
  dragEnd(e: any) {
    const { lng, lat } = e.marker.getLngLat();
    console.log({ lng, lat });

    // DOM を強引に取得し、操作する場合
    const dom = this.$refs.marker as any;
    const markerDom = dom.marker._element;
    console.log(markerDom);
    markerDom.style.background = randomcolor();
  }
}
</script>

<style scoped>
.tempMarker {
  background: #42b983;
  padding: 10px;
  border-radius: 10px;
}
</style>
