import { ActionTree } from "vuex";
import {
  MapState,
  FetchedPoint,
  StorePoint,
  PointForUI
} from "@/store/modules/map/types";
import axios from "axios";
import storePointCreator from "@/store/modules/map/util/storePointCreator";
import { Coordinates } from "@/store/modules/map/types";

const actions: ActionTree<MapState, {}> = {
  setMapboxActions({ state }, instance) {
    state.mapboxActions = instance;
  },
  async flyToPoint({ state }, toPoint: PointForUI) {
    const { coordinates } = toPoint;
    const { lng, lat } = coordinates;
    const asyncActions = state.mapboxActions;
    const newParams = await asyncActions.flyTo({
      center: [lng, lat],
      zoom: 17,
      speed: 5
    });
    console.log({ newParams });
  },
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
  addPointToList({ commit, dispatch, state }, coordinates: Coordinates) {
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
    dispatch("setActivePoint", point);
  },
  editPoint({ commit }, newPoint: StorePoint) {
    commit("editPoint", newPoint);
  },
  setActivePoint({ commit }, activePoint: StorePoint) {
    commit("setActivePoint", activePoint);
  }
};

export default actions;
