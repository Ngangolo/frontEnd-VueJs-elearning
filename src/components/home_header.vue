<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark fixed-top grand">
      <a
        href
        class="navbar-brand logo"
        style="font-size: 18px; font-weight: bold"
        @click.prevent
        ><i>E-BOOK</i></a
      >
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link
            to="/home"
            class="nav-link ml-5"
            style="color: white; font-weight: bold"
          >
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link
            to="/admin"
            class="nav-link"
            style="color: white; font-weight: bold"
          >
            Administrateur</router-link
          >
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link
            to="/mod"
            class="nav-link"
            style="color: white; font-weight: bold"
          >
            Enseignant</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            v-if="showUserBoard"
            to="/user"
            class="nav-link"
            style="color: white; font-weight: bold"
          >
            Etudiant</router-link
          >
        </li>
      </div>

      <div class="navbar-nav">
        <li class="nav-item">
          <router-link
            to="/contact"
            class="nav-link"
            style="color: white; font-weight: bold"
          >
            <i class="fa fa-phone" aria-hidden="true"></i> Contact
          </router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link
            to="/register"
            class="nav-link"
            style="color: white; font-weight: bold"
          >
            <font-awesome-icon icon="user-plus" /> S'inscrire
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/login"
            class="nav-link"
            style="color: white; font-weight: bold"
          >
            <font-awesome-icon icon="sign-in-alt" /> Connexion
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link
            to="/profile"
            class="nav-link"
            style="color: white; font-weight: bold"
          >
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href
            @click.prevent="logOut"
            style="color: white; font-weight: bold"
          >
            <font-awesome-icon icon="sign-out-alt" /> Deconnexion
          </a>
        </li>
      </div>
    </nav>
     <div>
       <img src="https://www.minia.edu.eg/images/eng/eng2018-07-158255339.jpg" class="image" >
     </div>
  </div>
</template> 


 <script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_ADMIN");
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_MODERATOR");
      }

      return false;
    },
    showUserBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_USER");
      }

      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
 
 
<style  >
.grand {
  background-color: rgb(53, 53, 156);
  height: 70px;
  z-index: 100;
  border-bottom: solid 3px black;
}

.mySlides {
  display: none;
}
.image{

  height: 550px;
  width: 100%;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  margin-top: 70px;
  border-bottom: solid black 1px;
}

</style>