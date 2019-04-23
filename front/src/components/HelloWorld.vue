<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import GoogleMapsAPI from "./map/GoogleMapsAPI";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: number;
  get click(): number {
    return this.msg;
  }

  // fixme ダミーの実装
  private async play() {
    const res1 = await GoogleMapsAPI.geoCoding("渋谷区");
    const res2 = await GoogleMapsAPI.reverseGeoCoding({ lat: 123, lng: 12 });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
