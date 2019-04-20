<template>
  <div class="pointItem" :id="idForScroll">
    <div @click="clickHandler" :class="compStyle">
      <UpdateIndicator :point="point" :isActive="isActive" />
      {{ point.name }}
      <CoordinatesDebugger :point="point" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { PointForUI, StorePoint } from "@/store/modules/map/types";
import { NAME_SPACE } from "@/store";
import createStorePointFromPointForUI from "@/store/modules/map/util/createStorePointFromPointForUI";
import { css } from "emotion";
import createIdForScroll from "@/components/map/pointList/createIdForScroll";
import UpdateIndicator from "@/components/map/pointList/UpdateIndicator.vue";
import CoordinatesDebugger from "@/components/map/forDev/CoordinatesDebugger.vue";

const mapModule = namespace(NAME_SPACE.map);

const compStyle = (isActive: boolean) => {
  const backgroundColor = isActive ? "#e6e6e6" : "transparent";
  const hoverColor = isActive ? "#e6e6e6" : "#d7eeff";
  return css`
    background: ${backgroundColor};
    padding: 5px 10px;
    cursor: pointer;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover {
      background: ${hoverColor};
    }
  `;
};

@Component({
  components: {
    UpdateIndicator,
    CoordinatesDebugger
  }
})
export default class PointItem extends Vue {
  @Prop() private point!: PointForUI;

  @Prop() private activePoint!: StorePoint;

  private get coordinates() {
    return this.point.coordinates;
  }

  @mapModule.Action("setActivePoint")
  private setActivePoint!: (activePoint: StorePoint) => void;

  @mapModule.Action("flyToPoint")
  private flyToPoint!: (toPoint: PointForUI) => void;

  @mapModule.Getter("someGetter")
  private someGetter!: any[];

  private get compStyle() {
    const isActive = this.isActive;
    return compStyle(isActive);
  }

  private get idForScroll() {
    const point = this.point;
    return createIdForScroll(point);
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

  private clickHandler() {
    const activePoint = createStorePointFromPointForUI(this.point);
    this.setActivePoint(activePoint);
    this.flyToPoint(this.point);
  }
}
</script>

<style scoped lang="scss">
.name {
  text-align: left;
}
</style>
