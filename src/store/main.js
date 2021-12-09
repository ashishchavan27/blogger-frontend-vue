import { createStore } from "vuex";
// import cookies from "js-cookie";
import post from "./post";
import auth from "./auth";

const store = createStore({
    modules: {
        post,
        auth
    }
})

export function useStore() {
    return store;
}

export default store;