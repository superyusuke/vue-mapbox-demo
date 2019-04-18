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
import createIdForScroll from "@/components/map/pointList/createIdForScroll";

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
    this.getScroll();
  }

  private get idForScroll() {
    const point = this.point;
    return createIdForScroll(point);
  }

  private getScroll() {
    const element: any = document.getElementById("point-list");
    const scrollPosition = element.scrollTop;
    console.log(scrollPosition);

    const point = this.point;

    const targetIdString = createIdForScroll(point);

    const targetGroup: any = document.getElementById(targetIdString);
    const topPos = targetGroup.offsetTop - 20;
    console.log(topPos);

    element.scrollTop = topPos;
  }
}
</script>

<style scoped>
.markerUi {
}
</style>
