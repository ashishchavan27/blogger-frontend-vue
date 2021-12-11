<template>
    <div class="px-10 border bg-gray-100 border-gray-200 text-gray-700 flex">
        <div class="my-auto py-6 flex space-x-4 font-medium text-4xl">
            <router-link to="/home">BLOGGERS</router-link>
        </div>
        <div class="my-auto py-6 flex space-x-6 font-medium ml-8">
            <router-link class="hover:text-gray-900" to="/home">Home</router-link>
            <router-link class="hover:text-gray-900" to="/feed">Feed</router-link>
            <router-link class="hover:text-gray-900" to="/create-post">Create</router-link>
            <router-link class="hover:text-gray-900" to="/about-us">About us</router-link>
        </div>
        <div class="my-auto py-6 flex space-x-6 ml-auto font-medium">
            <router-link class="hover:text-gray-900" to="/profile" >Profile</router-link>
            <router-link class="hover:text-gray-900" to="/login" >Login</router-link>
            <router-link class="hover:text-gray-900" to="/register">Register</router-link>
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