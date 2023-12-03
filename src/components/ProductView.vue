<template>
  <div class="fixedPosition flex justify-center bg-transparent-lightgray h-screen w-screen">
    
    <div class="bg-white w-[190vh] h-[90vh] my-12 rounded-xl">

      <div class="flex justify-between">
        <div class="">
          <h2 class="text-4xl text-mydarkgreen text-left ml-6 mt-8">Plante</h2>
          <div class="w-10 h-1 bg-mygreen ml-6 mt-2"></div>
        </div>
        <button class="self-center bx bx-x text-4xl text-mygreen mt-6 mr-8 rounded-full transition-all ease-in duration-100 hover:text-white hover:bg-mygreen hover:transition-all hover:ease-in hover-duration-100 hover:rotate-90" @click="toggleProduct"></button>
      </div>
      
    </div>
    
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['showProduct']),
  },
  methods: {
    ...mapMutations(['toggleProduct']),
  },
}
</script>

<style scoped>

.fixedPosition {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 110;
}
</style>
