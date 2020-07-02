import { shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/app.vue';
import Vue from 'vue';
import Header from '@/components/Header.vue';
describe('In App Component', () => {
    let appWrapper;
    const router = new VueRouter({
        path: '/',
        name: 'Shows'
    });

    beforeEach(() => {
        Vue.use(VueRouter);
        appWrapper = shallowMount(App, {
            Vue,
            router,
            stubs: ['router-view']
        });
    });

    afterEach(() => {
        appWrapper.destroy();
    });

    it('is a Vue instance', () => {
        expect(appWrapper.isVueInstance).toBeTruthy();
    });

    it('it should load the Header', () => {
        expect(Header).toBeTruthy();
    });

    it('it should have a <router-link> element', () => {
        expect(appWrapper.contains('router-view-stub')).toBeTruthy();
    });

});