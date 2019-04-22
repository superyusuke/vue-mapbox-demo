<template>
  <div class="changeNameModal">
    <md-dialog :md-active="isModalOpen" class="modal">
      モーダルです
      {{ modalState }}
      <div @click="closeModal">close</div>
    </md-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { NAME_SPACE } from "@/store";
import { Modal } from "@/store/modules/map/types";

import { MdDialog } from "vue-material/dist/components";

Vue.use(MdDialog);

const mapModule = namespace(NAME_SPACE.map);

@Component({
  components: {}
})
export default class EditNameModal extends Vue {
  @mapModule.Action("setModalEditName")
  private setModal!: (bool: boolean) => void;

  @mapModule.Getter("modalEditName")
  private modalState!: Modal;

  get isModalOpen() {
    return this.modalState.isOpen;
  }

  private closeModal() {
    this.setModal(false);
  }
}
</script>

<style lang="scss" scoped>
.modal {
  z-index: 9001;
}
</style>
