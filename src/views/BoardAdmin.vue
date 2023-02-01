<template>
 <div>
       <tete></tete>
       <div class="container">
    <header class="jumbotron admin">
      <h3>Page Administration</h3>
    </header>

  </div>
   <pied></pied>
 </div>
 
</template>

<script>

import UserService from '../services/user.service';
import tete from '../components/header.vue';
import pied from '../components/footer.vue';

export default {
 
 name: 'BoardAdmin',
 components:{
   tete,
   pied,
 },
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getAdminBoard().then(
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
}
</script>
<style>
.admin{
  margin-top: 100px;
  margin-bottom:300px ;
}

</style>