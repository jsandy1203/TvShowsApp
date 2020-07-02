import CardItem from '@/components/CardItem.vue';
import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';

describe('CardItem in Components', () => {
    let carditemWrapper;
    let id = 1
	beforeEach(() => {
		carditemWrapper = shallowMount(CardItem, {
            Vue,
            stubs: ['router-link'],
            propsData: {
                id: id
            }
		});
    });
    
    afterEach(() => {
		carditemWrapper.destroy();
    });
    
    it('is a Vue instance', () => {
		expect(carditemWrapper.isVueInstance).toBeTruthy();
    });
    
    it('it should have a <router-link> element', () => {
        expect(carditemWrapper.contains('router-link-stub')).toBe(true);
    });

    it('it has a param property', () => {
        carditemWrapper.setData({ id: id });
        expect(carditemWrapper.props().id).toBe(1);
    });

    
})
