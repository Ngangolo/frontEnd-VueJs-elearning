<template>
  <div>
    <tete></tete>
    <div class="submit container jumbotron">
      <div v-if="!submitted">
        <h3>Proposer un questionnaire de 10 questions à vos etudiants ici</h3>
        <br />
        <div class="form-group">
          <label for="question"><strong>Matiere</strong></label>
          <select
            name="matiere"
            id="matiere"
            type="text"
            class="form-control"
            v-validate="'required'"
            required
            v-model="QCM.matiere"
          >
            <option value="java">java</option>
            <option value="web">Programmation web</option>
            <option value="Csharp">C Sharp</option>
            <option value="javaScript">java Script</option>
            <option value="reseaux">reseaux</option>
            <option value="securite">securite</option>
            <option value="systemeRepartis">Systeme Repartis</option>
            <option value="administrationSysteme">Administration Systeme</option>
            <option value="ihm">IHM</option>
            <option value="ia">IA</option>
            <option value="langagec">langage C</option>
            <option value="c++">C++</option>
            <option value="python">Python</option>
          </select>
        </div>

        <div class="form-group">
          <label for="question"><strong>Question</strong></label>
          <input
            type="text"
            class="form-control"
            id="question"
            v-validate="'required'"
            required
            v-model="QCM.question"
            name="question"
          />
        </div>

        <div>
          <div class="form-group">
            <label for="reponse1"><strong>Reponse1</strong></label>
            <input
              class="form-control"
              id="reponse1"
              required
              v-model="QCM.reponses.reponse1"
              name="reponse1"
            />
          </div>

          <div class="form-group">
            <label for="reponse2"><strong>Reponse2</strong></label>
            <input
              class="form-control"
              id="reponse2"
              required
              v-model="QCM.reponses.reponse2"
              name="reponse2"
            />
          </div>

          <div class="form-group">
            <label for="reponse3"><strong>Reponse3</strong></label>
            <input
              class="form-control"
              id="reponse3"
              required
              v-model="QCM.reponses.reponse3"
              name="reponse3"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="Ok"><strong>Numero reponse juste</strong></label>
          <input
            class="form-control"
            id="ok"
            required
            v-model="QCM.ok"
            name="ok"
          />
        </div>

        <div class="form-group">
          <label for="nomduprof"><strong>Nom du profésseur</strong></label>
          <input
            class="form-control"
            id="nomduprof"
            required
            v-model="QCM.nomduprof"
            name="nomduprof"
          />
        </div>

        <button @click="saveQCM" class="btn btn-success">Soumettre</button>
      </div>

      <div v-if="submitted">
        <h4>QCM sourmis avec succès!</h4>
        <button class="btn btn-success" @click="newQCM">
          Ajouter un autre
        </button>
      </div>
    </div>
    <pied></pied>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import tete from "./header.vue";
import pied from "./footer.vue";

export default {
  name: "AjouterQcm",
  components: {
    tete,
    pied,
  },
  data() {
    return {
      id: null,
      QCM: {
        matiere: "",
        question: "",
        ok: "",
        nomduprof: "",
        reponses: {
          reponse1: "",
          reponse2: "",
          reponse3: "",
        },
        published: false,
      },

      submitted: false,
    };
  },
  methods: {
    saveQCM() {
      var data = {
        matiere: this.QCM.matiere,
        question: this.QCM.question,
        reponse: this.QCM.reponses,
        ok: this.QCM.ok,
        nomduprof: this.QCM.nomduprof,
      };
      console.log(data);
      TutorialDataService.createQCM(data)
        .then((response) => {
          // this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newQCM() {
      this.submitted = false;
      this.QCM = {};
    },
  },
};
</script>

<style>
.submit {
  max-width: 600px;
  margin: auto;
  margin-top: 90px;
  margin-bottom: 20px;
  border: solid black 2px;
}
</style>