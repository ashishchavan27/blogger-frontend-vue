const state = () =>{
    return {
        post: {},
        postFeed: [],
        allPosts: [],
    }
};

const getters = {
    post: state=> state.post,
};

const actions = {
    async addNewPost({commit},payload){
        try {
            commit('createNewPost',payload);
        } catch (error) {
            console.log(error);
        }
    }
};

const mutations = {
    createNewPost(state,postData){
        state.post = postData;
        state.allPosts.push(postData);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations, 
}