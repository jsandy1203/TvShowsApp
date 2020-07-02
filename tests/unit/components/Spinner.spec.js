import Spinner from '@/components/Spinner.vue';
import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';

describe('In Spinner Component', () => {
    let headerWrapper;
    beforeEach(() => {
		headerWrapper = shallowMount(Spinner, {
            Vue
		});
    });
    
    afterEach(() => {
		headerWrapper.destroy();
    });
    
    it('is a Vue instance', () => {
		expect(headerWrapper.isVueInstance).toBeTruthy();
    });
    
    it('it should have a div element with class="spinner"', () => {
		expect(headerWrapper.html()).toContain('<div class="spinner">')
    });

    it('it should have an img tag', () => {
		expect(headerWrapper.html()).toContain('img')
    });
    
})
