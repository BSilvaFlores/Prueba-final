<template>
  <main class="container">

      <PerfilComp v-for="(dato, index) in perfil.included" :key="index" :dato="dato" :perfil="perfil"/>

      <div class="row">
        <RedesSocialesComp/>
      </div>
  </main>
</template>

<script>
import PerfilComp from "@/components/PerfilComp.vue";
import RedesSocialesComp from "@/components/RedesSocialesComp.vue"

import { mapActions, mapState } from "vuex";

export default {
  name: "PerfilView",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["perfil"]),
  },
  methods: {
    ...mapActions(["setPerfil"]),
  },
  // watch: {},
  components: {
    PerfilComp,
    RedesSocialesComp
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  async mounted() {
    await this.setPerfil();
  },

  // -- End Lifecycle Methods
};
</script>

<style scoped>
*{
  color: black;
}
</style>
