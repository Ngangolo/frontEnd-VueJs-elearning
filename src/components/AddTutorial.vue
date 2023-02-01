<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <h5>Ajouter un cours ici</h5>
      <div class="form-group">
        <label for="titre"><strong> Titre</strong></label>
        <input
          type="text"
          class="form-control"
          id="titre"
          v-validate="'required'"
          required
          v-model="tutorial.titre"
          name="titre"
        />
      </div>

      <div class="form-group">
        <label for="description"><strong> Description</strong></label>
        <input
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>

      <div class="form-group">
        <label for="nomduprof"><strong>Nom du profésseur</strong></label>
        <input
          class="form-control"
          id="nomduprof"
          required
          v-model="tutorial.nomduprof"
          name="nomduprof"
        />
      </div>

      <div class="form-group">
        <label for="image"><strong>Image illustrative</strong></label>
        <input
          type="file"
          id="image"
          required
          @change="onImageChange"
          name="image"
        />
      </div>
      <div class="form-group">
        <label for="contenu"><strong>Contenu</strong></label>
        <input
          type="file"
          id="contenu"
          required
          @change="onFileChange"
          name="contenu"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Soumettre</button>
    </div>

    <div v-if="submitted">
      <h4>cours sourmis avec succès!</h4>
      <button class="btn btn-success" @click="newTutorial">
        Ajouter Cours
      </button>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "addTutorial",
  data() {
    return {
      tutorial: {
        id: null,
        titre: "",
        description: "",
        nomduprof: "",
        image: "",
        contenu: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
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
    saveTutorial() {
      /*let formData = new FormData()
const config = {
                   headers:{
                       'Content-Type' : 'multipart/form-data',
                   }
        };
        formData.append('image', this.image);

    console.log("the", formData, data)
*/
      console.log("=====", this.tutorial.image);
      var data = {
        id: this.tutorial.id,
        titre: this.tutorial.titre,
        description: this.tutorial.description,
        nomduprof: this.tutorial.nomduprof,
        image: this.tutorial.image,
        imgNom: this.tutorial.nomImage,
        contenu: this.tutorial.contenu,
        PdfNom: this.tutorial.nomPdf,
      };
      TutorialDataService.create(data)
        .then((response) => {
          // this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>