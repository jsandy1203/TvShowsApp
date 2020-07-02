import Header from '@/components/Header.vue';
import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';

describe('In Header Component', () => {
	let headerWrapper;
	beforeEach(() => {
		headerWrapper = shallowMount(Header, {
            Vue,
            stubs: ['router-link']
		});
	});

	afterEach(() => {
		headerWrapper.destroy();
	});

	it('is a Vue instance', () => {
		expect(headerWrapper.isVueInstance).toBeTruthy();
	});

	it('it should have a div element with class="container"', () => {
		expect(headerWrapper.html()).toContain('<div class="container">')
    });
    
    it('it should have a button element with class="navbar-toggler"', () => {
        expect(headerWrapper.html()).toContain('button');
      });
    
      it('it should have a <router-link> element', () => {
        expect(headerWrapper.contains('router-link-stub')).toBe(true);
    });
});
