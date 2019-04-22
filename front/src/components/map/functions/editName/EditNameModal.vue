<template>
  <div class="changeNameModal">
    <md-dialog :md-active="isModalOpen" class="modal">
      モーダルです
      {{ modalState }}
      <md-field>
        <label>Type here!</label>
        <md-input v-model="text"></md-input>
      </md-field>
      <div class="buttonWrapper">
        <md-button class="md-dense md-primary" @click="closeModal">
          変更せずに閉じる
        </md-button>
        <md-button class="md-dense md-primary md-raised" @click="save">
          名前を変更する
        </md-button>
      </div>
    </md-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { NAME_SPACE } from "@/store";
import { Modal, PointForUI } from "@/store/modules/map/types";

import { MdDialog, MdField, MdButton } from "vue-material/dist/components";

Vue.use(MdDialog);
Vue.use(MdField);
Vue.use(MdButton);

const mapModule = namespace(NAME_SPACE.map);

@Component({
  components: {}
})
export default class EditNameModal extends Vue {
  text = "";
  @mapModule.Action("setModalEditName")
  private setModal!: (bool: boolean) => void;

  @mapModule.Action("editPointName")
  private editPointName!: ({
    targetPoint,
    newName
  }: {
    targetPoint: PointForUI;
    newName: string;
  }) => void;

  @mapModule.Getter("modalEditName")
  private modalState!: Modal;

  get isModalOpen() {
    return this.modalState.isOpen;
  }

  @Watch("isModalOpen")
  setInitialName(newVal: any, oldVal: any) {
    if (newVal === true) {
      const { targetPoint } = this.modalState;
      this.text = targetPoint ? targetPoint.name : "";
    }
  }

  private closeModal() {
    this.setModal(false);
  }

  private save() {
    this.editPointName({
      targetPoint: this.modalState.targetPoint as PointForUI,
      newName: this.text
    });
    this.closeModal();
  }
}
</script>

<style lang="scss" scoped>
.modal {
  z-index: 9001;
}
.buttonWrapper {
  display: flex;
  justify-content: flex-end;
}
</style>
