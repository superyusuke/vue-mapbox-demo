<template>
  <MglMarker
    :coordinates="coordinates"
    :offset="[-10, -40]"
    ref="marker"
    :draggable="true"
    @dragend="dragEnd"
    @dragstart="dragStart"
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
import { PointForUI, StorePoint } from "@/store/modules/map/types";
import MarkerUI from "@/components/map/mapbox/MarkerUI.vue";
import createStorePointFromPointForUI from "@/store/modules/map/util/createStorePointFromPointForUI";

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

  @mapModule.Action("setActivePoint")
  private setActivePoint!: (newPoint: StorePoint) => void;

  mounted() {
    this.setZIndex();
  }

  updated() {
    this.setZIndex();
  }

  setZIndex() {
    const dom = this.$refs.marker as any;
    const markerDom = dom.marker._element;
    if (this.isActive) {
      markerDom.style.zIndex = 1000;
    } else {
      markerDom.style.zIndex = 1;
    }
  }

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
  private dragStart() {
    const activePoint = createStorePointFromPointForUI(this.point);
    this.setActivePoint(activePoint);
  }
  dragEnd(e: any) {
    const { lng, lat } = e.marker.getLngLat();

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
    this.setActivePoint(newPoint);
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
