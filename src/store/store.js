import { createStore } from 'vuex';

export default createStore({
  state: {
    showCart: false,
    showUser: false,
    showProduct: false,
  },
  mutations: {
    toggleCart(state) {
      state.showCart = !state.showCart;
      console.log(state.showCart);
    },
    toggleUser(state) {
      state.showUser = !state.showUser;
      console.log(state.showUser);
    },
    toggleProduct(state) {
      state.showProduct = !state.showProduct;
      console.log(state.showProduct);
    },
  },
});
