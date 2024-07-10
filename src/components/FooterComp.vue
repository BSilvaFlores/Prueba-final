<template>
    <footer class="footer bg-body-tertiary mt-5" style="background-color: #005D4D;">
        <router-link :to="routes[2].path" style="display: flex; justify-content: center; align-items: center;background-color: #005D4D; height: 100%; width: 100%; padding: 0; border: 0; margin: 0; text-decoration: none; color: white;">
            Suscribite a nuestro boletín oficial de noticias haciendo click AQUI</router-link>
    </footer>
</template>

<script>
import router, { routes } from '@/router';

export default {
    name: 'FooterComp',
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
        }
    },
    // computed: {},
    //methods: {},
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.footer {
    height: 15vh;
}
</style>