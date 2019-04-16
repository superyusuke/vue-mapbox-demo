import { MutationTree } from "vuex";
import { MapState, FetchedPoint, StorePoint } from "@/store/modules/map/types";

const mutations: MutationTree<MapState> = {
  setInitialPointList(state, pointList: StorePoint[]) {
    state.pointList = pointList;
  },
  addPointToList(state, point: FetchedPoint) {
    state.pointList.push(point);
  }
};

export default mutations;
