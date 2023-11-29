<script>

import SellingCard from '../components/SellingCard.vue'
import SellingGrid from '../components/SellingGrid.vue'
import Slider from '../components/Slider.vue'
import CartView from '../components/CartView.vue';

import { mapState, mapMutations } from 'vuex';

// import { BoxIcon } from 'boxicons/css/boxicons.min.css'

export default {
  data() {
    return {
      pricesArray: [17.99, 9.99, 44.99],
      pricesArray2: [17.99, 39.99, 24,99],
      imagesArray: [
        "/assets/plant/8.jpg",
        "/assets/plant/9.jpg",
        "/assets/plant/10.jpg",
      ],
      imagesArray2: [
        "/assets/plant/11.jpg",
        "/assets/plant/12.jpg",
        "/assets/plant/13.jpg",
      ],
    }
  },
  computed: {
    ...mapState(['showForm'])
  },
  components: {
    SellingCard,
    SellingGrid,
    Slider,
    CartView
},
  methods: {
    ...mapMutations(['toggleForm']),
  },
}

</script>

<template>
  
  <section class="h-screen bg-backgroundHeader bg-cover px-6 py-6 flex flex-col relative">

    <header class="my-menu flex justify-center">

      <div class="flex items-stretch h-full mx-12 px-12 py-2">
        <img alt="Nature&moi logo" class="object-fill" src="/assets/lightlogo.png"/>
      </div>
          
      <div class="h-full w-1/2 mx-12">
        <nav class="h-full flex justify-between items-center px-6 mx-6">
          <RouterLink class="text-white rounded-full px-10 font-montserrat text-lg transition-all ease-in duration-150 hover:py-9 hover:px-10 hover:text-mygreen hover:bg-white hover:transition-all hover:ease-in hover:duration-150 hover:focus:outline-none" to="/">Acceuil</RouterLink>
          <RouterLink class="text-white rounded-full px-8 font-montserrat text-lg transition-all ease-in duration-150 hover:py-9 hover:px-8 hover:text-mygreen hover:bg-white hover:transition-all hover:ease-in hover:duration-150 hover:focus:outline-none" to="/our-plant">Nos plantes</RouterLink>
          <RouterLink class="text-white rounded-full px-8 font-montserrat text-lg transition-all ease-in duration-150 hover:py-9 hover:px-8 hover:text-mygreen hover:bg-white hover:transition-all hover:ease-in hover:duration-150 hover:focus:outline-none" to="/about">A propos de nous</RouterLink>
        </nav>
      </div>

      <div class="h-full mx-12">
        <nav class="h-full flex justify-between items-center px-6 mx-6">
          <button class="text-white rounded-full px-8 font-montserrat text-lg transition-all ease-in duration-150 hover:py-9 hover:px-8 hover:text-mygreen hover:bg-white hover:transition-all hover:ease-in hover:duration-150 hover:focus:outline-none" @click="toggleForm"><i class="bx bx-cart text-2xl"></i></button>
          <button class="text-white rounded-full px-8 font-montserrat text-lg transition-all ease-in duration-150 hover:py-9 hover:px-8 hover:text-mygreen hover:bg-white hover:transition-all hover:ease-in hover:duration-150 hover:focus:outline-none"><i class="bx bx-user-circle text-2xl"></i></button>
        </nav>
      </div>

    </header>

    <div class="mr-6 mt-32 w-4/12 text-left">
      <h1 class="font-abril-fatface font-normal text-8xl text-mygray px-5 py-14">Nature Emoi, meilleur que le chocolat</h1>
    </div>

    <CartView v-if="showForm" />

  </section>

  <section class="flex justify-between items-center mx-64 h-[45vh]">
    <div class="p-9 border-2 border-mylightgreen rounded-xl flex flex-col items-center w-2/12">
      <i class="bx bxs-store text-mylightgreen text-8xl"></i>
      <p class="text-mydarkgreen font-montserrat text-2xl text-center">Nos magasins à votre service</p>
    </div>
    <div class="p-5 border-2 border-mylightgreen rounded-xl flex flex-col items-center w-2/12">
      <i class="bx bxs-package text-mylightgreen text-8xl"></i>
      <p class="text-mydarkgreen font-montserrat text-2xl text-center">Retrait en magasin sans contact</p>
    </div>
    <div class="p-5 border-2 border-mylightgreen rounded-xl flex flex-col items-center w-2/12">
      <i class="bx bxs-truck text-mylightgreen text-8xl"></i>
      <p class="text-mydarkgreen font-montserrat text-2xl text-center">Livraison à domicile sans contact</p>
    </div>
  </section>

  <section>
    <div class="flex flex-col h-[10vh]">
      <h2 class="text-mydarkgreen ml-24 text-left font-abril-fatface font-semibold text-7xl">Nos Meilleur Ventes</h2>
      <div class="w-14 h-2 bg-mygreen ml-24 mt-4"></div>
    </div>

    <!-- Pricing Card -->
    <Slider>
      <SellingCard image="1.jpg" price="24.99"/>

      <SellingCard image="2.jpg" price="14.99"/>

      <SellingCard image="3.jpg" price="24.99"/>

      <SellingCard image="4.jpg" price="29.99"/>

      <SellingCard image="5.jpg" price="34.99"/>

      <SellingCard image="6.jpg" price="28.99"/>

      <SellingCard image="7.jpg" price="22.99"/>
    </Slider>
  </section>

  <section>
    <div class="flex flex-col pb-1 mb-5">
      <h2 class="text-mydarkgreen ml-24 mt-44 text-left font-abril-fatface font-semibold text-7xl">Nos Plantes</h2>
      <div class="w-14 h-2 bg-mygreen ml-24 mt-4"></div>
    </div>

    <Slider>

      <SellingGrid :prices="pricesArray" :images="imagesArray"/>

      <SellingGrid :prices="pricesArray2" :images="imagesArray2"/>

    </Slider>

  </section>

  <section>
    <div class="h-[35vh] flex w-full justify-between items-end">
      <div class="mx-24 mb-12 flex items-center gap-2">
        <span class="bx bx-copyright text-black text-xl"></span>
        <p class="text-black text-sm font-montserrat font-bold items-end">2023 - Nature Emoi</p>
      </div>
      <p class="mx-24 mb-14 text-black text-sm font-montserrat font-bold">Conditions générale de vente</p>
    </div>
  </section>

</template>


<style scoped>
/* Your scoped styles here */

</style>