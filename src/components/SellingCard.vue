<script setup>

defineProps({
  price: String,
  image: String,
})

</script>

<template>
  <div class="w-[410px] h-[550px] bg-center bg-cover mx-auto max-w-lg text-center text-gray-900 rounded-xl relative hover:w-[420px] hover:transition-all transition-all" :style="{ backgroundImage: `url(${image})` }">
    <div class="bg-transparent h-1/6 w-full absolute bottom-0 px-3 rounded-xl">
      <div class="w-full h-full flex gap-2 justify-between items-center">
        <div>
          <p class="text-black font-montserrat font-medium text-left text-4xl">Plante</p>
          <p class="text-mygreen font-montserrat font-bold text-left text-xl">{{ price }}€</p>
        </div>
      <button class="text-white bg-mygreen font-montserrat py-2.5 px-5 text-sm rounded-full hover:bg-white hover:text-mygreen hover:border-mygreen hover:border-2 hover:transition-colors">En savoir plus</button>
      </div>
    </div>
  </div>
</template>
