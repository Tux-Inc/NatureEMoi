<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ScrollMenu from './components/ScrollMenu.vue';
</script>

<template>
  <RouterView />
  <ScrollMenu />
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

.headerClass {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
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
