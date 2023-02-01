  <template>
  <div>
      <tete></tete>
       <div class="container fiche">
           <h1>Liste des Evaluations Proposées par les enseignants</h1> <br>
       <table class="table table-striped">
        <tbody>
        <tr>
            <td>
                <h4>java</h4>
                <p style="color:grey;font-size:14px;text-align:justify">
                Après la lecture du cours vous pouvez faire l'evaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </td>
            <td class="align-middle" style="text-align: right">
                <a :href="'/pageQcm/' + 'java'">
                    <button type="button" class="btn btn-outline-info btn-sm m-0 waves-effect">
                        Commencer l'evaluation
                    </button>
                </a>        
            </td>
        </tr>
        <tr>
            <td>
                <h4>Programmation web </h4>
                <p style="color:grey;font-size:14px;text-align:justify">
              Après la lecture du cours vous pouvez faire l'evaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </td>
            <td class="align-middle" style="text-align: right">
                <a :href="'/pageQcm/' + 'web'">
                    <button type="button" class="btn btn-outline-info btn-sm m-0 waves-effect">
                        Commencer l'evaluation
                    </button>
                </a>        
            </td>
        </tr>
        <tr>
            <td>
                <h4>Réseaux</h4>
                <p style="color:grey;font-size:14px;text-align:justify">
                Après la lecture du cours vous pouvez faire l'evaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </td>
            <td class="align-middle" style="text-align: right">
                <a :href="'/pageQcm/' + 'reseaux'">
                    <button type="button" class="btn btn-outline-info btn-sm m-0 waves-effect">
                        Commencer l'evaluation
                    </button>
                </a>        
            </td>
        </tr>
        <tr>
            <td>
                <h4>Systeme Repartis</h4>
                <p style="color:grey;font-size:14px;text-align:justify">
               Après la lecture du cours vous pouvez faire levaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </td>
            <td class="align-middle" style="text-align: right">
                <a  :href="'/pageQcm/' + 'systemeRepartis'">
                    <button type="button" class="btn btn-outline-info btn-sm m-0 waves-effect">
                         Commencer l'evaluation
                    </button>
                </a>        
            </td>
        </tr>   
         <tr>
            <td>
                <h4>IHM</h4>
                <p style="color:grey;font-size:14px;text-align:justify">
                Après la lecture du cours vous pouvez faire levaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </td>
            <td class="align-middle" style="text-align: right">
                <a  :href="'/pageQcm/' + 'ihm'">
                    <button type="button" class="btn btn-outline-info btn-sm m-0 waves-effect">
                        Commencer l'evaluation
                    </button>
                </a>        
            </td>
        </tr>  
            <tr>
            <td>
                <h4>Java Script</h4>
                <p style="color:grey;font-size:14px;text-align:justify">
                Après la lecture du cours vous pouvez faire l'evaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </td>
            <td class="align-middle" style="text-align: right">
                <a  :href="'/pageQcm/' + 'javaScript'">
                    <button type="button" class="btn btn-outline-info btn-sm m-0 waves-effect">
                        Commencer l'evaluation
                    </button>
                </a>        
            </td>
        </tr> 
            <tr>
            <td>
                <h4>Securite informatique</h4>
                <p style="color:grey;font-size:14px;text-align:justify">
                Après la lecture du cours vous pouvez faire l'evaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </td>
            <td class="align-middle" style="text-align: right">
                <a  :href="'/pageQcm/' + 'securite'">
                    <button type="button" class="btn btn-outline-info btn-sm m-0 waves-effect">
                        Commencer l'evaluation
                    </button>
                </a>        
            </td>
        </tr>  
            <tr>
            <td>
                <h4>Langage C</h4>
                <p style="color:grey;font-size:14px;text-align:justify">
                Après la lecture du cours vous pouvez faire levaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </td>
            <td class="align-middle" style="text-align: right">
                <a  :href="'/pageQcm/' + 'langagec'">
                    <button type="button" class="btn btn-outline-info btn-sm m-0 waves-effect">
                        Commencer l'evaluation
                    </button>
                </a>        
            </td>
        </tr>     
            <tr>
            <td>
                <h4>Langage C++</h4>
                <p style="color:grey;font-size:14px;text-align:justify">
                Après la lecture du cours vous pouvez faire levaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </td>
            <td class="align-middle" style="text-align: right">
                <a  :href="'/pageQcm/' + 'langagec++'">
                    <button type="button" class="btn btn-outline-info btn-sm m-0 waves-effect">
                        Commencer l'evaluation
                    </button>
                </a>        
            </td>
        </tr>
            <tr>
            <td>
                <h4>IA</h4>
                <p style="color:grey;font-size:14px;text-align:justify">
                Après la lecture du cours vous pouvez faire levaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </td>
            <td class="align-middle" style="text-align: right">
                <a  :href="'/pageQcm/' + 'ia'">
                    <button type="button" class="btn btn-outline-info btn-sm m-0 waves-effect">
                        Commencer l'evaluation
                    </button>
                </a>        
            </td>
        </tr>
        </tbody>
    </table>
  </div>
  <pied></pied>
  </div>
</template>

    
<script>
import tete from "../components/header.vue";
import pied from "../components/footer.vue";

export default {
  name: "ListEvaluation",
  components: {
    tete,
    pied,
  },
}

</script>

<style>
.fiche{
    margin-top: 100px;
    margin-bottom: 100px;
    border: solid black 1px;
   
}

</style>