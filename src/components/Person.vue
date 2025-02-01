<template>
    <div class="person">
        <h2>name: {{ name }}</h2>
        <h2>age: {{ age }}</h2>
        <button @click="showTel">check phone number</button>
        <button @click="changeName">change name</button>
        <button @click="changeAge">change age</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Person',
    setup() {
        let name = "ZS";    //此时不是响应式
        let age = 18;
        let tel = '13888888888'

        function changeName() {
            name = "LS";
        }
        function changeAge() {
            age += 1;
        }
        function showTel() {
            alert(tel);
        }

        return { name, age, changeName, changeAge, showTel}
    },
    data(){
        return{
            a:100
        }
    }
}
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    color: white;
}
</style>