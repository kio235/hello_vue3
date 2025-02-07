<template>
    <h1><span class="red">Scenario 4</span>: Monitoring the <span class="red">VALUE IN OBJECTIVE</span> Type Defined by
        <span class="red">REACTIVE OR REF</span>.</h1>
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
    name: 'Watch_04'
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

function changeName(){
    person.name += 'Jr.';
}

function changeAge(){
    person.age ++;
}

function changeCar1(){
    person.car.c1='Lambo';
}

function changeCar2(){
    person.car.c2 = 'Ferrari';
}

function changeCar(){
    person.car={
        c1:'audi',
        c2:'BYD'
    }
}

// 监视，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
watch(()=>person.name,(newvalue,oldvalue)=>{
    console.log(newvalue,oldvalue);
})

// 监视，情况四：监视响应式对象中的某个属性，且该属性是对象类型的，推荐写函数式（函数式监视地址，直接写监视本身）
watch(()=>person.car,(newval,oldval)=>{
    console.log(newval,oldval);
},{
    deep:true,
})

</script>
