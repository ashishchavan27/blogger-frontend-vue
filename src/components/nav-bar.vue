<template>
    <div class="px-10 border bg-gray-100 border-gray-200 text-gray-700 flex">
        <div class="my-auto py-6 flex space-x-4 font-medium text-4xl">
            <router-link to="/home">BLOGGERS</router-link>
        </div>
        <div class="my-auto py-6 flex space-x-6 font-medium ml-8">
            <router-link to="/home">Home</router-link>
            <router-link to="/feed">Feed</router-link>
            <router-link to="/create-post">Create</router-link>
            <router-link to="/about-us">About us</router-link>
        </div>
        <div class="my-auto py-6 flex space-x-6 ml-auto font-medium">
            <router-link to="/login" class="ml-auto">Login</router-link>
            <router-link to="/register">Register</router-link>
        </div>
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