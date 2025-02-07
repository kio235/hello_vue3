<template>
    <div class="app">
        <h1>
            hello vue!
        </h1>
        <Person />
    </div>

</template>

<script lang="ts">
import Person from './components/Person.vue';

export default {
    name: 'App',
    components: { Person },

}
</script>

<style>
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
</style>
