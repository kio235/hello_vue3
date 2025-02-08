<template>
    <div class="person">
        <h1>China</h1>
        <h2 ref="title2">Tian Jin</h2>
        <h3>Jin Nan</h3>
        <button @click="showH2">click me to show element &lt;h2&gt;</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import { ref, watch, watchEffect } from "vue";

// 创建一个 title2，用于存储 ref 标记的内容
let title2 = ref()
let a=ref(2834)

function showH2(){
    console.log(title2.value)
}

defineExpose({a})
</script>


<style scoped></style>