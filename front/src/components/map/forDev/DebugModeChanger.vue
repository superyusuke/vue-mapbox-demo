<template>
  <div class="debugModeChanger">
    <div :class="clickableAreaStyles" @click="toggleDebugMode">
      DebugMode {{ isDebugMode }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { css, cx } from "emotion";
import { NAME_SPACE } from "@/store";

const mapModule = namespace(NAME_SPACE.map);

@Component
export default class DebugModeChanger extends Vue {
  @Prop() private someProp!: any;

  @mapModule.Action("setDebugMode")
  private setDebugMode!: (boole: boolean) => void;

  @mapModule.State("isDebugMode")
  private isDebugMode!: boolean;

  private toggleDebugMode() {
    this.setDebugMode(!this.isDebugMode);
  }

  get clickableAreaStyles() {
    const color = this.isDebugMode ? "yellow" : "transparent";
    const emotionStyle = css`
      background: ${color};
    `;
    return cx("clickableArea", emotionStyle);
  }
}
</script>

<style scoped lang="scss">
.debugModeChanger {
  cursor: pointer;
  z-index: 1000;
  position: absolute;
  bottom: 0;
  right: 0;
}

.clickableArea {
  padding: 20px;
}
</style>
