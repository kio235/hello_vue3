<template>
    <div class="person">
        <h2>current sum: {{ sum }}</h2>
        <button @click="add()">sum plus one</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref, watch, watchEffect } from "vue";

let sum=ref(0);

function add(){
    sum.value++;
}

// setup内都是创建
console.log('created')

// 挂载
onBeforeMount(
    ()=>{
        console.log('before mount')
    }
)

// 挂载完毕
onMounted(
    ()=>{
        console.log('mounted')
    }
)

// 更新前
onBeforeUpdate(
    ()=>{
        console.log('before update')
    }
)

onUpdated(
    ()=>{
        console.log('updated')
    }
)

onBeforeUnmount(
    ()=>{
        console.log('before unmount')
    }
)

onUnmounted(
    ()=>{
        console.log('unmounted')
    }
)

</script>


<style scoped></style>