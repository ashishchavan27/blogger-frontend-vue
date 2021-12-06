const state = () =>{
    return {
        post: "POST",
    }
};

const getters = {
    post: state=> state.post,
};

const actions = {

};

const mutations = {

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations, 
}