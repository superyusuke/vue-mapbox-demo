import { GetterTree } from "vuex";
import { MapState, PointForUI } from "@/store/modules/map/types";
import pointForUICreator from "@/store/modules/map/util/pointForUICreator";

const getters: GetterTree<MapState, {}> = {
  pointListForUI(state: MapState): PointForUI {
    const initialPointList = state.initialPointList;
    const currentPointList = state.currentPointList;
    return pointForUICreator({ initialPointList, currentPointList });
  },
  pointList(state: MapState) {
    return state.initialPointList;
  }
};

export default getters;
