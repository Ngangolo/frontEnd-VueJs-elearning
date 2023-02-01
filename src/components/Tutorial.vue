<template>
  <div>
    <tete></tete>
    <div class=" modifier jumbotron col-5">
      <div v-if="currentTutorial" >
        <h4>Cours à modifier</h4>
        <form>
          <div class="form-group">
            <label for="title"> <strong>Titre </strong></label>
            <input
              type="text"
              class="form-control"
              id="titre"
              v-model="currentTutorial.titre"
            />
          </div>
          <div class="form-group">
            <label for="description"><strong>Description </strong></label>
            <input
              type="text"
              class="form-control"
              id="description"
              v-model="currentTutorial.description"
            />
          </div>

          <div class="form-group">
            <label for="nomduprof"><strong>Nom Du profésseur</strong></label>
            <input
              type="text"
              class="form-control"
              id="nomduprof"
              v-model="currentTutorial.nomduprof"
            />
          </div>

      <div class="form-group">
        <label for="image"><strong>Image illustrative</strong></label> <br>
        <input
          type="file"
          id="image"
          required
          @change="onImageChange"
          name="image"
        />
      </div>

      <div class="form-group">
        <label for="contenu"><strong>Contenu</strong></label> <br>
        <input
          type="file"
          id="contenu"
          required
          @change="onFileChange"
          name="contenu"
        />
      </div>
        </form>

        <button class="badge badge-danger mr-5 bouton" @click="deleteTutorial">
          Supprimer le cours
        </button>

        <button
          type="submit"
          class="badge badge-success bouton"
          @click="updateTutorial"
        >
          Soumettre ma modification
        </button>
        <p>{{ message }}</p>
      </div>

      <div v-else class="mt-100">
        <br />
        <p>Veuillez selectionner le cours à modifier</p>
      </div>
    </div>
    <pied></pied>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import tete from "../components/header.vue";
import pied from "../components/footer.vue";

export default {
  name: "tutorial",
  components: {
    tete,
    pied,
  },
  data() {
    return {
      currentTutorial: null,
      message: "",
    };
  },
  methods: {
    getTutorial(id) {
      TutorialDataService.get(id)
        .then((response) => {
          this.currentTutorial = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentTutorial.id,
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
        published: status,
      };

      TutorialDataService.update(this.currentTutorial.id, data)
        .then((response) => {
          this.currentTutorial.published = status;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

  onImageChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
      //console.log(files[0])
    },
    
    onFileChange(e) {
       let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createPdf(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      //let me = this;

      reader.onload = (e) => {
        this.tutorial.image = e.target.result;   
        //window.imgTest = this.tutorial.image  
        // console.log(this.tutorial.image)

      };
      reader.readAsDataURL(file);
      this.tutorial.nomImage = file.name;
    },
    createPdf(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.tutorial.contenu = e.target.result;
      };
      reader.readAsDataURL(file);
      this.tutorial.nomPdf = file.name;
    },
    updateTutorial() {
       var data = {
        titre: this.currentTutorial.titre,
        description: this.currentTutorial.description,
        nomduprof: this.currentTutorial.nomduprof,
        image: this.currentTutorial.image,
        imgNom: this.currentTutorial.nomImage,
        contenu: this.currentTutorial.contenu,
        PdfNom: this.currentTutorial.nomPdf,
      };

      TutorialDataService.update(this.currentTutorial.id, data)
        .then((response) => {
          console.log(response.data);
          this.message = "Le cours a été mis à jour avec succès!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push('/mod');
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getTutorial(this.$route.params.id);
    console.log(this.$route.params.id);
  },
};
</script>

<style>
.modifier {
   margin-top: 110px;
   margin-bottom: 120px;
   margin-left: auto;
   margin-right: auto;
}
.bouton{
  height: 30px;
}
</style>