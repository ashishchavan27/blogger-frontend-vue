<template>
    <div class="mx-auto" style="width:30rem">
        <form @submit.prevent="submitUserData" class="mx-auto border border-gray-300 p-5 w-full flex flex-col space-y-4 w-100 mt-8 shadow-xl rounded-xl">
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
        </form>
    </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import useStore from "../../store/main";

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
            submitUserData
        };
    },
});

</script>

