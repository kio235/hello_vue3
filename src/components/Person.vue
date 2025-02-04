<template>
    <div class="person">
        <h1><span class="red">Scenario 1</span>: Monitoring the <span class="red">basic data</span> type defined by ref.</h1>
        <h2>sum: {{ sum }}</h2>
        <button @click="sumPlusOne()">Click me to plus one!</button>
    </div>
</template>


<!-- <script lang="ts">
export default {
    name: 'Person',
}
</script> -->


<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'

const sum = ref(0);

function sumPlusOne() {
    sum.value += 1;
}

const stopWatch=watch(sum,(newval,oldval)=>{
    console.log('sum has changed',newval,oldval);
    if(newval>=10){
        stopWatch();
    }
})
</script>


<style scoped>
.person {
    background-color: #1b9860;
    /* box-shadow: 0 0 10px; */
    border-radius: 10px;
    padding: 20px;
    color: white;
}

.red {
    /* font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; */
    color: #ffbcbc;
}
</style>