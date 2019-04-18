<template>
  <div @click="markerClickHandler">
    <div :class="markerUIStyle(point, isActive)"></div>
    <PopUp :isSelected="isActive" :point="point" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PointForUI } from "@/store/modules/map/types";
import markerUIStyle from "@/components/map/mapbox/markerUIStyle";
import PopUp from "@/components/map/mapbox/PopUp.vue";

@Component({
  components: { PopUp }
})
export default class MarkerWrapper extends Vue {
  @Prop() private point!: PointForUI;

  @Prop() private isActive!: boolean;

  private get markerUIStyle() {
    return markerUIStyle;
  }

  private markerClickHandler() {
    console.log("ui click");
  }
}
</script>

<style scoped></style>
