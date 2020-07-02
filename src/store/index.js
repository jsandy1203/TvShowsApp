import Vuex from 'vuex';
import Vue from 'vue';
import shows from './modules/shows'


Vue.use(Vuex);


export default new Vuex.Store({
    modules :  {
        shows
    }
})