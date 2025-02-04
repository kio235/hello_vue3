<template>
    <div class="person">
        <h2>Car brand: {{ car.brand }}. Value: {{ myCarPrice }}k</h2>
        <button @click="changeCarPrice()">LOWER!!</button>
    </div>
    <br>
    <h2>Game list:</h2>
    <ul>
        <li v-for="games in games" v-bind:key="games.id">{{ games.name }}</li>
    </ul>
    <button @click="upgradeGame('fqfqfewe1')">Upgrade CS!</button>
    <h2>test value: {{ obj.a.b.c }}</h2>
    <button @click="changeTestValue()">change this value</button>
</template>


<!-- <script lang="ts">
export default {
    name: 'Person',
}
</script> -->


<script setup lang="ts">
import { reactive, ref, toRef, toRefs } from 'vue'

let car = reactive({ brand: "Benz", price: 100 })
let games = reactive([
    { id: 'fqfqfewe1', name: 'csgo' },
    { id: 'fqfqfewe2', name: 'lol' },
    { id: 'fqfqfewe3', name: 'dota' },
])

let obj = reactive({
    a:{
        b:{
            c:'666'
        }
    }
})

let myCarPrice = toRef(car,'price')

function changeCarPrice() {
    car.price += 10;
}

function upgradeGame(id:string) {
    let game = games.find(game => game.id == id);
    console.log(game)
    if (game) {
        game.name = 'cs2';
    }
}

function changeTestValue(){
    obj.a.b.c = '999';
}

</script>


<style scoped>
.person {
    background-color: skyblue;
    /* box-shadow: 0 0 10px; */
    border-radius: 10px;
    padding: 20px;
    color: white;
}

li {
    font-size: 20px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
</style>