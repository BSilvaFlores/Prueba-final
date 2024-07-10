<template>
  <div class="card text-end mx-auto m-5" style="width: 40rem; background-color: #005D4D; color: white;">
    <div class="tarjeta card-body">
      <div>
        <img class="imagen" :src="curso.attributes.cover" alt="imgCursos" />
      </div>
      <div>
        <h3>{{ curso.attributes.name }}</h3>

        <div>
          <p>{{ curso.attributes.description }}</p>
          <div style="display: flex; justify-content: space-around;">
            <div v-for="(tags, index) in curso.attributes.tag_list" :key="index">
              <div class="tag" v-if="tags == 'GIT'" :style="{backgroundColor: '#FF7921'}">{{ tags }}</div>
              <div class="tag" v-if="tags == 'Terminal'" :style="{backgroundColor: '#DDFF04'}">{{ tags }}</div>
              <div class="tag" v-if="tags == 'CSS'" :style="{backgroundColor: '#00F9BD'}">{{ tags }}</div>
              <div class="tag" v-if="tags == 'HTML'" :style="{backgroundColor: '#FFAD1E'}">{{ tags }}</div>

              <div class="tag" v-if="tags == 'BEM'" :style="{backgroundColor: '#2DE6E9'}">{{ tags }}</div>
              <div class="tag" v-if="tags == 'Sass'" :style="{backgroundColor: '#FF5BC6'}">{{ tags }}</div>
              <div class="tag" v-if="tags == 'Responsive'" :style="{backgroundColor: '#9EFCB3'}">{{ tags }}</div>

              <div class="tag" v-if="tags == 'Programming'" :style="{backgroundColor: '#A6F7FF'}">{{ tags }}</div>
              <div class="tag" v-if="tags == 'ES6'" :style="{backgroundColor: '#FBFF03'}">{{ tags }}</div>
              <div class="tag" v-if="tags == 'Babel'" :style="{backgroundColor: '#FDE03A'}">{{ tags }}</div>

            </div>
          </div>
        </div>

        <div style="
            display: flex;
            justify-content: space-around;
            align-items: center;
          ">
          <input v-if="curso.attributes.difficulty === 'principiante'" :value="principiante" type="range" min="0"
            max="100" disabled/>
          <input v-if="curso.attributes.difficulty === 'media'" :value="media" type="range" min="0" max="100" disabled/>
          <input v-if="curso.attributes.difficulty === 'hard'" :value="dificil" type="range" min="0" max="100" disabled/>

          <p class="pt-3">{{ curso.attributes.difficulty }}</p>
          <button class="btn btn-secondary">Ver mas info</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CursosComp",
  props: {
    curso: {
      type: Object,
    },
  },
  data: function () {
    return {
      principiante: 20,
      media: 55,
      dificil: 90,

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
.tarjeta {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.imagen {
  width: 200px;
  margin-right: 30px;
  border-radius: 7px 7px 7px 7px;
}

.tag{
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 10px;
  color: black
}
</style>
