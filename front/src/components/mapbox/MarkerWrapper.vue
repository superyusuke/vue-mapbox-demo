<template>
  <div>
    <template v-for="point in points">
      <MapboxMarker
        :point="point"
        :key="point.id || `temp${point.newItem.tempId}`"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MapboxMarker from "@/components/mapbox/MapboxMarker.vue";
import { PointForUI } from "@/store/modules/map/types";

@Component({
  components: { MapboxMarker }
})
export default class MarkerWrapper extends Vue {
  @Prop() private points!: PointForUI[];
}
</script>

<style scoped></style>
