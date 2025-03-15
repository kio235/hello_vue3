<template>
    <div class="app">
        <h1>Vue router test</h1>
        <div class="navigate">
            <RouterLink replace :to="{ name: 'home' }" active-class="active">home</RouterLink>
            <RouterLink to="/news" active-class="active">news</RouterLink>
            <RouterLink to="/about" active-class="active">about</RouterLink>
            <RouterLink :to="{ path: '/dogs' }" active-class="active">dogs</RouterLink>
        </div>
        <div class="main-content">
            <RouterView></RouterView>
            <br>
            <RouterView name="footer"></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="App">
import { RouterView } from 'vue-router';
</script>

<style>
* {
    font-family: 'Times New Roman', Times, serif;
}

.navigate {
    margin: 20px 0px;
    color: #333;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

/* 为导航中的链接设置左右边距，同时调整其他样式 */
.navigate a {
    margin: 0 10px;
    text-decoration: none;
    color: #333;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.navigate a:first-child {
    margin-left: 0px;
}


/* 可选：取消最后一个链接的右边距 */
.navigate a:last-child {
    margin-right: 0;
}

.navigate a.active {
    color: #00344a;

}

.app {
    background-color: #42b883;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    color: white;
}

.main-content {
    background-color: #2f865f;
    padding: 20px;
    border-radius: 10px;
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
