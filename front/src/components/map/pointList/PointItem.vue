<template>
  <div class="pointItem">
    <div @click="clickHandler" :class="compStyle">{{ point.name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action, namespace } from "vuex-class";
import { PointForUI, StorePoint } from "@/store/modules/map/types";
import { NAME_SPACE } from "@/store";
import createStorePointFromPointForUI from "@/store/modules/map/util/createStorePointFromPointForUI";
import { css } from "emotion";

const mapModule = namespace(NAME_SPACE.map);

const compStyle = (isActive: boolean) => {
  const backgroundColor = isActive ? "red" : "transparent";
  const hoverColor = isActive ? "red" : "#acd8fa";
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

  @mapModule.Action("setActivePoint")
  private setActivePoint!: (activePoint: StorePoint) => void;

  @mapModule.Getter("someGetter")
  private someGetter!: any[];

  private get compStyle() {
    const isActive = this.isActive;
    return compStyle(isActive);
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
  }
}
</script>

<style scoped lang="scss">
.name {
  text-align: left;
}
</style>
