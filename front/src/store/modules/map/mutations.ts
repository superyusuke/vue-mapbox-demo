import { MutationTree } from "vuex";
import { MapState, FetchedPoint, StorePoint } from "@/store/modules/map/types";

const mutations: MutationTree<MapState> = {
  setInitialPointList(state, pointList: StorePoint[]) {
    state.initialPointList = pointList;
    state.currentPointList = pointList;
  },
  addPointToList(state, point: StorePoint) {
    state.currentPointList.push(point);
  }
};

export default mutations;
