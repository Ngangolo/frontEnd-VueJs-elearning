<template>
 <div>
      <tete></tete><br>
      <div class="jumbotron ml-5 mr-5 prof">
        <div >
           <h4><i class="fas fa-graduation-cap"></i>BONJOUR {{currentUser.username}}</h4><br>
           <router-link to="/AjouterQcm">
              <button class="btn btn-success bouton"> Ajouter un QCM</button>
           </router-link>
          <h5>Page des enseignants du site ici vous pouvez exercer votre fonction en ajoutant des cours </h5>
          <hr>
          <div class="row">
          <Add class="col-md-6 add"/>
          <List class="col-md-6 list"/>
          </div> 
        </div>
      </div>
       <pied></pied>
 </div>
</template>

<script>
import UserService from '../services/user.service';
import tete from '../components/header.vue';
import pied from '../components/footer.vue';
import Add from '../components/AddTutorial.vue';
import List from '../components/TutorialsList.vue';
//import Edit from '../components/Tutorial.vue';


export default {
  name: 'BoardModerator',
  components:{
   tete,
   pied,
   Add,
   List,
  // Edit
 },
  data() {
    return {
      content: ''
    };
  },
   computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },

  mounted() {
    UserService.getModeratorBoard().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>

<style  >

.prof{
    
   margin-top: 100px;
   border: solid gray 1px;
    }
  .list{
    margin-top: 0px;
  }
  .add{
  
     border-right: solid black 2px;
     margin-top: 0px;
  }

  .bouton{
    margin-left: 1100px;
  
    
  }

</style>