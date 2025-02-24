<template>
    <div class="navigate">
        <li v-for="i in news" :key="i.id">
            <RouterLink to="/news/detail" active-class="active">{{ i.name }}</RouterLink>
        </li>
    </div>
    <div class="news-content">
        <RouterView></RouterView>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const news = [
    { name: 'new1', id: '001' },
    { name: 'new2', id: '002' },
    { name: 'new3', id: '003' },
]
</script>

<style scoped>
.s233 {
    color: red;
}
</style>