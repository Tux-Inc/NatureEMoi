
<template>
  <div class="relative">
    <button class="button ml-5 absolute top-1/2 left-0 w-12 h-12 rounded-full bg-white z-10 bx bx-chevron-left text-2xl font-semibold transition-all ease-in duration-75 hover:w-14 hover:h-14 hover:ml-2 hover:border hover:border-mydarkgreen hover:transition-all hover:ease-in hover:duration-75" @click="moveSlider('prev')"></button>
    <div class="slider grid-flow-col overflow-hidden w-auto h-auto gap-4 mx-20 items-center mt-8">
      <slot />
    </div>
    <button class="button mr-5 absolute top-1/2 right-0 w-12 h-12 rounded-full text-mydarkgreen bg-white z-10 bx bx-chevron-right text-2xl font-semibold transition-all ease-in duration-75 hover:w-14 hover:h-14 hover:mr-2 hover:border hover:border-mydarkgreen hover:transition-all hover:ease-in hover:duration-75" @click="moveSlider('next')"></button>
  </div>
</template>

<script>

export default {
  name: 'Slider',
  data() {
    return {
      slider: null,
    }
  },
  methods: {
    moveSlider(direction, x) {
      console.log(`index: ${this.indexSlider}`);
      const slider = this.$el.querySelector('.slider');
      const sliderContainerWidth = slider.offsetWidth;
      const sliderItemWidth = slider.firstElementChild.offsetWidth;
      const numVisibleItems = Math.floor(sliderContainerWidth / sliderItemWidth);
      
      let newPosition = 0;
      
      if (direction === 'prev') {
        newPosition = slider.scrollLeft - (sliderItemWidth * numVisibleItems);
      } else if (direction === 'next') {
        newPosition = slider.scrollLeft + (sliderItemWidth * numVisibleItems);
      }
      
      slider.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  }
}

</script>

<style scoped>

.slider {
  display: grid;
}

.button {
  transform: translateY(-50%);
}

</style>