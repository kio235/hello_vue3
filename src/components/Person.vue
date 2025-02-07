<template>
    <div class="person">
        <h1>When the water temperature reaches 60 Celsius or the water level reaches 80 cm, send a request to the
            server.</h1>
        <h2>current water temperature: {{ waterTemper }}℃</h2>
        <h2>current water height: {{ waterLevel }}cm</h2>
        <button @click="addWaterTemper(10)">water temperature + 10</button>
        <button @click="addWaterLevel(10)">water level + 10</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import { ref, watch, watchEffect } from "vue";
const waterTemper = ref(10);
const waterLevel = ref(0);

function addWaterTemper(temper: number) {
    waterTemper.value += temper;
}

function addWaterLevel(height: number) {
    waterLevel.value += height;
}

const stopWatchWaterTemperAndLevel = watch(
    [waterTemper, waterLevel],
    (newval) => {
        const [newTemper, newLevel] = newval;
        if (newTemper >= 60 || newLevel >= 80) {
            console.log("REQUEST TO SERVER SENT!");
            // stopWatchWaterTemperAndLevel();
        }
        else {
            console.log("NOTHING HAPPENED");
            console.log(newTemper, newLevel)
        }
    }
)

// watchEffect(() => {
//     if (waterTemper.value >= 60 || waterLevel.value >= 80) {
//         console.log("REQUEST TO SERVER SENT!");
//     }
//     console.log(waterTemper.value,waterLevel.value)
// })
</script>


<style scoped></style>