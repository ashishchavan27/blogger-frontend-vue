<template>
    <div class="p-5 bg-blue-400 text-white font-medium flex space-x-2">
        <router-link to="/home">Home</router-link>
        <router-link to="/feed">Feed</router-link>
        <router-link to="/create-post">Create</router-link>
        <router-link to="/explore">Post</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    components: {
    },
    setup() {
        return {
        };
    },
})

</script>