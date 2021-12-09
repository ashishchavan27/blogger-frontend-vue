<template>
    <NavBar style="font-family: 'Source Sans Pro', sans-serif;"/>
    <router-view class="p-10" style="font-family: 'Source Sans Pro', sans-serif;"/>
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