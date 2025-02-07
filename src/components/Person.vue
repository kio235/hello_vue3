<template>
    <div class="person">
        <h1><span class="red">Scenario 1</span>: Monitoring the <span class="red">BASIC DATA</span> Type Defined by
            <span class="red">REF</span>.
        </h1>
        <h2>sum: {{ sum }}</h2>
        <button @click="sumPlusOne()">Click me to plus one!</button>
    </div>

    <div class="person">
        <h1><span class="red">Scenario 2</span>: Monitoring the <span class="red">OBJECT</span> Type Defined by <span
                class="red">REF</span>.
        </h1>
        <h2>name: {{ person.name }}</h2>
        <h2>age: {{ person.age }}</h2>
        <button @click="changePersonName()">change name</button>
        <button @click="increasePersonAge()">increase age</button>
        <button @click="changePersonWhole()">change person whole value</button>
        <button @click="changePerson()">change person</button>
    </div>

    <div class="person">
        <h1><span class="red">Scenario 3</span>: Monitoring the <span class="red">OBJECTIVE</span> Type Defined by <span
                class="red">REACTIVE</span>.</h1>
        <h2>name: {{ recPerson.name }}</h2>
        <h2>age: {{ recPerson.age }}</h2>
        <h2>hobby:{{ recPerson.hobbys }}</h2>
        <button @click="changeRecPersonName()">change name</button>
        <button @click="increaseRecPersonAge()">increase age</button>
        <button @click="changeRecPerson()">change person</button>
        <button @click="changeMostHobby()">change hobby</button>
    </div>

    <div class="person">
        <Watch_04 />
    </div>
    <div class="person">
        <Watch_05 />
    </div>
</template>


<script lang="ts">
import Watch_04 from './Watch/Watch_04.vue';
import Watch_05 from './Watch/Watch_05.vue';
export default {
    name: 'Person',
    components: { Watch_04, Watch_05 }
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

function changePersonWhole() {
    person.value = { name: 'W ZZ', age: 23 }
}

function changePerson() {
    ({ name: person.value.name, age: person.value.age } = { name: 'LWW', age: 16 })
}


watch(
    person,
    (newval, oldval) => {
        console.log(newval.age, oldval?.age)
    },
    { deep: true, immediate: false }
)

//-------------------------------------------------------------------

let recPerson = reactive({
    name: 'Zhang San',
    age: 18,
    hobbys: {
        most: 'tennis',
        second: 'ping pong'
    }
})

function changeRecPersonName() {
    recPerson.name = 'Tim Cook';
}

function increaseRecPersonAge() {
    recPerson.age++;
}

function changeRecPerson() {
    Object.assign(recPerson, { name: 'LWW', age: 16 })
    // console.log(recPerson)
}

function changeMostHobby() {
    recPerson.hobbys.most = 'sking'
}

watch(recPerson,
    (newval, oldval) => {
        console.log(newval, oldval)
    },
    { deep: false }
)
</script>


<style scoped>
.person {
    background-color: #1b9860;
    border-radius: 10px;
    padding: 20px;
    color: white;
    margin: 20px 0px;
}
</style>