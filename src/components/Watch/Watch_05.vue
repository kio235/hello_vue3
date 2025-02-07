<template>
    <h1><span class="red">Scenario 5</span>: Monitoring <span class="red">ALL ABOVE</span></h1>
    <h2>name: {{ person.name }}</h2>
    <h2>age: {{ person.age }}</h2>
    <h2>cars: {{ person.car.c1 }}, {{ person.car.c2 }}</h2>
    <button @click="changeName()">change name</button>
    <button @click="changeAge()">change age</button>
    <button @click="changeCar1()">change car 1</button>
    <button @click="changeCar2()">change car 2</button>
    <button @click="changeCar()">change car</button>
</template>

<script lang="ts">
export default {
    name: 'Watch_05'
}
</script>

<script setup lang="ts">
import { reactive, watch } from 'vue';

let person = reactive({
    name: 'Zhang San',
    age: 21,
    car: {
        c1: 'Benz',
        c2: 'BMW'
    }
})

function changeName() {
    person.name += ' Jr.';
}

function changeAge() {
    person.age ++;
}

function changeCar1() {
    person.car.c1 = 'Lambo';
}

function changeCar2() {
    person.car.c2 = 'Ferrari';
}

function changeCar() {
    person.car = {
        c1: 'audi',
        c2: 'BYD'
    }
}

// 监视，情况五：监视响上述的多个数据
watch([() => person.name, () => person.car.c1], (newval, oldval) => {
    console.log(newval, oldval)
})

</script>
