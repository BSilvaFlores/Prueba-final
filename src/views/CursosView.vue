<template>
  <main>
    <h1>Cursos</h1>

    <div v-for="(curso, index) in cursos" :key="index">
      <CursosComp :curso="curso"/>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CursosComp from "../components/CursosComp.vue";

export default {
  name: "CursosView",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["cursos"]),
  },
  methods: {
    ...mapActions(["setCursos"]),
  },
  // watch: {},
  components: {
    CursosComp,
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  async mounted() {
    await this.setCursos();
  },
  // -- End Lifecycle Methods
};
</script>

<style scoped>
*{
  color: black;
}
h1{
  padding: 10px;
}
</style>
