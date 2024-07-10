<template>
  <main  v-if="dato.type === 'profile'"  class="container contenedor-principal p-5" style="background-color: #005D4D; margin-top: 20px; margin-bottom: 20px; border-radius: 10px;">

    <div class="card" style="width: 22rem; background-color: white; color: black;">
      <img
        :src="dato.attributes.avatar"
        width="100"
        height="250"
        class="card-img-top p-4"
        alt="avatar"
      />
    </div>

    <div class="card" style="width: 30rem; background-color: #005D4D; color: white;">
      <div class="card-body" style="text-align: left;">
        <h4 class="card-text">Información de perfil</h4>
        <p class="card-text">Nombres: {{ dato.attributes.firstname }}</p>
        <p class="card-text">Apellidos: {{ dato.attributes.lastname }}</p>
        <p class="card-text">
          Fecha de Nacimiento: {{ dato.attributes.birthday }}
        </p>
        <p class="card-text">Correo: {{ perfil.data.attributes.email }}</p>
        <p class="card-text">Bio: {{ dato.attributes.bio }}</p>
      </div>
    </div>
</main>
  


</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "PerfilComp",
  props: {
    dato: {
      type: Object,

    },
    perfil: Object
  },
  data: function () {
    return {};
  },
  computed: {
    ...mapState(['css'])
  },
  methods: {
    ...mapActions(['setCss'])
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
    .contenedor-principal{
        width: 40rem; 
        display: flex;
    }
</style>
