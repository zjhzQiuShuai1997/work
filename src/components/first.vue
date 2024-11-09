<script lang="ts" setup >
import { reactive, ref } from 'vue';
import { Application, onTick } from 'vue3-pixi';

// const position = reactive({ x: 0, y: 0 });
const count = ref(0);
const xytPosition = reactive({ x: 550, y: 350 });
const step = ref(20); // 每一步的步数

// onTick(delta => {
//     count.value += delta * 0.05;
//     position.x = 120 + Math.cos(count.value) * 50;
//     position.y = 120 + Math.sin(count.value) * 50;
// });

const onClickDirection = (direction:string) => {
    switch(direction) {
        case 'top':
            xytPosition.y -= step.value;
            break;
        case 'bottom':
            xytPosition.y += step.value;
            break;
        case 'left':
            xytPosition.x -= step.value;
            break;
        case 'right':
            xytPosition.x += step.value;
            break;
    }
    count.value += 1;
}

</script>
<template>
    <Application id="app" :width="600" :height="400" backgroundColor="#000000" >
        <!-- <text :anchor="0.5" :x="120" :y="120" :style="{ fill: 'white' }">
            Hello World
        </text> -->
        <!-- <sprite
            texture="../assets/bunny.png"
            :anchor="0.5"
            :scale="1.4"
            :position="position"
        /> -->
        <sprite
            texture="../assets/slave.png"
            :anchor="0.5"
            :position="xytPosition"
        />
    </Application>
    <p>点击方向键控制黎小若</p>
    <div style="width: 150px; margin: 10px auto;" >
        <div class="top" >
            <button class="btn" @click="onClickDirection('top')" >⬆️</button>
        </div>
        <div class="left_right"> 
            <button class="btn"  @click="onClickDirection('left')" >⬅️</button>
            <button class="btn"  @click="onClickDirection('right')" >➡️</button>
        </div>
        <div class="bottom" >
            <button class="btn"  @click="onClickDirection('bottom')" >⬇️</button>
        </div>
    </div>
    <p>黎小若走了{{ count }}步</p>
</template>
<style scoped >
.top {
    width: 100%;
    display: flex;
    justify-content: center;
}
.left_right {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.bottom {
    width: 100%;
    display: flex;
    justify-content: center;
}
.btn {
    border: none;
    background-color: aliceblue;
    width: 50px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
}

</style>