<template>
    <div class="person">
        <h2>name: {{ name }}</h2>
        <h2>age: {{ age }}</h2>
        <h2>address: {{ address }}</h2>
        <button @click="showTel">check phone number</button>
        <button @click="changeName">change name</button>
        <button @click="changeAge">change age</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Person',
}
</script>

<script setup lang="ts">
import {ref} from 'vue'

let name = ref("ZS");    //此时不是响应式
let age = ref(18);
let tel = '13888888888'
let address = 'Tianjin'

console.log(1,name)
console.log(2,age)
console.log(3,tel)
console.log(5,address)

function changeName() {
    name.value = "LS";
}
function changeAge() {
    age.value += 1;
}
function showTel() {
    alert(tel);
}
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    color: white;
}
</style>