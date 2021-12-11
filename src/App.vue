<template>
    <div class="w-full" style="font-family: 'Source Sans Pro', sans-serif;">
        <NavBar/>
        <router-view class="p-10"/>
        <Footer/>
    </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import useStore from "./store/main";
import NavBar from "./components/nav-bar.vue"
import Footer from "./components/footer.vue"

export default defineComponent({
    components: {
        NavBar,
        Footer,
    },
    setup() {
        const store = useStore;
        let post = computed(() => store.state.post.post);
        return {
            post,
        };
    }
})
</script>