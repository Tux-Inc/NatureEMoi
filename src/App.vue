<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section class="h-screen bg-backgroundHeader bg-cover pl-6 flex flex-col relative">
    <header class="flex items-center">
          <img alt="Nature&moi logo" class="" src="public/assets/logo.png" width="150"/>
          
            <nav class="flex ml-8 space-x-14">
              <RouterLink class="text-mygray font-montserrat py-2.5 px-5 mt-2.5 mr-2 mb-2 hover:text-black hover:transition-all hover:ease-in duration-75 hover:py-2.5 hover:px-5 hover:mr-2 hover:mb-2 hover:font-montserrat hover:focus:outline-none hover:bg-white hover:rounded-full" to="/">Acceuil</RouterLink>
              <RouterLink class="text-mygray font-montserrat py-2.5 px-5 mt-2.5 mr-2 mb-2 hover:text-black hover:transition-all hover:ease-in duration-75 hover:py-2.5 hover:px-5 hover:mr-2 hover:mb-2 hover:font-montserrat hover:focus:outline-none hover:bg-white hover:rounded-full" to="/our-plant">Nos plantes</RouterLink>
              <RouterLink class="text-mygray font-montserrat py-2.5 px-5 mt-2.5 mr-2 mb-2 hover:text-black hover:transition-all hover:ease-in duration-75 hover:py-2.5 hover:px-5 hover:mr-2 hover:mb-2 hover:font-montserrat hover:focus:outline-none hover:bg-white hover:rounded-full" to="/about">A propos de nous</RouterLink>
            </nav>

    </header>

    <div class="mr-6 mt-32 w-4/12 text-left">
      <h1 class="font-abril-fatface font-normal text-8xl text-mygray px-5 py-14">Nature Emoi, meilleur que le chocolat</h1>
    </div>

    <button class="absolute bottom-0 mb-6 ml-5 flex justify-between items-center">
      <i class="text-white text-1xl font-montserrat not-italic">Scroll</i>
      <box-icon class="bx bx-chevron-down text-white text-2xl"></box-icon>
    </button>
  </section>

  <RouterView />
</template>

<style scoped>

@import url(https://fonts.google.com/specimen/Abril+Fatface?query=abril&sidebar.open&selection.family=Abril+Fatface);
@import url(https://fonts.google.com/specimen/Montserrat?query=monts);

.backgroundImg {
  background-image: url('./assets/bg.jpg');
  background-size: cover;
  padding: 25px ;
  height: 80vh;
}

.routerLink {
  color: white;
  font-family: 'Montserrat', sans-serif;
}

.routerLink:hover {
  color: #000;
  background-color: white;
  /* py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 */
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
