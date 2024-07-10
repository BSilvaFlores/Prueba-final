<template>
  <main class="main mx-auto">
    <div class="contenedor">
      <h6>¡Bienvenid@ a AltaCursos!</h6>

      <div class="mb-3 mx-auto m-4">
        <input
          type="email"
          class="form-control"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          placeholder="password"
        />
      </div>
      <button class="btn btn-secondary">INICIAR SESIÓN</button>
    </div>
  </main>
</template>

<script>
export default {
  name: "LoginView",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  //methods: {},
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
.main {
  width: 50%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contenedor{
  background-color: #005D4D;
  padding: 25px;
  border-radius: 10px;
  width: 400px;
  height: 250px;
}
</style>
