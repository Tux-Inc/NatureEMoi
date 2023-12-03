<script>

import CartViewVue from '../components/CartView.vue';
import UserViewVue from '../components/UserView.vue';

import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    CartViewVue,
    UserViewVue
  },
  computed: {
    ...mapState(['showCart', 'showUser'])
  },
  methods: {
    ...mapMutations(['toggleCart', 'toggleUser']),
  }
}

</script>

<template>
    <section class="bg-content bg-backgroundHeader bg-cover bg-center px-6 py-6 flex flex-col relative">
    
    <header class="my-menu flex justify-center">
      
      <div class="flex items-stretch h-full mx-12 px-12 py-2">
        <img alt="Nature&moi logo" class="object-bottom" src="/assets/lightlogo.png"/>
      </div>
      
      <div class="h-full w-1/2 mx-12">
        <nav class="h-full flex justify-between items-center px-6 mx-6">
          <RouterLink class="text-white rounded-full px-10 font-montserrat text-lg transition-all ease-in duration-150 hover:py-9 hover:px-10 hover:text-mygreen hover:bg-white hover:transition-all hover:ease-in hover:duration-150 hover:focus:outline-none hover:rounded-full" to="/">Acceuil</RouterLink>
          <RouterLink class="text-white rounded-full px-8 font-montserrat text-lg transition-all ease-in duration-150 hover:py-9 hover:px-8 hover:text-mygreen hover:bg-white hover:transition-all hover:ease-in hover:duration-150 hover:focus:outline-none hover:rounded-full" to="/our-plant">Nos plantes</RouterLink>
          <RouterLink class="text-white rounded-full px-8 font-montserrat text-lg transition-all ease-in duration-150 hover:py-9 hover:px-8 hover:text-mygreen hover:bg-white hover:transition-all hover:ease-in hover:duration-150 hover:focus:outline-none hover:rounded-full" to="/about">A propos de nous</RouterLink>
        </nav>
      </div>
      
      <div class="h-full mx-12">
        <nav class="h-full flex justify-between items-center px-6 mx-6">
          <button class="text-white rounded-full px-8 font-montserrat text-lg transition-all ease-in duration-150 hover:py-9 hover:px-8 hover:text-mygreen hover:bg-white hover:transition-all hover:ease-in hover:duration-150 hover:focus:outline-none hover:rounded-full" @click="toggleCart"><i class="bx bx-cart text-2xl"></i></button>
          <button class="text-white rounded-full px-8 font-montserrat text-lg transition-all ease-in duration-150 hover:py-9 hover:px-8 hover:text-mygreen hover:bg-white hover:transition-all hover:ease-in hover:duration-150 hover:focus:outline-none hover:rounded-full" @click="toggleUser"><i class="bx bx-user-circle text-2xl"></i></button>
        </nav>
      </div>

    </header>

  </section>
</template>

<style scoped>

.bg-content {
  height: 60vh;
}

</style>