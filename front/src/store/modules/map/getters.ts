import { GetterTree } from "vuex";
import {
  MapState,
  PointForUI,
  StorePoint,
  Modal
} from "@/store/modules/map/types";
import pointForUICreator from "@/store/modules/map/util/pointForUICreator";

const getters: GetterTree<MapState, {}> = {
  pointListForUI(state: MapState): PointForUI {
    const initialPointList = state.initialPointList;
    const currentPointList = state.currentPointList;
    return pointForUICreator({ initialPointList, currentPointList });
  },
  activePoint(state: MapState): StorePoint | null {
    return state.activePoint;
  },
  modalEditName(state: MapState): Modal {
    return state.modal.nameEdit;
  }
};

export default getters;
