<script lang="ts" setup>
import { Loader, Application } from 'vue3-pixi';

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

</script>

<template>
    <Application :width="windowWidth" :height="windowHeight">
        <Loader
            :resources="[ '/models/spritesheet.json' ]"
        >
            <animated-sprite
                :textures="[
                    'adventurer-idle-00.png',
                    'adventurer-idle-01.png',
                    'adventurer-idle-02.png',
                ]"
                playing
                :animation-speed="0.1"
                :anchor="0.5"
                :x="120"
                :y="120"
                :scale="1.4"
            />
        </Loader>
    </Application>
</template>