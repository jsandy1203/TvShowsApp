import store from '@/store/index';

describe('in store', () => {
    
    it('it should have all state objects ', () => {
        expect(store.state.shows).toBeTruthy();
      });
})
