import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

import map from "@/store/modules/map";

Vue.use(Vuex);

export const NAME_SPACE = {
  map: "map"
};

export const storeConfig: StoreOptions<{}> = {
  modules: { map }
};

export default new Vuex.Store<{}>(storeConfig);
