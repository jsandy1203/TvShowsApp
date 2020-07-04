import axios from 'axios';

const api = 'https://api.tvmaze.com';

const state = {
    shows:{},
    loading: false,
    show:{},
    images:[],
    cast:[],
    crew:[]
}

const getters = {
    allShows: (state) => state.shows,
    loading: (state) => state.loading,
    showDetails: (state) => state.show,
    showsByRating: (state) => {
        let show = Object.values(state.shows);
    return show.sort((a, b) => b.rating.average - a.rating.average);
    },
    showsByGenres:  (state,getters) => {
        let tvshow = getters.showsByRating;
        let tvgenres = [
            "Romance",
            "Action",
            "Comedy",
            "Science-Fiction",
            "Horror",
            "Drama"
          ];
        let group = [[], [], [], [], [], []];
        tvgenres.forEach((genre, i) => {
            tvshow.forEach(item => {
                if(item.genres.includes(genre)) {
                    group[i].push(item);
                }
            });
        });

        return group;
    },
    showImages: (state) => state.images,
    showCast: (state) => state.cast,
    showCrew: (state) => state.crew
}

const actions = {
    async fetchShows( {commit} ) {
        state.loading =true;

        const res = await axios.get(`${api}/shows`);
        const displaylist = res.data.splice(0,200)

        commit('FETCH_SHOWS', displaylist)
        state.loading = false;
    },

    async searchShows({commit}, text) {
        state.loading = true;

        const res = await axios.get(`${api}/search/shows?q=${text}`);
        let arr=[]
        for(let i=0; i<res.data.length; i++){
            arr.push(res.data[i].show);
        }
        
        commit('SEARCH_SHOWS', arr);
        state.loading = false;
    },


    async showInfo({commit},id) {
        state.loading = true;

        const res = await axios.get(`${api}/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=crew&embed[]=images`);

        commit('SHOW_INFO', res.data);
        state.loading = false;
    }
}

const mutations = {
    FETCH_SHOWS: (state, shows) => (state.shows = shows),
    SEARCH_SHOWS: (state,shows) => (state.shows = shows),
    SHOW_INFO: (state, show) =>{
        state.show = show;
        state.images = show._embedded.images;
        state.cast = show._embedded.cast;
        state.crew = show._embedded.crew;
}
    } 

export default {
	state,
	getters,
	actions,
	mutations,
};
