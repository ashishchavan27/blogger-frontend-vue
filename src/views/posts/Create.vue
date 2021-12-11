<template>
    <div class="grid grid-cols-2 gap-4">
        <form
            @submit.prevent="createNewPost"
            class="col-span-1 border border-gray-300 w-full p-5 grid grid-cols-2 gap-4 rounded-xl shadow-xl"
        >
            <div class="col-span-2 font-medium text-xl text-gray-600">
                <h3>Create post</h3>
            </div>
            <div class="col-span-1 flex flex-col space-y-2 w-full rounded-md">
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
            <div class="col-span-1 flex flex-col space-y-2 w-full rounded-md">
                <label for="imageUrl">Image Url</label>
                <input
                    name="imageUrl"
                    id="post-imageUrl"
                    placeholder="Enter imageUrl"
                    class="form-control border border-gray-300 focus:outline-none focus:ring-0 w-full focus:border-gray-300 p-2 rounded-md"
                    v-model="post.imageUrl"
                    required
                />
            </div>
            <div class="col-span-1 flex flex-col space-y-2 w-full rounded-md">
                <label for="category">Category</label>
                <input
                    name="category"
                    id="post-category"
                    placeholder="Enter category"
                    class="form-control border border-gray-300 focus:outline-none focus:ring-0 w-full focus:border-gray-300 p-2 rounded-md"
                    v-model="post.category"
                    required
                />
            </div>
            <div class="col-span-1 flex flex-col space-y-2 w-full rounded-md">
                <label for="location">Location (Optional)</label>
                <input
                    name="location"
                    id="post-location"
                    placeholder="Enter location"
                    class="form-control border border-gray-300 focus:outline-none focus:ring-0 w-full focus:border-gray-300 p-2 rounded-md"
                    v-model="post.location"
                />
            </div>
            <div class="col-span-2 flex flex-col space-y-2 w-full rounded-md">
                <label for="description">Description</label>
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
            <div class="col-span-2">
                <button
                    type="submit"
                    class="btn bg-gray-500 text-white w-full p-2 rounded-md"
                >Post</button>
            </div>
        </form>
        <div class="col-span-1 border border-gray-300 w-full p-5 flex flex-col space-y-4 rounded-xl shadow-xl">
            <p class="font-medium text-xl text-gray-600">Preview</p>
            <img :src="post.imageUrl" alt="" srcset="" class="w-60 h-60">
            <p>{{ post.location }}</p>
            <p>#{{ post.category }}</p>
            <p>{{ post.title }}</p>
            <p>{{ post.description }}</p>
        </div>
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
            category: "",
            location: "",
            imageUrl: "",
        })
        let allPosts = computed(() => store.state.post.allPosts);
        const createNewPost = () => {
            store.dispatch("post/addNewPost", post);
        }
        return {
            post,
            allPosts,
            createNewPost
        };
    },
});

</script>

