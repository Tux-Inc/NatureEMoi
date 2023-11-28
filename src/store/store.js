import { createStore } from 'vuex';

export default createStore({
  state: {
    showForm: false,
  },
  mutations: {
    toggleForm(state) {
      state.showForm = !state.showForm;
    },
  },
});
