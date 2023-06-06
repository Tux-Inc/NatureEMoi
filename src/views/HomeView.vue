<script>

import SellingCard from '../components/SellingCard.vue'
import SellingGrid from '../components/SellingGrid.vue'
import Slider from '../components/Slider.vue'

// import { BoxIcon } from 'boxicons/css/boxicons.min.css'

export default {
  data() {
    return {
      pricesArray: [17.99, 9.99, 44,99],
      pricesArray2: [17.99, 39.99, 24,99],
      imagesArray: [
        "public/assets/plant/1.jpg",
        "public/assets/plant/2.jpg",
        "public/assets/plant/3.jpg",
      ],
      imagesArray2: [
        "public/assets/plant/5.jpg",
        "public/assets/plant/4.jpg",
        "public/assets/plant/6.jpg",
      ],
    }
  },
  components: {
    SellingCard,
    SellingGrid,
    Slider,
  },
}

</script>

<template>
  <section class="flex justify-between items-center mx-64 h-[45vh]">
    <div class="flex flex-col items-center w-2/12">
      <i class="bx bxs-store text-mygreen text-8xl"></i>
      <p class="font-montserrat text-2xl text-center">Nos magasins à votre service</p>
    </div>
    <div class="flex flex-col items-center w-2/12">
      <i class="bx bxs-package text-mygreen text-8xl"></i>
      <p class="font-montserrat text-2xl text-center">Retrait en magasin sans contact</p>
    </div>
    <div class="flex flex-col items-center w-2/12">
      <i class="bx bxs-truck text-mygreen text-8xl"></i>
      <p class="font-montserrat text-2xl text-center">Livraison à domicile sans contact</p>
    </div>
  </section>

  <section>
    <div class="flex flex-col h-[10vh]">
      <h2 class="ml-24 text-left font-abril-fatface font-semibold text-7xl">Nos Meilleur Ventes</h2>
      <div class="w-14 h-2 bg-mygreen ml-24 mt-4"></div>
    </div>

    <!-- Pricing Card -->
    <Slider>
      <SellingCard image="public/assets/best_sale/1.jpg" price="24.99"/>

      <SellingCard image="public/assets/best_sale/2.jpg" price="14.99"/>

      <SellingCard image="public/assets/best_sale/3.jpg" price="24.99"/>

      <SellingCard image="public/assets/best_sale/4.jpg" price="29.99"/>

      <SellingCard image="public/assets/best_sale/5.jpg" price="34.99"/>

      <SellingCard image="public/assets/best_sale/6.jpg" price="28.99"/>

      <SellingCard image="public/assets/best_sale/7.jpg" price="22.99"/>
    </Slider>
  </section>

  <section>
    <div class="flex flex-col pb-1 mb-5">
      <h2 class="ml-24 mt-44 text-left font-abril-fatface font-semibold text-7xl">Nos Plantes</h2>
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
