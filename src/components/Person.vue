<template>
    <div class="person">
        <h2>num: {{ num }}</h2>
        <button @click="num++">plus one</button>
    </div>
    <div class="person">
        <img v-for="(dog, index) in dogList" :src="dog" alt="dog image" :key="index">
        <br>
        <button @click="getNewDog()">show me another one</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import useDog from "@/hooks/useDog";
import useNum from "@/hooks/useNum";

const { dogList, getNewDog } = useDog();
const { num } = useNum();

</script>


<style scoped>
img {
    height: 200px;
    /* border: 20px solid black; */
    border-radius: 5px;
    /* padding: 10px; */
    margin: 5px 20px;
}
</style>