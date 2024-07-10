<template>
  <main class="home">

    <div class="contenedorCards">
      <div class="card m-3" style="width: 24rem; background-color: #005D4D; color: white; border-radius: 7px;">
        <img style="border-radius: 7px;"
          src="https://cdn.pixabay.com/photo/2017/08/01/00/38/man-2562325_1280.jpg"
          class="m-2"
          alt="imgAvanceAcadémico"
        />
        <div class="card-body">
          <h5 class="card-title">Avance académico</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <router-link to="/avance" class="btn btn-secondary">Ir a Avance Académico</router-link>
        </div>
      </div>

      <div class="card m-3" style="width: 24rem; background-color: #005D4D; color: white;">
        <img style="border-radius: 7px;"
          src="https://cdn.pixabay.com/photo/2019/06/08/18/02/brain-4260689_960_720.jpg"
          class="m-2"
          alt="imgCursos"
        />
        <div class="card-body">
          <h5 class="card-title">Cursos</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <router-link to="/cursos" class="btn btn-secondary">Ir a Cursos</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
  data: function () {
    return {

    };
  },
  components: {},
  methods: {

  }
};
</script>

<style scoped>
.contenedorCards {
  display: flex;
  justify-content: center;
}

img{
  width: 366px;
  height: 240px;
}
</style>
