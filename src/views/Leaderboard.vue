
<script setup>
import { useUsers } from "../store/users.js"
import { reactive } from "vue";

const user = {
    id: 0,
    name: ''
}
let users = [];

 user: {
    name: ''
}

// const user = useUsers()

const atPress = () => {
    users.push(user);
    user.id++
    console.log(users)
}

</script>

<template>

    <input type="text" placeholder="Naam" v-model="user.id">
    <div @click="atPress">hoi</div>
    {{user.name}}
</template>