<template>
  <main>
    <h1 class="p-5" style="color:  black">Avance académico</h1>

    <AvanceComp class="p-2" :curso="curso" :index="index" v-for="(curso, index) in avance" :key="index" />

  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AvanceComp from "../components/AvanceComp.vue";

export default {
  name: "AvanceView",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(['avance'])
  },
  methods: {
    ...mapActions(['setAvance'])
  },
  // watch: {},
  components: {
    AvanceComp,
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  async mounted() {
    await this.setAvance();
  }
  // -- End Lifecycle Methods
};
</script>

<style scoped></style>
