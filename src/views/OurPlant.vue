<script>

import CartView from '../components/CartView.vue';
import SellingCard from '../components/SellingCard.vue'
import UserView from '../components/UserView.vue';

import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    SellingCard,
  },
  computed: {
    ...mapState(['showCart', 'showUser'])
  },
  methods: {
    alignCard(num) {
      const cards = document.getElementById('cards');
      if (num === 3) {
        cards.classList.remove('grid-cols-4');
        cards.classList.add('grid-cols-3');
      } else if (num === 4) {
        cards.classList.remove('grid-cols-3');
        cards.classList.add('grid-cols-4');
      }
    },
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

    <CartView v-if="showCart" />

    <UserView v-if="showUser" />
    
  </section>
  
  <section class="py-12">
    
    <div class="flex justify-between mx-24">
      
      <div class="flex flex-col h-[10vh]">
        <h2 class="text-mydarkgreen text-left font-abril-fatface font-semibold text-7xl">Nos Plantes</h2>
        <div class="w-14 h-2 bg-mygreen mt-4"></div>
      </div>
      
      <div class="flex items-center">
        <button class="bx bxs-grid-alt text-xl px-2 py-2 text-mygreen hover:rounded-full hover:bg-mygreen hover:text-mygray" @click="alignCard(3)"></button>
        <button class="bx bxs-grid text-2xl px-2 py-2 text-mygreen hover:rounded-full hover:bg-mygreen hover:text-mygray" @click="alignCard(4)"></button>
      </div>
      
    </div>
    
    <div id="cards" class="grid grid-cols-3 gap-12 place-content-center py-24 px-16">
      
      <SellingCard image="1.jpg" price="24.99"/>
      
      <SellingCard image="2.jpg" price="14.99"/>
      
      <SellingCard image="3.jpg" price="24.99"/>
      
      <SellingCard image="4.jpg" price="29.99"/>
      
      <SellingCard image="5.jpg" price="34.99"/>
      
      <SellingCard image="6.jpg" price="28.99"/>
      
      <SellingCard image="7.jpg" price="22.99"/>
      
      <SellingCard image="8.jpg" price="24.99"/>
      
      <SellingCard image="9.jpg" price="29.99"/>
      
      <SellingCard image="10.jpg" price="22.99"/>
      
      <SellingCard image="11.jpg" price="26.99"/>
      
      <SellingCard image="12.jpg" price="15.99"/>
      
      <SellingCard image="13.jpg" price="20.99"/>
      
      <SellingCard image="14.jpg" price="24.99"/>
      
      <SellingCard image="15.jpg" price="29.99"/>
      
    </div>
    
  </section>
  
  
</template>

<style scoped>

.bg-content {
  height: 60vh;
}

.button {
  transform: translateY(-50%);
}

</style>
