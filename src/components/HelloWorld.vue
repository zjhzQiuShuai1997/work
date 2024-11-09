<script setup lang="ts">
import { Application } from "vue3-pixi";
import textureUrl from "../assets/001.png";
import { Rectangle } from "pixi.js";

const hitArea = new Rectangle(0, 0, 256, 256);

function onClick() {
  console.log('sprite clicked!');
}
</script>

<template>
  <Application :width="640" :height="480">
    <container>
      <sprite :texture="textureUrl" :hit-area="hitArea" @click="onClick" />
    </container>
  </Application>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
