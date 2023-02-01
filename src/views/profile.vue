<template>
  <div>
    <tete></tete>
    <div v-if="Etudiant" class="container profil">
      <header class="jumbotron ">
        <div>
          <h3>
          <strong 
            ><i class="fas fa-book-open"></i> BIENVENUE
            {{ currentUser.username }}
          </strong>
        </h3>
        <router-link to="/ListEvaluation">
          <button class="btn btn-success eval">Faire une Evaluation</button>
        </router-link>
        </div>
      </header>
    
      <h3> Informations intranet</h3> <br>
    <h5 style="color:red">NEWS</h5><br>
       <tbody>
          
            <tr>
                <h4>Avis aux Etudiants</h4>
                <p style="color:grey;font-size:14px;text-align:justify">
                Après la lecture du cours vous pouvez faire l'evaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </tr> <br>
             <tr>
                <h4>Avis aux Etudiants</h4>
                <p style="color:grey;font-size:14px;text-align:justify">
                Après la lecture du cours vous pouvez faire l'evaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </tr><br>
             <tr>
                <h4>Avis aux Etudiants</h4>
                <p style="color:grey;font-size:14px;text-align:justify">
                Après la lecture du cours vous pouvez faire l'evaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </tr> <br>
       </tbody>
    </div>
   <div v-if="Prof" class="container profil">
      <header class="jumbotron ">
        <div>
          <h3>
          <strong 
            ><i class="fas fa-graduation-cap"></i> BIENVENUE
            {{ currentUser.username }}
          </strong>
        </h3>
        </div>
       
      </header>
    <h3> Informations intranet</h3> <br>
    <h5 style="color:red">NEWS</h5><br>
       <tbody>
          
            <tr>
                <h4>Avis aux professeurs</h4>
                <p style="color:grey;font-size:14px;text-align:justify">
                Après la lecture du cours vous pouvez faire l'evaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </tr> <br>
             <tr>
                <h4>Avis aux professeurs</h4>
                <p style="color:grey;font-size:14px;text-align:justify">
                Après la lecture du cours vous pouvez faire l'evaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </tr><br>
             <tr>
                <h4>Avis aux professeurs</h4>
                <p style="color:grey;font-size:14px;text-align:justify">
                Après la lecture du cours vous pouvez faire l'evaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </tr> <br>
       </tbody>
    </div>
       <div v-if="Admin" class="container profil">
      <header class="jumbotron ">
        <div>
          <h3>
          <strong 
            ><i class="fas fa-graduation-cap"></i>BIENVENUE
            {{ currentUser.username }}
          </strong>
        </h3>
        </div>
       
      </header>
      <h3>Intranet Admin</h3><br>
       <h5 style="color:red">NEWS</h5><br>
      <tbody>
            <tr>
                <h4>Avis aux professeurs</h4>
                <p style="color:grey;font-size:14px;text-align:justify">
                Après la lecture du cours vous pouvez faire l'evaluation proposer par l'enseignant responsable
                pour une bonne compréhension du cours.
                </p>
            </tr>
      </tbody>
    </div>

    <pied></pied>
  </div>
</template>

<script>
import tete from "../components/header.vue";
import pied from "@/components/footer.vue";

export default {
  name: "Profile",
  components: {
    tete,
    pied,
  },
   computed: {
    currentUser() {
      return this.$store.state.auth.user;
      
    },
    Admin() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
    Prof() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    },
      Etudiant() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_USER');
      }

      return false;
    }
  },

  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>

<style>
.profil {
  margin-top: 100px;
  margin-bottom: 350px;
}
.eval{
  margin-left: 890px;
  margin-top: 0px;
}
</style>