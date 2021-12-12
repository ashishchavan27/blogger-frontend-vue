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
            <i v-if="!searchBox" @click="expandSearchBox" class="my-auto fas fa-search mt-1"></i>
            <input class="my-auto py-1 px-2 text-gray-700 border border-gray-300 rounded-md focus:border-gray-300" type="text" v-model="userInput" name="search" v-if="searchBox" @keypress.enter="searchUserInput">
            <router-link class="my-auto hover:text-gray-900" to="/profile" >Profile</router-link>
            <h2 class="my-auto hover:text-gray-900" @click="logoutUser">Logout</h2>
            <router-link class="my-auto hover:text-gray-900" to="/login" >Login</router-link>
            <router-link class="my-auto hover:text-gray-900" to="/register">Register</router-link>
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
    },
    setup() {
        let searchBox = ref(false);
        let userInput = ref("");

        const expandSearchBox = () => {
            searchBox.value = true;
        }
        
        const searchUserInput = () => {
            // console.log(userInput.value);
            searchBox.value = false;
        }
        
        const logoutUser = () => {
            console.log("logout user");
        }
        return {
            userInput,
            searchBox,
            searchUserInput,
            expandSearchBox,
            logoutUser,
        };
    },
})

</script>