<template>
    <main class="suscripcion container">
        <h1>Suscripción</h1>

        <form
            style="width: 55%; background-color: #005D4D; margin: auto; padding: 20px; padding-left: 3%; border-radius: 10px;">
            <div class="mb-3" style="display: flex; align-items: center;">
                <label for="exampleFormControlInput1" class="form-label label">Email address</label>
                <div style="display: flex;">
                    <input type="text" class="form-control" style="margin-right: 15px;" id="exampleFormControlInput1" placeholder="Nombre" />
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Apellido" />
                </div>
            </div>
            <div class="mb-3">
                <div style="display: flex;">
                    <label for="exampleFormControlInput1" class="form-label label">Dirección</label>
                    <input type="text" class="form-control input" id="exampleFormControlInput1"
                        placeholder="Dirección completa">
                </div>

            </div>
            <div class="mb-3">
                <div style="display: flex;">
                    <label for="exampleFormControlInput1" class="form-label label">Teléfono</label>
                    <input type="text" class="form-control input" id="exampleFormControlInput1"
                        placeholder="123-456-7890">
                </div>

            </div>
            <div class="mb-3">
                <div style="display: flex;">
                    <label for="exampleFormControlInput1" class="form-label label">Email</label>
                    <input type="email" class="form-control input" id="exampleFormControlInput1"
                        placeholder="ejemplo@gmail.com">
                </div>

            </div>
            <div class="mb-3">
                <div style="display: flex;">
                    <label for="exampleFormControlInput1" class="form-label label">Repetir email</label>
                    <input type="email" class="form-control input" id="exampleFormControlInput1"
                        placeholder="ejemplo@gmail.com">
                </div>
            </div>

            <div class="infoTemas" style="text-align: left;">
                <h6>¿Sobre qué temas quieres mantenerte informado?</h6>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                    <label class="form-check-label" for="inlineCheckbox1">CSS</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                    <label class="form-check-label" for="inlineCheckbox2">HTML</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                    <label class="form-check-label" for="inlineCheckbox3">Javascript</label>
                </div>
            </div>

            <div class="confimacionCurso" style="text-align: left;">
                <h6>¿Ya has comenzado algún curso en AltaCursos?</h6>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                    <label class="form-check-label" for="inlineCheckbox1">SI</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                    <label class="form-check-label" for="inlineCheckbox2">NO</label>
                </div>
            </div>

            <div class="descripcionPerfil" style="text-align: left;">
                <h6>Cuéntanos mas sobre tí:</h6>
                <textarea name="" id="" cols="75" rows="3"></textarea>
            </div>

            <div class="btnSuscribirme" style="text-align: left;">
                <button class="btn btn-secondary">Suscribirme</button>
            </div>
        </form>

    </main>
</template>

<script>
export default {
    name: "SuscripcionesView",
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
.input {
    width: 60%;
}

.label {
    margin-right: 20px;
    width: 120px;
    text-align: left;
}
h6{
    padding: 5px;
}
h1{
    padding: 20px;
    color: black;
}
</style>
