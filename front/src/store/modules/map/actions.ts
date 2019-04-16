import { ActionTree } from "vuex";
import { MapState, FetchedPoint, StorePoint } from "@/store/modules/map/types";
import axios from "axios";
import storePointCreator from "@/store/modules/map/util/storePointCreator";
import { Coordinates } from "@/store/modules/map/types";

const actions: ActionTree<MapState, {}> = {
  async fetchInitialPointList({ dispatch }) {
    try {
      const res = await axios.get("/api/points");
      const { data }: { data: FetchedPoint[] } = res;
      const pointList: StorePoint[] = data.map(point => {
        return storePointCreator(point);
      });
      dispatch("setInitialPointList", pointList);
    } catch (e) {
      throw new Error(e);
    }
  },
  setInitialPointList({ commit }, pointList: StorePoint[]) {
    commit("setInitialPointList", pointList);
  },
  addPointToList({ commit, state }, coordinates: Coordinates) {
    const point: StorePoint = {
      active: true,
      coordinates,
      id: null,
      name: "newItem",
      newItem: {
        isNew: true,
        tempId: state.tempId
      },
      toDelete: false
    };
    state.tempId++;
    commit("addPointToList", point);
    console.log(point, "in action");
  }
};

export default actions;
