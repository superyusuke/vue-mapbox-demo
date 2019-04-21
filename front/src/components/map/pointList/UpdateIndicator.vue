<template>
  <div class="updateIndicator">
    <div :class="styles"></div>
    <MdTooltip class="tip" md-direction="top">{{ tooltipMessage }}</MdTooltip>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import updateIndicatorStyles from "@/components/map/pointList/updateIndicatorStyles";
import { PointForUI } from "@/store/modules/map/types";
import { MdTooltip } from "vue-material/dist/components";

Vue.use(MdTooltip);

@Component({
  components: {}
})
export default class UpdateIndicator extends Vue {
  @Prop() private point!: PointForUI;

  @Prop() private isActive!: boolean;

  get styles() {
    const point = this.point;
    const isActive = this.isActive;
    return updateIndicatorStyles(point, isActive);
  }

  get tooltipMessage() {
    const point = this.point;

    if (point.newItem.isNew) {
      return "New Item";
    }

    if (point.updated) {
      return "is Updated";
    }

    if (point.active) {
      return "is Active";
    } else {
      return "is Inactive";
    }
  }
}
</script>

<style scoped lang="scss">
.tip {
  z-index: 1000;
  margin-left: 5px;
}
</style>
