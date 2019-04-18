<template>
  <div class="pointItem" :id="idForScroll">
    <div @click="clickHandler" :class="compStyle">
      {{ point.name }} {{ coordinates }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action, namespace } from "vuex-class";
import { PointForUI, StorePoint } from "@/store/modules/map/types";
import { NAME_SPACE } from "@/store";
import createStorePointFromPointForUI from "@/store/modules/map/util/createStorePointFromPointForUI";
import { css } from "emotion";
import createIdForScroll from "@/components/map/pointList/createIdForScroll";

const mapModule = namespace(NAME_SPACE.map);

const compStyle = (isActive: boolean) => {
  const backgroundColor = isActive ? "#ff9b9b" : "transparent";
  const hoverColor = isActive ? "#ff9b9b" : "#d7eeff";
  return css`
    background: ${backgroundColor};
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
      background: ${hoverColor};
    }
  `;
};

@Component({
  components: {}
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
