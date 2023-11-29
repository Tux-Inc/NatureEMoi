<template>
  <!-- Your HTML template code goes here -->
  <div class="fixedPosition relative bg-transparent-lightgray h-screen w-screen ">
    <div class="animated-form bg-white absolute inset-y-0 right-0 h-screen w-1/4">
      <div class="flex justify-between">
        <div class="">
          <h2 class="text-4xl text-mydarkgreen text-left ml-6 mt-8">Votre panier</h2>
          <div class="w-10 h-1 bg-mygreen ml-6 mt-2"></div>
        </div>
        <button class="self-center bx bx-x text-4xl text-mygreen mt-6 mr-8 rounded-full transition-all ease-in duration-100 hover:text-white hover:bg-mygreen hover:transition-all hover:ease-in hover-duration-100" @click="toggleForm"></button>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
  // Your JavaScript code goes here
  data() {
    return {
      // Your data properties
    };
  },
  computed: {
    // Your computed properties
    ...mapState(['showForm']),
  },
  methods: {
    // Your methods
    ...mapMutations(['toggleForm']),
  },
  mounted() {
    // Code to run when the component is mounted
  },
};
</script>

<style scoped>
/* Your CSS styles specific to this component go here */

.fixedPosition {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

</style>
