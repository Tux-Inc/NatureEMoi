<script setup>

defineProps({
  price: String,
  image: String,
})

</script>

<template>
  <div class="w-[410px] h-[550px] bg-center bg-cover mx-auto max-w-lg text-center text-gray-900 rounded-xl relative transition-all ease-in duration-100 hover:w-[420px] hover:transition-all hover:ease-in hover:duration-100" :style="{ backgroundImage: `url(/assets/plant/${image})` }">
    <div class="bg-transparent h-1/6 w-full absolute bottom-0 px-3 rounded-xl">
      <div class="w-full h-full flex gap-2 justify-between items-center">
        <div>
          <p class="text-mydarkgreen font-montserrat font-medium text-left text-4xl">Plante</p>
          <p class="text-mygreen font-montserrat font-bold text-left text-xl">{{ price }}€</p>
        </div>
      <button class="text-white bg-mygreen font-montserrat border-2 py-2.5 px-5 text-sm rounded-full transition-all ease-in duration-100 hover:bg-white hover:text-mygreen hover:border-mygreen hover:border-2 hover:transition-all hover:ease-in hover:duration-100">En savoir plus</button>
      </div>
    </div>
  </div>
</template>
