const state = () =>{
    return {
        user: {},
        isAuthenticated: false,
    }
};

const getters = {
    user: state=> state.user,
};

const actions = {
    setUser({commit},payload){
        try {
            commit("setUserData",payload);
        } catch (error) {
            return error;
        }
    },
    authenticateUser({state},payload){
        try {
            console.log(payload);
            if(state.isAuthenticated){
                return true;
            }else{
                return false;
            }
        } catch (error) {
            console.log(error);
        }
    }
};

const mutations = {
    setUserData({state},data){
        state.user = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations, 
}