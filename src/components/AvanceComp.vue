<template>
  <main class="accordion"  :id="'accordionExample'+index" v-if="curso.type === 'course'">

    <div class="accordion-item" >
      <h2 class="accordion-header" >
        <button class="accordion-button" style="background-color: #005D4D; color: white;" type="button" :data-bs-toggle="'collapse' + index" :data-bs-target="'#collapse' + index"
          aria-expanded="true" :aria-controls="'collapse' + index" @click="toggleAccordion(index)">
          {{ curso.attributes.name }}
        </button>
      </h2>
      <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ 'show': activeAccordion === index }" :data-bs-parent="'#accordionExample'+index">
        <div class="accordion-body">
          <h3 style="color: black;">{{ curso.attributes.name }}</h3>

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Unidad de aprendizaje</th>
                <th scope="col">Estado</th>
                <th scope="col">Videos</th>
                <th scope="col">Evaluaciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cursando, index) in curso.attributes.learning" :key="index">
                <td>{{ cursando.name }}</td>
                <td>{{ cursando.status }}</td>
                <td>{{ cursando.videos.progress }}/{{ cursando.videos.total }}</td>
                <td>{{ cursando.assessments.progress }}/{{ cursando.assessments.total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>


  </main>

</template>

<script>

export default {
  name: "component-name",
  props: {
    curso: {
      type: Object,
    },
    index: {
      type: Number,
    }
  },
  data: function () {
    return {
      activeAccordion: null, // Para almacenar el índice del acordeón activo
    };
  },
  computed: {
  },
  methods: {
    toggleAccordion(index) {
      if (this.activeAccordion === index) {
        this.activeAccordion = null; // Si se hace clic en el mismo acordeón, ciérralo
      } else {
        this.activeAccordion = index; // Abre el acordeón seleccionado
      }
    }
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods

  // -- End Lifecycle Methods
};
</script>

<style scoped></style>
