import store from '@/store/modules/shows';
import axios from 'axios';

const loading = false;
const showDetails = {
    name: 'break',
    premiered: 'acv',
    image: {medium:'xyz'}
}
let url = ''
let body = {}

jest.mock('axios', () => ({
    get: () => {},
}));


describe('In store', () => {
    describe('In getters', () => {
        let state= {}
        beforeEach( ()=> {
            state = {
                shows: {
                    rating:{average: 5},
                }
                
            }
        })

        it('values returned', ()=>{
            const shows = store.getters.allShows(state)
             expect(shows).toEqual(state.shows)
      
          })

        it('loading returns false', () => {
            const actual = store.getters.loading(loading);
            expect(actual).toEqual(state.loading)
        });

        it('contains showDetails', () => {
            const details = store.getters.showDetails(showDetails);
            expect(details).toEqual(state.show);
        });

        it('should have getter objects', () => {
            expect(store.getters.showsByRating).toBeTruthy();
        })

        it('it contains shows by rating', () => {
           const rate = store.getters.showsByRating(state)
           console.log(rate);
           let rating = [{average:5}]
           expect(rate).toEqual(rating); 
        });


    })



    describe('In Mutations', () => {
        it("FETCH_SHOWS sets state.shows to shows", () => {
            const shows = [{ showName: "Breaking Bad" }, { showName: "Breaking" }];
            const state = {
              shows: {}
            };
            store.mutations.FETCH_SHOWS(state, shows);
            expect(state.shows).toBe(shows);
          });

        it('SEARCH_SHOWS', () => {
            const shows = [{ showName: "Breaking"}, {showName:"Bad"}];
            const state = {
                shows:{}
            };
            store.mutations.SEARCH_SHOWS(state, shows);
            expect(state.shows).toBe(shows);
        });

        it('SHOW_INFO', () => {
            const show = {_embedded:{cast:['x'],crew:['y'],images:['z']},name: "Breaking"};
            const state = {
                show:{}
            };
            store.mutations.SHOW_INFO(state, show);
            expect(state.show).toBe(show);
            expect(state.show._embedded).toBe(show._embedded);
        });
        
    });

})
