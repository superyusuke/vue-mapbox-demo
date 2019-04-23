<template>
  <div v-if="isSelected">
    <div class="popupWrapper">
      <div class="topFrame">
        <div class="content">
          <div class="nameWrapper">
            <div class="name">{{ nameSubStringed }}</div>
            <EditName :point="point" />
          </div>
        </div>
      </div>
      <div class="bottomFrame"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PointForUI } from "@/store/modules/map/types";
import EditName from "@/components/map/functions/editName/EditName.vue";

@Component({
  components: { EditName }
})
export default class MarkerWrapper extends Vue {
  @Prop() private point!: PointForUI;
  @Prop() private isSelected!: boolean;

  get nameSubStringed() {
    const name = this.point.name;
    const length = 40;
    if (name.length >= length) {
      return name.substring(0, length) + "...";
    }
    return name;
  }
}
</script>

<style scoped lang="scss">
$popupWidth: 150px;
$paddingHorizontal: 10px;

.popupWrapper {
  position: absolute;
  top: -125px;
  left: -$popupWidth / 2 + 2px;
  z-index: 1;
}
.switchWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
}
.topFrame {
  background: white;
  width: $popupWidth + $paddingHorizontal * 2;
  height: 100px;
  box-shadow: 6px 10px 5px -1px rgba(0, 0, 0, 0.32);
}
.bottomFrame {
  position: absolute;
  left: $popupWidth / 2;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 20px 10px 0 10px;
  border-color: #ffffff transparent transparent transparent;
}
.content {
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 10px 0;
}

.editButton {
  position: absolute;
  bottom: 8px;
  left: 11px;
}
.name {
  width: 200px;
  font-size: 13px;
  line-height: 1.4;
  text-align: left;
}
.nameWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
