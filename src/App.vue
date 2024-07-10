<template>
  <NavBarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavBarComp from './components/NavBarComp.vue';

  export default {
    name: 'App',
    components: {
      NavBarComp,
      FooterComp
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

</style>
