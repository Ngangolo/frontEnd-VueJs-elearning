<template>
  <div>
    <tete></tete>
    <div class="col-6 qcm jumbotron">
      <h3 class="mt-4 mb-4">
        Evaluation de
        <strong> {{ this.$route.params.matiere }} : </strong> veuillez choisir
        la bonne reponse
      </h3>
      <h5>Question numero: {{ nb }} / {{ questions.length }}</h5>
      <br />
      <b-card
        v-if="questions.length > 0"
        :header="questions[index].question"
        header-tag="header"
      >
        <b-list-group>
          <b-list-group-item
            button
            v-for="(item, index) in ref(questions[index].reponse)"
            :key="item.id"
            @click="action(index)"
          >
            {{ item }}
          </b-list-group-item>
        </b-list-group>
        <b-button v-if="fin" @click="recommencer" class="mt-4"
          >Recommencer !</b-button
        >
      </b-card>
      <div>
        <b-alert v-if="fin && decision" class="mt-4" show
          ><i class="fas fa-check fa-2x" style="color: green"></i> <br />
          <strong>
            Votre score est : {{ score * 10 }} % <br />
            votre score est superieur à <em>70% </em>
            vous avez réussir à l'evaluation.
          </strong>
        </b-alert>
        <b-alert v-if="fin && !decision" class="mt-4" show
          ><i class="fas fa-exclamation-triangle fa-2x" style="color: red"></i>
          <br />
          <strong>
            Votre score est : {{ score * 10 }} % <br />
            votre score est inferieur à <em>70%</em>
            vous avez echouer à l'evaluation.
          </strong>
        </b-alert>
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
  name: "pageQcm",
  components: {
    tete,
    pied,
  },
  data: function () {
    return {
      fin: false,
      minute: 10,
      seconde: 0,
      index: 0,
      score: 0,
      nb: 1,
      decision: false,
      variants: [...Array(4)],
      voirReponse: false,
      questions: [],
    };
  },

  methods: {

    //selectionner les qcms de la matiere
    getTutorial(matiere) {
      TutorialDataService.getQcm(matiere)
        .then((response) => {
          this.questions = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    //fonction pour transformer ma chaine en un tableau
    ref: function (repon) {
      let rep = repon.split(",");
      console.log(rep);
      return rep;
      
    },

    action: function (index) {
      // Test bonne réponse
      if (index == this.questions[this.index].ok - 1 && !this.fin) {
        this.score++;
      }
      // Test fin de quiz
      if (this.index == this.questions.length - 1) {
        this.fin = true;
      } else {
        this.index++;
      }

      if (!this.fin) this.nb++;

      if (this.fin) {
        if (this.score > 5) this.decision = true;
      }
    },
    recommencer: function () {
      this.fin = this.index = this.score = 0;
      this.nb = 1;
      this.decision = false;
    },
  },

  created() {
    this.getTutorial(this.$route.params.matiere);
    console.log(this.$route.params.matiere);
  },
};

/*
  <b-list-group-item
            button
            v-for="(item, index) in questions[index].answers"
            :key="item.id"
            @click="action(index)"
            
          >
            {{ item }}
          </b-list-group-item>
  */
</script>

<style>
.qcm {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  font-size: 17px;
}
strong {
  font-size: 20px;
}
</style>

