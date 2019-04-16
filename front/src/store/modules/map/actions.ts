import { ActionTree } from "vuex";
import { MapState, Point } from "@/store/modules/map/types";

export type IPayload = {
  point: Point;
};

const actions: ActionTree<MapState, {}> = {
  addPointToList({ commit }, payload: IPayload) {
    const { point } = payload;
    commit("addPointToList", point);
    console.log(point, "in action");
  },
  setInitialPointList({ commit }, pointList: Point[]) {
    commit("setInitialPointList", pointList);
  }
};

export default actions;
