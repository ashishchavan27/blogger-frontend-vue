<template>
    <div class="w-full mt-10 h-60 p-10 bg-gray-300 text-gray-700 grid grid-cols-2 gap-4">
        <div class="col-span-1">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div class="col-span-1 flex gap-4">
            <router-link class="hover:text-gray-900" to="/home">Home</router-link>
            <router-link class="hover:text-gray-900" to="/feed">Feed</router-link>
            <router-link class="hover:text-gray-900" to="/create-post">Create</router-link>
            <router-link class="hover:text-gray-900" to="/about-us">About us</router-link>
        </div>
    </div>
</template>