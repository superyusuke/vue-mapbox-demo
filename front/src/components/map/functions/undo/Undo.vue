<template>
  <div class="undoUi">
    <template v-if="canUndo">
      <div @click="undo" class="clickableArea">
        <md-icon class="icon">undo</md-icon>
        <MdTooltip class="tip" md-direction="right"
          >Undo modification.</MdTooltip
        >
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { PointForUI } from "@/store/modules/map/types";
import { NAME_SPACE } from "@/store";

import { MdIcon } from "vue-material/dist/components";
import { MdTooltip } from "vue-material/dist/components";

Vue.use(MdIcon);
Vue.use(MdTooltip);

const mapModule = namespace(NAME_SPACE.map);

@Component({
  components: {}
})
export default class UndoUi extends Vue {
  @Prop() private point!: PointForUI;

  @mapModule.Action("revertPoint")
  private revertPoint!: (point: PointForUI) => void;

  get canUndo() {
    const point = this.point;
    const { updated, newItem } = point;
    const { isNew } = newItem;

    return updated && !isNew;
  }

  private undo(e: Event) {
    e.stopPropagation();
    this.revertPoint(this.point);
  }
}
</script>

<style scoped lang="scss">
.icon {
  font-size: 15px !important;
}
.tip {
  margin-left: -15px;
  z-index: 1000;
}
</style>
