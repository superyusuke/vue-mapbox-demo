import { GetterTree } from "vuex";
import { MapState } from "@/store/modules/map/types";

const getters: GetterTree<MapState, {}> = {
  pointList: (state: MapState) => {
    return state.pointList;
  }
};

export default getters;
