import { MutationTree } from "vuex";
import { MapState, Point } from "@/store/modules/map/types";

const mutations: MutationTree<MapState> = {
  addPointToList(state, point: Point) {
    state.pointList.push(point);
  },
  setInitialPointList(state, pointList: Point[]) {
    state.pointList = pointList;
  }
};

export default mutations;
