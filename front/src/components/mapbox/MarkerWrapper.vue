<template>
  <div>
    <template v-for="point in points">
      <MapboxMarker :point="point" :key="point.id" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MapboxMarker from "@/components/mapbox/MapboxMarker.vue";
import { pointData } from "@/components/mapbox/points";

@Component({
  components: { MapboxMarker }
})
export default class MarkerWrapper extends Vue {
  @Prop() private points!: pointData[];
}
</script>

<style scoped></style>
