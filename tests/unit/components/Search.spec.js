import Search from '@/components/Search.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Search in Components', () => {
    let searchWrapper;
    let actions;
    let store;
    beforeEach(() => {
        actions = {
            searchShows: jest.fn(),
            onSubmit: jest.fn()
          }
          store = new Vuex.Store({
            actions
          })
		searchWrapper = shallowMount(Search, {
            Vue,
            store,
            localVue,
            stubs: ['router-link']
		});
    });

    afterEach(() => {
		searchWrapper.destroy();
    });

    it('is a Vue instance', () => {
		expect(searchWrapper.isVueInstance).toBeTruthy();
    });

    it('Calls store action searchShows when submitted', () => {
        searchWrapper.find('button').trigger('submit')
        expect(actions.searchShows).toHaveBeenCalled()
    })
    
})
