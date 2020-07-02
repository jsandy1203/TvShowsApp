import Shows from '@/views/Shows.vue';
import CardItem from '@/components/CardItem.vue';
import Vue from 'vue';
import Vuex from 'vuex';
;import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Shows in Components', () => {
    let showsWrapper;
    let actions;
    let store;

    beforeEach(() => {
        actions = {
            fetchShows: jest.fn(),
          }
          store = new Vuex.Store({
            actions
          })
		showsWrapper = shallowMount(Shows, {
            Vue,
            store,
            localVue,
            stubs: ['router-link']
		});
    });

    afterEach(() => {
		showsWrapper.destroy();
    });

    it('is a Vue instance', () => {
		expect(showsWrapper.isVueInstance).toBeTruthy();
    });

    it("it should load cards component", () => {
        expect(CardItem).toBeTruthy();
      });
    
    it("fetchShows to be called while created method", () => {
        const spyinit = jest.spyOn(showsWrapper.vm, "fetchShows");
        setTimeout(() => {
          expect(spyinit).toHaveBeenCalled();
        });
      });
})
