<template>
  <div class="pointList">
    <div>
      <template v-for="point in pointListForUI">
        <PointItem
          :key="point.id || `new${point.newItem.tempId}`"
          :point="point"
          :activePoint="activePoint"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action, namespace } from "vuex-class";
import { PointForUI, StorePoint } from "@/store/modules/map/types";
import { NAME_SPACE } from "@/store";
import PointItem from "@/components/map/pointList/PointItem.vue";

const mapModule = namespace(NAME_SPACE.map);

@Component({
  components: { PointItem }
})
export default class PointList extends Vue {
  @mapModule.Getter("pointListForUI")
  private pointListForUI!: PointForUI[];

  @mapModule.Getter("activePoint")
  private activePoint!: StorePoint;
}
</script>

<style scoped lang="scss">
.pointList {
  position: absolute;
  top: 100px;
  left: 10px;
  z-index: 1000;
  background: white;
  padding: 10px;
  max-height: 60vh;
  overflow: scroll;
}
</style>
