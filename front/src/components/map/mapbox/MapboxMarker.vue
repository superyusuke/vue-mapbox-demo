<template>
  <MglMarker
    :coordinates="coordinates"
    :offset="[-10, -40]"
    ref="marker"
    :draggable="true"
    @dragend="dragEnd"
  >
    <template slot="marker">
      <MarkerUI :point="point" :isActive="isActive" />
    </template>
  </MglMarker>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import { NAME_SPACE } from "@/store";
import * as vueMapbox from "vue-mapbox";
import randomcolor from "randomcolor";
import { PointForUI, StorePoint } from "@/store/modules/map/types";
import MarkerUI from "@/components/map/mapbox/MarkerUI.vue";

const mapModule = namespace(NAME_SPACE.map);

@Component({
  components: {
    MglMarker: vueMapbox.MglMarker,
    MarkerUI
  }
})
export default class MapboxMarker extends Vue {
  @Prop() private point!: PointForUI;

  @mapModule.Getter("activePoint")
  private activePoint!: StorePoint;

  @mapModule.Action("editPoint")
  private editPoint!: (newPoint: StorePoint) => void;

  private get isActive(): boolean {
    const thisPoint = this.point;
    const activePoint = this.activePoint;

    if (!thisPoint || !activePoint) {
      return false;
    }
    if (!thisPoint.newItem.isNew) {
      return thisPoint.id === activePoint.id;
    }
    return thisPoint.newItem.tempId === activePoint.newItem.tempId;
  }

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

    // 地点を変更する
    const currentPoint = this.point;

    const newPoint: StorePoint = {
      toDelete: currentPoint.toDelete,
      newItem: currentPoint.newItem,
      name: currentPoint.name,
      id: currentPoint.id,
      coordinates: { lng, lat },
      active: currentPoint.active
    };
    this.editPoint(newPoint);
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
