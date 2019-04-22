import { MutationTree } from "vuex";
import {
  MapState,
  FetchedPoint,
  StorePoint,
  PointForUI
} from "@/store/modules/map/types";
import editPoint from "@/store/modules/map/util/editPoint";
import revertPoint from "@/store/modules/map/util/revertPoint";
import editPointName from "@/store/modules/map/util/editPointName";

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
  },
  setActivePoint(state, activePoint: StorePoint) {
    state.activePoint = activePoint;
  },
  revertPoint(state, targetPoint: PointForUI) {
    const currentPointList = state.currentPointList;
    const initialPointList = state.initialPointList;
    state.currentPointList = revertPoint({
      targetPoint,
      currentPointList,
      initialPointList
    });
  },
  editPointName(
    state,
    { targetPoint, newName }: { targetPoint: PointForUI; newName: string }
  ) {
    const currentPointList = state.currentPointList;
    state.currentPointList = editPointName({
      currentPointList,
      targetPoint,
      newName
    });
  }
};

export default mutations;
