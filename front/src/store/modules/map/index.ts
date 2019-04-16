import { Module } from "vuex";
import { MapState } from "@/store/modules/map/types";

import mutations from "@/store/modules/map/mutations";
import actions from "@/store/modules/map/actions";
import getters from "@/store/modules/map/getters";

const initialState: MapState = {
  initialPointList: [],
  currentPointList: []
};

const namespaced = true;

const map: Module<MapState, {}> = {
  namespaced,
  state: initialState,
  getters,
  mutations,
  actions
};

export default map;
