<template>
    <div class="app">
        <h1>
            hello vue!
        </h1>
        <Person v-if="isShowPerson"/>
        <button @click="toggleIsShowPerson()">change person visibility</button>
    </div>

</template>

<script lang="ts" setup name="App">
import { ref } from 'vue';
import Person from './components/Person.vue';

let isShowPerson=ref(true);

function toggleIsShowPerson()
{
    isShowPerson.value=!isShowPerson.value;
}

</script>

<style>
*{
    font-family: 'Times New Roman', Times, serif;
}
.app {
    background-color: #42b883;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    color: white;
}

button {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-color: white;
    color: #1b9860;
    padding: 10px 15px;
    margin: 10px;
    border: 2px solid gray;
    border-radius: 4px;
    cursor: pointer;
}

.red {
    /* font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; */
    color: #ffbcbc;
}

.person {
    background-color: #1b9860;
    border-radius: 10px;
    padding: 20px;
    color: white;
    margin: 20px 0px;
}
</style>
