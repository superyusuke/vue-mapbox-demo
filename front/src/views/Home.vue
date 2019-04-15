<template>
  <div class="home">
    <h1>Vue + Vuex + Vue-router + TypeScript Demo</h1>
    <button @click="clickHandler">クリック</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

type FetchData = {
  author: string;
  id: number;
  title: string;
};

@Component
export default class Home extends Vue {
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
