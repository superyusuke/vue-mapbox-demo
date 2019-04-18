<template>
  <div @click="markerClickHandler" class="markerUi">
    <div :class="markerUIStyle(point, isActive)"></div>
    <PopUp :isSelected="isActive" :point="point" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PointForUI, StorePoint } from "@/store/modules/map/types";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import { NAME_SPACE } from "@/store";
import markerUIStyle from "@/components/map/mapbox/markerUIStyle";
import PopUp from "@/components/map/mapbox/PopUp.vue";
import createStorePointFromPointForUI from "@/store/modules/map/util/createStorePointFromPointForUI";

const mapModule = namespace(NAME_SPACE.map);

@Component({
  components: { PopUp }
})
export default class MarkerWrapper extends Vue {
  @Prop() private point!: PointForUI;

  @Prop() private isActive!: boolean;

  @mapModule.Action("setActivePoint")
  private setActivePoint!: (activePoint: StorePoint) => void;

  private get markerUIStyle() {
    return markerUIStyle;
  }

  private markerClickHandler(e: any) {
    e.stopPropagation();
    const activePoint = createStorePointFromPointForUI(this.point);
    this.setActivePoint(activePoint);
  }
}
</script>

<style scoped>
.markerUi {
}
</style>
