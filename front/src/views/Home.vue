<template>
  <div class="home">
    <h1>Vue + Vuex + Vue-router + TypeScript Demo</h1>
    <button @click="clickHandler">クリック</button>
    <div>points: {{ pointList }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import axios from "axios";
import { NAME_SPACE } from "@/store";
import { Point } from "@/store/modules/map/types";

const mapModule = namespace(NAME_SPACE.map);

type FetchData = {
  author: string;
  id: number;
  title: string;
};

@Component
export default class Home extends Vue {
  @mapModule.State("pointList")
  private pointList!: Point[];

  private mounted() {
    console.log("mount");
    const res = this.pointList.map(point => {
      return point.coordinates;
    });

    console.log("res", res);
  }
  private async clickHandler() {
    const data = await this.fetchData();
    const { author, id, title } = data;
    console.log(title);
  }
  public async fetchData(): Promise<FetchData> {
    try {
      const res = await axios.get("/api/posts");
      const { data } = res;
      return data;
    } catch (e) {
      throw new Error(e);
    }
  }
}
</script>
