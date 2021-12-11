<template>
    <div>
        <div class="grid grid-cols-12 gap-7">
            <div class="col-span-7 flex flex-col space-y-4">
                <img src="https://picsum.photos/id/1005/800/500" alt srcset />
                <h4>Ashish Chavan, India</h4>
                <h2 class="text-4xl text-gray-600">Begin your blog journey with us</h2>
                <p
                    class="text-md text-gray-500"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas diam in arcu cursus. Aliquam id diam maecenas ultricies ...</p>
            </div>
            <div class="col-span-5 flex flex-col space-y-7">
                <div class="flex space-x-4">
                    <h2 class="text-2xl text-gray-600">Recommendation</h2>
                </div>
                <div v-for="post in 4" :key="post" class="flex space-x-4">
                    <img :src="'https://picsum.photos/id/'+post*99+'/800/500'" class="w-60 h-36" alt srcset />
                    <div>
                        <h2 class="text-2xl text-gray-600">Begin your blog journey</h2>
                        <p
                            class="text-md text-gray-500"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import useStore from "../../store/main";

export default defineComponent({
    setup() {
        const store = useStore;
        let post = computed(() => store.state.post.post);
        return {
            post,
        };
    },
});
</script>
