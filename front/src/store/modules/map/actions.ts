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
import createIdForScroll from "@/components/map/pointList/createIdForScroll";

const getScroll = (point: StorePoint | PointForUI) => {
  const element: any = document.getElementById("point-list");
  const scrollPosition = element.scrollTop;

  const targetIdString = createIdForScroll(point);

  const targetGroup: any = document.getElementById(targetIdString);
  const topPos = targetGroup.offsetTop - 20;

  element.scrollTop = topPos;
};

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
  async addPointToList(
    { commit, dispatch, state },
    { coordinates, name }: { coordinates: Coordinates; name: string }
  ) {
    const point: StorePoint = {
      active: true,
      coordinates,
      id: null,
      name: name,
      newItem: {
        isNew: true,
        tempId: state.tempId
      },
      toDelete: false
    };
    state.tempId++;
    await commit("addPointToList", point);
    dispatch("setActivePoint", point);
    getScroll(point);
  },
  editPoint({ commit }, newPoint: StorePoint) {
    commit("editPoint", newPoint);
  },
  setActivePoint({ commit }, activePoint: StorePoint) {
    commit("setActivePoint", activePoint);
  },
  setDebugMode({ state }, bool: boolean) {
    state.isDebugMode = bool;
  },
  revertPoint({ commit }, targetPoint: PointForUI) {
    commit("revertPoint", targetPoint);
  },
  setModalEditName(
    { state },
    { isOpen, targetPoint }: { isOpen: boolean; targetPoint: PointForUI }
  ) {
    state.modal.nameEdit = {
      isOpen,
      targetPoint
    };
  },
  editPointName(
    { commit },
    { targetPoint, newName }: { targetPoint: PointForUI; newName: string }
  ) {
    commit("editPointName", { targetPoint, newName });
  }
};

export default actions;
