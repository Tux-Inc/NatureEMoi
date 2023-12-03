<template>
  <!-- Your HTML template code goes here -->
  <div class="fixedPosition relative bg-transparent-lightgray h-screen w-screen">

    <div class="animated-form bg-white absolute inset-y-0 right-4 h-screen w-1/4">

        <div class="flex justify-between pb-4">
          <div class="">
            <h2 class="text-4xl text-mydarkgreen text-left ml-6 mt-8">Votre Panier</h2>
            <div class="w-10 h-1 bg-mygreen ml-6 mt-2"></div>
          </div>
          <button class="self-center bx bx-x text-4xl text-mygreen mt-6 mr-8 rounded-full transition-all ease-in duration-100 hover:text-white hover:bg-mygreen hover:transition-all hover:ease-in hover-duration-100 hover:rotate-90" @click="toggleCart"></button>
        </div>

        <div class="">
          <div class="flex justify-between my-8">
            <div class="flex">
              <img class="w-24 h-24 ml-4 rounded-lg" src="public/assets/plant/1.jpg" alt="plant1">
              <div class="flex flex-col justify-center">
                <h3 class="text-mydarkgreen text-left ml-6">Produit 1</h3>
                <p class="text-mydarkgreen text-left ml-6">Quantité : 1</p>
              </div>
            </div>
            <div class="flex flex-col justify-center">
              <p class="text-mydarkgreen text-right mr-6">Prix : 10€</p>
              <button class="text-mydarkgreen text-right mr-6">Supprimer</button>
            </div>
          </div>
          <div class="flex justify-between my-8">
            <div class="flex">
              <img class="w-24 h-24 ml-4 rounded-lg" src="public/assets/plant/7.jpg" alt="produit2">
              <div class="flex flex-col justify-center">
                <h3 class="text-mydarkgreen text-left ml-6">Produit 2</h3>
                <p class="text-mydarkgreen text-left ml-6">Quantité : 1</p>
              </div>
            </div>
            <div class="flex flex-col justify-center">
              <p class="text-mydarkgreen text-right mr-6">Prix : 10€</p>
              <button class="text-mydarkgreen text-right mr-6">Supprimer</button>
            </div>
          </div>
          <div class="flex justify-between my-8">
            <div class="flex">
              <img class="w-24 h-24 ml-4 rounded-lg" src="public/assets/plant/11.jpg" alt="produit3">
              <div class="flex flex-col justify-center">
                <h3 class="text-mydarkgreen text-left ml-6">Produit 3</h3>
                <p class="text-mydarkgreen text-left ml-6">Quantité : 1</p>
              </div>
            </div>
            <div class="flex flex-col justify-center">
              <p class="text-mydarkgreen text-right mr-6 ">Prix : 10€</p>
              <button class="text-mydarkgreen text-right mr-6">Supprimer</button>
            </div>
          </div>
        </div>

        <div class="absolute inset-x-0 bottom-28">
          <div class="flex justify-between border-t border-mygreen">
            <div class="flex flex-col justify-center">
              <p class="text-mydarkgreen text-lg text-left ml-6">Sous-total</p>
            </div>
            <div class="flex flex-col justify-center">
              <p class="text-mydarkgreen text-lg text-right mr-6">30€</p>
            </div>
          </div>
          <div class="flex justify-between border-mygreen">
            <div class="flex flex-col justify-center">
              <p class="text-mydarkgreen text-lg text-left ml-6">Livraison</p>
            </div>
            <div class="flex flex-col justify-center">
              <p class="text-mydarkgreen text-lg text-right mr-6">5€</p>
            </div>
          </div>
          <div class="flex justify-between border-mygreen">
            <div class="flex flex-col justify-center">
              <p class="text-mydarkgreen text-lg text-left ml-6">Total</p>
            </div>
            <div class="flex flex-col justify-center">
              <p class="text-mydarkgreen text-lg text-right mr-6">35€</p>
            </div>
          </div>
        </div>

        <div class="absolute inset-x-0 bottom-0 pb-2">
          <div class="flex justify-center">
            <button class="bg-mygreen text-white text-xl rounded-full border-2 border-mygreen px-8 py-2 mt-8 mb-4 transition-all ease-in duration-100 hover:bg-white hover:text-mygreen hover:transition-all hover:ease-in hover:duration-100">Valider mon panier</button>
          </div>
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
    ...mapState(['showCart']),
  },
  methods: {
    // Your methods
    ...mapMutations(['toggleCart']),
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
