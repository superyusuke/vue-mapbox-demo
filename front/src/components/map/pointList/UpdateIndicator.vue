<template>
  <div class="updateIndicator">
    <div :class="styles"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import updateIndicatorStyles from "@/components/map/pointList/updateIndicatorStyles";
import { PointForUI } from "@/store/modules/map/types";

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
}
</script>

<style scoped lang="scss"></style>
