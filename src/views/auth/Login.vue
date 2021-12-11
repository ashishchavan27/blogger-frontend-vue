<template>
    <div class="grid grid-cols-2">
        <div
            class=" mx-auto border border-gray-300 w-80 my-6 shadow-xl overflow-hidden rounded-full col-span-1 ring-4 ring-white"
        >
            <img src="https://picsum.photos/id/1005/600" alt="">
        </div> 
        <form @submit.prevent="submitUserData" class=" col-span-1 border border-gray-300 p-5 w-80 flex flex-col space-y-4 w-100 mt-8 shadow-xl rounded-xl">
            <div class="font-medium text-xl text-gray-600">
                <h3>Login</h3>
            </div>
            <div class="flex border border-gray-300 w-full rounded-md">
                <span class="bg-gray-200 text-xl rounded-l-md text-gray-600 w-10 p-2 text-medium">@</span>
                <input
                    name="email"
                    id="user-email"
                    placeholder="Enter email"
                    class="form-control focus:outline-none focus:ring-0 w-full focus:border-transparent p-2 rounded-r-md"
                    v-model="user.email"
                    required
                />
            </div>
            <div class="flex border border-gray-300 w-full rounded-md">
                <span class="bg-gray-200 text-xl rounded-l-md text-gray-600 w-10 p-2 text-medium">@</span>
                <input
                    type="password"
                    name="password"
                    id="user-password"
                    placeholder="Enter password"
                    class="form-control focus:outline-none focus:ring-0 w-full focus:border-transparent p-2 rounded-r-md"
                    v-model="user.password"
                    required
                />
            </div>
            <div>
                <button
                    type="submit"
                    class="btn bg-gray-500 text-white w-full p-2 rounded-md"
                >
                    Save
                </button> 
            </div>
            <div>
                <h2
                    class="text-gray-500 w-full"
                >
                    Don't have a account? <span @click="router.push('/register')" class="cursor-pointer text-gray-800 font-bold">Register</span>
                </h2> 
            </div>
        </form>
    </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import useStore from "../../store/main";
import router from "../../router";

export default defineComponent({
    setup() {
        const store = useStore;
        let user = reactive({
            email: "",
            password: "",
        }) 
        const submitUserData = () => {
            store.dispatch("auth/authenticateUser");
        }
        return {
            user,
            router,
            submitUserData
        };
    },
});

</script>

