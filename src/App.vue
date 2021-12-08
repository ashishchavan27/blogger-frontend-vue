<template>
    <NavBar />
    <router-view />
</template>

<script>
import { computed, defineComponent } from "vue";
import useStore from "./store/main";
import NavBar from "./components/nav-bar.vue"

export default defineComponent({
    components: {
        NavBar,
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