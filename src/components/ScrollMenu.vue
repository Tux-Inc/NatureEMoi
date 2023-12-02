<template>
  <header id="my-fixed-menu" :class="{ 'fixed-menu': scrolledDown }" class="fixed-menu w-full bg-transparent-gray rounded-xl flex justify-center">
    
    <div class="flex items-stretch h-full mx-12 px-12 py-2">
      <img alt="Nature&moi logo" class="object-fill" src="/assets/logo.png"/>
    </div>
    
    <div class="h-full w-1/2 mx-12">
      <nav class="h-full flex justify-between items-center px-6 mx-6">
        <RouterLink class="text-mygreen rounded-full px-10 font-montserrat text-lg transition-all ease-in duration-150 hover:py-4 hover:px-10 hover:text-white hover:bg-mygreen hover:transition-all hover:ease-in hover:duration-150 hover:focus:outline-none hover:rounded-full" to="/">Acceuil</RouterLink>
        <RouterLink class="text-mygreen rounded-full px-8 font-montserrat text-lg transition-all ease-in duration-150 hover:py-4 hover:px-8 hover:text-white hover:bg-mygreen hover:transition-all hover:ease-in hover:duration-150 hover:focus:outline-none hover:rounded-full" to="/our-plant">Nos plantes</RouterLink>
        <RouterLink class="text-mygreen rounded-full px-8 font-montserrat text-lg transition-all ease-in duration-150 hover:py-4 hover:px-8 hover:text-white hover:bg-mygreen hover:transition-all hover:ease-in hover:duration-150 hover:focus:outline-none hover:rounded-full" to="/about">A propos de nous</RouterLink>
      </nav>
    </div>
    
    <div class="h-full mx-12">
      <nav class="h-full flex justify-between items-center px-6 mx-6">
        <button class="text-mygreen rounded-full px-8 font-montserrat text-lg transition-all ease-in duration-150 hover:py-3 hover:px-8 hover:text-white hover:bg-mygreen hover:transition-all hover:ease-in hover:duration-150 hover:focus:outline-none hover:rounded-full" @click="toggleCart"><i class="bx bx-cart text-2xl"></i></button>
        <button class="text-mygreen rounded-full px-8 font-montserrat text-lg transition-all ease-in duration-150 hover:py-3 hover:px-8 hover:text-white hover:bg-mygreen hover:transition-all hover:ease-in hover:duration-150 hover:focus:outline-none hover:rounded-full" @click="toggleUser"><i class="bx bx-user-circle text-2xl"></i></button>
      </nav>
    </div>
    
  </header>
  
  <CartView v-if="showCart" />

  <UserView v-if="showUser" />
  
</template>

<script>

import CartView from './CartView.vue';
import UserView from './UserView.vue';

import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    CartView,
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  computed: {
    ...mapState(['showCart', 'showUser'])
  },
  methods: {
    handleScroll() {
      const fixedMenu = document.getElementById('my-fixed-menu');
      if (document.documentElement.scrollTop > 250) {
        fixedMenu.style.visibility = 'visible';
      }
      else {
        fixedMenu.style.visibility = 'hidden';
      }
    },
    ...mapMutations(['toggleCart', 'toggleUser']),
  },
  components: { CartView, UserView }
}
</script>

<style scoped>
/* Your scoped styles here */
.fixed-menu {
  visibility: hidden;
  position: fixed;
  top: 0;
  z-index: 100;;
  width: 100%;
  height: 7em;
  border-bottom: 1px solid #D6D3D3;
  /* Styles supplémentaires pour le menu fixe, par exemple, background-color, padding, etc. */
}


</style>
