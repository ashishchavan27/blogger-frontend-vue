<template>
    <div class="mx-auto" style="width:30rem">
        <form @submit.prevent="createNewPost" class="mx-auto border border-gray-300 p-5 w-full flex flex-col space-y-4 w-100 mt-8 rounded-xl shadow-xl">
            <div class="font-medium text-xl text-gray-600">
                <h3>Create post</h3>
            </div>
            <div class="flex flex-col space-y-2 w-full rounded-md">
                <label for="title">Title</label>
                <input
                    name="title"
                    id="post-title"
                    placeholder="Enter title"
                    class="form-control border border-gray-300 focus:outline-none focus:ring-0 w-full focus:border-gray-300 p-2 rounded-md"
                    v-model="post.title"
                    required
                />
            </div>
            <div class="flex flex-col space-y-2 w-full rounded-md">
                <label for="title">Description</label>
                <textarea
                    type="text"
                    rows="10"
                    name="description"
                    id="post-password"
                    placeholder="Enter decription"
                    class="form-control border border-gray-300 focus:outline-none focus:ring-0 w-full focus:border-gray-300 p-2 rounded-md"
                    v-model="post.description"
                    required
                />
            </div>
            <div>
                <button
                    type="submit"
                    class="btn bg-gray-500 text-white w-full p-2 rounded-md"
                >
                    Create
                </button> 
            </div>
        </form>
        <!-- <div v-for="selectedPost,index in allPosts" :key="index">
            <p>{{selectedPost.title}}</p>
            <p>{{selectedPost.description}}</p>
        </div> -->
    </div>
</template>

<script>
import { computed, defineComponent, reactive } from "vue";
import useStore from "../../store/main";

export default defineComponent({
    setup() {
        const store = useStore;
        let post = reactive({
            title: "",
            description: "",
        }) 
        let allPosts = computed(()=>store.state.post.allPosts);
        const createNewPost = () => {
            store.dispatch("post/addNewPost",post);
        }
        return {
            post,
            allPosts,
            createNewPost
        };
    },
});

</script>

