<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <p class="navbar-brand" style="color: aliceblue;">Sistema escolar</p>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav" v-for="(route, index) in routes" :key="index">
            <li class="nav-item">
                <router-link class="nav-link" style="color: aliceblue;" :to="route.path" activeClass="active disabled">{{ route.name }}</router-link>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarComp",
  // props: {},
  data: function () {
    return {
      routes: [
        {
          name: "Login",
          path: "/login",
        },
        {
          name: "Inicio",
          path: "/",
        },
        {
          name: "Suscripciones",
          path: "/suscripciones",
        },
        {
          name: "Cursos",
          path: "/cursos",
        },
        {
          name: "AvanceAcademico",
          path: "/avance",
        },
        {
          name: "Perfil",
          path: "/perfil",
        },

      ],
    };
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
  .navbar{
    height: 15vh;
  }
  nav{
    background-color: #005D4D;
  }
</style>
