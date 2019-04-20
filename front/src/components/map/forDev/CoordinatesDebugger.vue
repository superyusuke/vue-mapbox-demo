<template>
  <div class="coordinatesDebugger" v-if="isDebugMode">
    <div>#{{ point.id }} {{ point.coordinates }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { PointForUI } from "@/store/modules/map/types";
import { namespace } from "vuex-class";
import { NAME_SPACE } from "@/store";

const mapModule = namespace(NAME_SPACE.map);

@Component
export default class CoordinatesDebugger extends Vue {
  @Prop() private point!: PointForUI;

  @mapModule.State("isDebugMode")
  private isDebugMode!: boolean;
}
</script>

<style scoped lang="scss">
.coordinatesDebugger {
  background: aqua;
  padding: 0 10px;
  border-radius: 10px;
  margin: 0 10px;
  font-size: 14px;
}
</style>
