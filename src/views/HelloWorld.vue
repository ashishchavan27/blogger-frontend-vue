<template>
  <!-- <HelloWorldComponent/> -->
  <div>
    <div class="row mx-0 font-medium bg-blue">
      <div
        class="col-sm-12 col-md-6 col-lg-6 pt-4 mx-1"
      >
        <div>
          <div class="col-12">
            <strong>Bloggers</strong>
            <h2>{{ post }}</h2>
            <hr />
          </div>
          <div class="coffee">Grab a coffee and keep blogging!!</div>
          <div class="coffee text-blogger">
            Are to ready to start your first blog?<br />
            <button
              class="btn btn-primary bg-blogger" 
            >
              <a href="/posts/add" class="text-white"
                >Get Started</a
              >
            </button>
          </div>
          <div class="coffee" style="color: #007bffc7">
            Start your blog journey with us!! <br />
            <button
              class="btn btn-primary bg-bloggers"
            >
              <a href="/login" class="text-black"
                >Login</a
              >
            </button>
          </div>
        </div>
      </div>
      <div class="w-full"></div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import useStore from "../store/main";

export default defineComponent({
  components: {
  },
  setup() {
    const store = useStore;
    let post = computed(() => store.state.post.post);
    return {
      post,
    };
  },
});
</script>
