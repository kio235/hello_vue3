<template>
    <div class="person">
        First name: <input type="text" v-model="firstName"><br>
        Last name: <input type="text" v-model="lastName"><br>
        Full name: <span>{{ fullName }}</span>
        <button @click="changeFullName()">change name</button>
    </div>
</template>


<!-- <script lang="ts">
export default {
    name: 'Person',
}
</script> -->


<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
let firstName = ref('zhang');
let lastName = ref('san');

const fullName = computed({
    get:function(){
        return nameToUpper(firstName.value)+nameToUpper(lastName.value)
    },
    set(val){
        const names = val.split('-')
        firstName.value = names[0];
        lastName.value = names[1];
    }
})

function nameToUpper(name: string):string {
    return name.slice(0, 1).toUpperCase() + name.slice(1);
}

function changeFullName()
{
    fullName.value='Tim-Cook'
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