<template>
  <div>
    <div>
      <tete></tete>
    </div>
    <div class="jumbotron">
      <div class="col-md-6 mb-2 m-auto mr-2 ">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recherche par titre"
         
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
           
          >
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
   <course></course>

    <div>
      <pied></pied>
    </div>
    
  </div>
</template>

<script>
import UserService from '../services/user.service';
import tete from '@/components/home_header.vue';
import pied from '../components/footer.vue';
import course from '../components/homeCourse.vue';

export default {
 
 name: 'Home',
 components:{
   tete,
   pied,
   course,
 },
  data() {
    return {
      content: ''
    };
  },
  mounted() {

    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
        console.log(response)
        this.content = response;
      },
      error => {
        console.log(error)
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
}; 
</script>