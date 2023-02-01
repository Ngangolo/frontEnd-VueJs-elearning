<template>
  <div class="list row">
    <div class="col-md-8 mb-2">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recherche par titre"
          v-model="titre"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <h4>Liste de vos cours publier:</h4>
      <ul v-if="tutorials" class="list-group">
        <strong>
          <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(tutorial, index) in tutorials"
            :key="index"
            @click="setActiveTutorial(tutorial, index)"
          >
            {{ tutorial.titre }}
          </li>
        </strong>
      </ul>
      <ul v-else class="list-group">
       
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Supprimer tout
      </button>
    </div>
    <div class="col-md-4">
      <div v-if="currentTutorial">
        <h4>Cours Infos</h4>
        <div>
          <label><strong>Titre:</strong></label> {{ currentTutorial.titre }}
        </div>
        <div>
          <label><strong>Description:</strong></label>
          {{ currentTutorial.description }}
        </div>
        <div>
          <label><strong>Nom Du Professeur:</strong></label>
          {{ currentTutorial.nomduprof }}
        </div>
        <button class="btn">
          <a class="badge" :href="'/Tutorial/' + currentTutorial.id"> Modifier les données </a>
        </button>
      </div>
      <div v-else>
        <br />
        <strong
          ><h5>Cliquer sur un cours pour Visualiser,  Modifier ou Supprimer...</h5></strong
        >
      </div>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
//import Edit from './Tutorial.vue';

export default {
  name: "tutorials-list",
  components: {
    //Edit,   <Edit  v-bind:id="currentTutorial.id" />
  },
  data() {
    return {
      tutorials: [],
      // titres: [],
      currentTutorial: null,
      currentIndex: -1,
      titre: "",
    };
  },
  computed: {
    filteredlist() {
      return this.tutorials.filter((tutorial) => {
        return tutorial.description.toLowerCase().includes(this.titre.toLowerCase());
      });
    },
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then((response) => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      TutorialDataService.findByTitle(this.titre)
        .then((response) => {
          this.tutorials = null;
          this.titres = response.data;
          console.log(response);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
.badge {
  background-color: cornflowerblue;
  color: white;
  height: 30px;
  margin-top: 10px;
  justify-content: center;
}
</style>