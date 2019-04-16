import { ActionTree } from "vuex";
import { MapState, FetchedPoint } from "@/store/modules/map/types";
import axios from "axios";

export type IPayload = {
  point: FetchedPoint;
};

const actions: ActionTree<MapState, {}> = {
  async fetchInitialPointList({ commit }) {
    try {
      const res = await axios.get("/api/points");
      const { data }: { data: FetchedPoint[] } = res;
      commit("setInitialPointList", data);
    } catch (e) {
      throw new Error(e);
    }
  },
  setInitialPointList({ commit }, pointList: FetchedPoint[]) {
    commit("setInitialPointList", pointList);
  },
  addPointToList({ commit }, payload: IPayload) {
    const { point } = payload;
    commit("addPointToList", point);
    console.log(point, "in action");
  }
};

export default actions;
