import { MutationTree } from "vuex";
import { MapState, FetchedPoint, StorePoint } from "@/store/modules/map/types";
import editPoint from "@/store/modules/map/util/editPoint";

const mutations: MutationTree<MapState> = {
  setInitialPointList(state, pointList: StorePoint[]) {
    state.initialPointList = pointList;
    state.currentPointList = pointList;
  },
  addPointToList(state, point: StorePoint) {
    state.currentPointList.push(point);
  },
  editPoint(state, newPoint: StorePoint) {
    const currentPointList = state.currentPointList;
    state.currentPointList = editPoint(currentPointList, newPoint);
  }
};

export default mutations;
