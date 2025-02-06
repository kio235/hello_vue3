<template>
    <div class="person">
        <h1><span class="red">Scenario 1</span>: Monitoring the <span class="red">BASIC DATA</span> Type Defined by Ref.
        </h1>
        <h2>sum: {{ sum }}</h2>
        <button @click="sumPlusOne()">Click me to plus one!</button>
    </div>
    <br>
    <div class="person">
        <h1><span class="red">Scenario 2</span>: Monitoring the <span class="red">OBJECT</span> Type Defined by Ref.
        </h1>
        <h2>name: {{ person.name }}</h2>
        <h2>age: {{ person.age }}</h2>
        <button @click="changePersonName()">change name</button>
        <button @click="increasePersonAge()">increase age</button>
        <button @click="changePerson()">change person</button>
        <button @click="changePerson2()">change person2</button>
    </div>
</template>


<script lang="ts">
export default {
    name: 'Person',
}
</script>


<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'

const sum = ref(0);

function sumPlusOne() {
    sum.value += 1;
}

const stopWatch = watch(sum, (newval, oldval) => {
    console.log('sum has changed', newval, oldval);
    if (newval >= 10) {
        stopWatch();
    }
})

/*--------------------------------------------------*/

let person = ref({
    name: 'Zhang San',
    age: 18
})

function changePersonName() {
    person.value.name = 'Tim Cook';
}

function increasePersonAge() {
    person.value.age++;
}

function changePerson() {
    person.value = { name: 'W ZZ', age: 23 }
}

function changePerson2() {
    ({ name: person.value.name, age: person.value.age } = { name: 'LWW', age: 16 })
}


watch(
    person,
    (newval, oldval) => {
        console.log(newval.age, oldval?.age)
    },
    { deep: true, immediate:true }
)

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