<template>
    <div>
        <img v-for="(dog, index) in dogList" :src="dog" alt="dog image" :key="index">
        <br>
        <button @click="getNewDog()">show me another one</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import useDog from "@/hooks/useDog";

const { dogList, getNewDog } = useDog();

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