import { createStore } from "vuex";
// import cookies from "js-cookie";
import post from "./post";

const store = createStore({
    modules: {
        post,
    }
})

export function useStore() {
    return store;
}

export default store;