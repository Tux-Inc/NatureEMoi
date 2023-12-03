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
    ...mapState(['showUser']),
  },
  methods: {
    // Your methods
    ...mapMutations(['toggleUser']),
  },
  mounted() {
    // Code to run when the component is mounted
  },
};
</script>

<template>
  
  <div class="fixedPosition relative bg-transparent-lightgray h-screen w-screen">
    
    <div class="animated-form bg-white absolute inset-y-0 right-4 h-screen w-1/4">
      
      <div class="flex justify-between pb-4">
        <div class="">
          <h2 class="text-4xl text-mydarkgreen text-left ml-6 mt-8">Connexion</h2>
          <div class="w-10 h-1 bg-mygreen ml-6 mt-2"></div>
        </div>
        <button class="self-center bx bx-x text-4xl text-mygreen mt-6 mr-8 rounded-full transition-all ease-in duration-100 hover:text-white hover:bg-mygreen hover:transition-all hover:ease-in hover-duration-100 hover:rotate-90" @click="toggleUser"></button>
      </div>
      
      <div class="flex flex-col pb-2 pt-8 mx-8">
        <p class="text-2xl text-mygreen">Se Connecter</p>
        <hr class="my-2 mx-2">
        
        <div>
          <form class="flex flex-col">
            <label class="text-mydarkgreen text-left mt-4">Email</label>
            <input class="border border-mydarkgreen rounded-lg px-2 py-1" type="email" placeholder="Email">
            <label class="text-mydarkgreen text-left mt-4">Mot de passe</label>
            <input class="border border-mydarkgreen rounded-lg px-2 py-1" type="password" placeholder="Mot de passe">
            <button class="bg-mygreen text-white border-2 border-mygreen rounded-lg px-2 py-2 mt-10 transition-all ease-in duration-150 hover:bg-white hover:text-mygreen hover:transition-all hover:ease-in hover:duration-150">Se connecter</button>
          </form>
        </div>
      </div>

      <hr class="mt-6 mx-4 text-mydarkgreen">

      <div class="flex flex-col pb-2 pt-8 mx-8">
        <p class="text-2xl text-mygreen">S'inscrire</p>
        <hr class="my-2 mx-2">
        
        <div>
          <form class="flex flex-col">
            <div class="flex justify-between">
              <div class="flex flex-col w-5/12">
                <label class="text-mydarkgreen text-left mt-4">Nom</label>
                <input class="border border-mydarkgreen rounded-lg px-2 py-1" type="email" placeholder="Nom">
              </div>
              <div class="flex flex-col w-5/12">
                <label class="text-mydarkgreen text-left mt-4">Prénom</label>
                <input class="border border-mydarkgreen rounded-lg px-2 py-1" type="email" placeholder="Prénom">
              </div>
            </div>
            <label class="text-mydarkgreen text-left mt-4">Email</label>
            <input class="border border-mydarkgreen rounded-lg px-2 py-1" type="email" placeholder="Email">
            <label class="text-mydarkgreen text-left mt-4">Mot de passe</label>
            <input class="border border-mydarkgreen rounded-lg px-2 py-1" type="password" placeholder="Mot de passe">
            <button class="bg-mygreen text-white border-2 border-mygreen rounded-lg px-2 py-2 mt-10 transition-all ease-in duration-150 hover:bg-white hover:text-mygreen hover:transition-all hover:ease-in hover:duration-150">S'inscrire</button>
          </form>
        </div>
      </div>
    </div>
    
  </div>
  
</template>

<style scoped>

.fixedPosition {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

</style>