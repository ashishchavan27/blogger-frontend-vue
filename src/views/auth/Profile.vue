<template>
    <div class="grid grid-cols-12 gap-4">
        <div
            class=" mx-auto border border-gray-300 w-80 my-6 shadow-xl overflow-hidden rounded-full col-span-3"
        >
            <img src="https://picsum.photos/id/1005/600" alt="">
        </div>        
        <div
            class=" border border-gray-300 flex flex-col space-y-4 w-80 my-6 shadow-xl rounded-xl p-5 col-span-9"
        >
            <div class="mb-4 flex font-medium text-2xl text-gray-600">
                <span>Ashish Chavan</span>
            </div>
            <div class="flex w-full text-gray-500">
                <span>Travel | Code | Read </span>
            </div>
            <div class="flex w-full text-gray-500">
                <span>Blogs: 10</span>
            </div>
            <div class="flex w-full text-gray-500">
                <span>
                    Instagram:
                    <a href="/profile">@ashish_chavan27</a>
                </span>
            </div>
            <div class="flex w-full text-gray-500">
                <span>Followers: 10</span>
            </div>
            <div class="flex w-full text-gray-500">
                <span>Following: 15</span>
            </div>
        </div>
        <hr class="text-gray-700 col-span-12">
        <h2 class="text-gray-700 text-2xl font-bold col-span-12">Your Blogs</h2>
        <div
            v-for="post,index in userPosts"
            :key="index"
            class="border border-gray-300 w-full flex flex-col space-y-4 w-100 mt-8 shadow-xl rounded-xl p-5 col-span-3"
        >
            <img :src="'https://picsum.photos/id/'+index*100+'/800/500'" alt="">
            <h2 class="text-gray-600 px-2 text-sm">Likes: {{ index*2 }} Comments:{{index}}</h2>
            <h2 class="text-gray-600">{{ post.title }}</h2>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    components: {
    },
    setup() {
        let userPosts = [
            {
                title: "Post number 1",
            },
            {
                title: "Post number 2",
            }, 
            {
                title: "Post number 3",
            }, 
            {
                title: "Post number 4",
            }, 
            {
                title: "Post number 5",
            },
        ]
        return {
            userPosts,
        };
    },
});

</script>

