
<script setup>
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../database/firebase.js";

console.log(firebaseConfig);

// const app = initializeApp(firebaseConfig);

// const database = firebase.database();

// database.ref('Users').on('value', snapshot => console.log(snapshot.val()))

</script>

<template>

    <input type="text" placeholder="Naam">

</template>