import { createStore } from 'vuex';
import state from './controllers/state';
import actions from './controllers/actions';
import mutations from './controllers/mutations';
import getters from './controllers/getters';
import createPersistedState from 'vuex-persistedstate';

export default new createStore({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
    modules: {},
    // conservsa cambios en memory
    plugins: [createPersistedState()],
});
