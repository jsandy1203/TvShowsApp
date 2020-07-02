import Shows from '@/views/Shows.vue';
import ShowDetails from '@/views/ShowDetails';
import GenreList from '@/views/GenreList'


export const routes=[
    {path: '/', component: Shows, name:'Shows'},
    {path: '/genrelist', component: GenreList, name:'genrelist'},
    {path: '/shows/:id', component: ShowDetails, name:'showdetails', props:true},

];