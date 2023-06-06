<template>
  <div class="grid grid-rows-2 grid-flow-col gap-6">
    <div class="bg-cover bg-center rounded-xl w-[850px] h-[850px] row-span-3 relative hover:w-[860px] hover:transition-all transition-all"
        :style="{ backgroundImage: `url(${images[0]})` }">
      <div class="bg-transparent h-[100px] w-full absolute bottom-0 px-10 rounded-xl">
        <div class="w-full h-full flex gap-2 justify-between items-center">
          <div>
            <p class="text-black font-montserrat font-medium text-left text-4xl">Plante</p>
            <p class="text-mygreen font-montserrat font-bold text-left text-xl">{{ prices[0] }}€</p>
          </div>
          <button
            class="text-white bg-mygreen font-montserrat py-2.5 px-5 text-sm rounded-full hover:bg-white hover:text-mygreen hover:border-mygreen hover:border-2 hover:transition-colors">En
            savoir plus</button>
        </div>
      </div>
    </div>

    <div class="bg-cover bg-center rounded-xl w-[820px] h-[400px] col-span-2 relative hover:w-[830px] hover:transition-all transition-all"
        :style="{ backgroundImage: `url(${images[1]})` }">
      <div class="bg-transparent h-[100px] w-full absolute bottom-0 px-10 rounded-xl">
        <div class="w-full h-full flex gap-2 justify-between items-center">
          <div>
            <p class="text-black font-montserrat font-medium text-left text-4xl">Plante</p>
            <p class="text-mygreen font-montserrat font-bold text-left text-xl">{{ prices[1] }}€</p>
          </div>
          <button
            class="text-white bg-mygreen font-montserrat py-2.5 px-5 text-sm rounded-full hover:bg-white hover:text-mygreen hover:border-mygreen hover:border-2 hover:transition-colors">En
            savoir plus</button>
        </div>
      </div>
    </div>

    <div class="bg-cover bg-center mt-[25px] rounded-xl w-[820px] h-[400px] row-span-2 col-span-2 relative hover:w-[830px] hover:transition-all transition-all"
        :style="{ backgroundImage: `url(${images[2]})` }">
      <div class="bg-transparent h-[100px] w-full absolute bottom-0 px-10 rounded-xl">
        <div class="w-full h-full flex gap-2 justify-between items-center">
          <div>
            <p class="text-black font-montserrat font-medium text-left text-4xl">Plante</p>
            <p class="text-mygreen font-montserrat font-bold text-left text-xl">{{ prices[2] }}€</p>
          </div>
          <button
            class="text-white bg-mygreen font-montserrat py-2.5 px-5 text-sm rounded-full hover:bg-white hover:text-mygreen hover:border-mygreen hover:border-2 hover:transition-colors">En
            savoir plus</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

defineProps({
  prices: Array,
  images: Array,
})

</script>
