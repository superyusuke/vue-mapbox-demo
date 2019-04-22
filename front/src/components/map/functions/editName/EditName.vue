<template>
  <div class="editName">
    <div @click="openModal">
      <md-icon class="icon">edit</md-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { NAME_SPACE } from "@/store";
import { PointForUI, Modal } from "@/store/modules/map/types";
import { MdIcon } from "vue-material/dist/components";
import { MdTooltip } from "vue-material/dist/components";

Vue.use(MdIcon);
Vue.use(MdTooltip);

const mapModule = namespace(NAME_SPACE.map);

@Component({
  components: {}
})
export default class EditName extends Vue {
  @Prop() private point!: PointForUI;

  @mapModule.Action("setModalEditName")
  private setModal!: (IModal: Modal) => void;

  private openModal() {
    this.setModal({ isOpen: true, targetPoint: this.point });
  }
}
</script>

<style scoped lang="scss">
.icon {
  font-size: 15px !important;
}
</style>
