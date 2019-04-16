import { MutationTree } from "vuex";
import { MapState, FetchedPoint } from "@/store/modules/map/types";

const mutations: MutationTree<MapState> = {
  addPointToList(state, point: FetchedPoint) {
    state.pointList.push(point);
  },
  setInitialPointList(state, pointList: FetchedPoint[]) {
    state.pointList = pointList;
  }
};

export default mutations;
