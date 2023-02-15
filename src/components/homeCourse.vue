<template>
  <div>
    <!-- popular_courses_start v-if="error" -->
    <div class="popular_courses">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="section_title text-center mb-100">
              <h3>Liste des differents cours</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="course_nav">
              <nav>
                <ul class="nav" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                      >All Courses</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                      >Nos activités</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="./Home.vue"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                      >Autres</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="all_courses">
        <div class="container">
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div class="row">
                <div
                  class="col-xl-4 col-lg-4 col-md-6"
                  v-for="(tutorial, i) in tutorials"
                  :key="i"
                >
                  <div class="single_courses">
                    <div class="thumb" style="height: 320px; width: 350px">
                      <a href="#">
                        <img
                          :src="tutorial.imgURL"
                          width="100%"
                          height="100%"
                        />
                      </a>
                    </div>
                    <div class="courses_info">
                      <h3>
                     <strong style="color:green">{{tutorial.titre}} </strong>
                      </h3>
                      <span>{{ tutorial.description }}</span>
                      <div class="star_prise d-flex justify-content-between">
                        <div class="prise">
                          <span>Publier par:</span>
                          <strong class="active_prise">
                            {{ tutorial.nomduprof }} <br />
                          </strong>
                          <div>
                            <strong v-if="!currentUser">
                              <a href="/login"> Suivre le cours</a>
                            </strong>
                            <strong v-else>
                              <a href="#"> Suivre le cours</a>
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-12">
                  <div class="more_courses text-center">
                    <a href="#" class="boxed_btn_rev">More Courses</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- popular_courses_end-->
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import UserService from "../services/user.service";

export default {
  name: "BoardUser",
  data() {
    return {
      content: "",
      tutorials: [],
      titrerecherche: "",
      page: 1,
      count: 0,
      error: false,
    };
  },

  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },

  },
  mounted() {
    UserService.getUserBoard().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );

    TutorialDataService.getAll()
      .then((response) => {
        this.tutorials = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style >
/* line 1, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses {
  padding-top: 60px;
  padding-bottom: 200px;
}

/* line 4, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses.plus_padding {
  padding-top: 200px;
}

@media (max-width: 767px) {
  /* line 4, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
  .popular_courses.plus_padding {
    padding-bottom: 100px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* line 4, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
  .popular_courses.plus_padding {
    padding-bottom: 100px;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  /* line 4, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
  .popular_courses.plus_padding {
    padding-bottom: 120px;
  }
}

@media (max-width: 767px) {
  /* line 1, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
  .popular_courses {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* line 1, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
  .popular_courses {
    padding-top: 60px;
    padding-bottom: 100px;
  }
}

/* line 24, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses {
  margin-bottom: 50px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
}

/* line 27, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses .thumb {
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

/* line 31, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses .thumb img {
  width: 100%;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

/* line 37, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses .courses_info {
  padding: 30px 30px 15px 30px;
}

/* line 39, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses .courses_info span {
  font-size: 14px;
  color: #4d4d4d;
  font-family: "Poppins", sans-serif;
}

/* line 44, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses .courses_info h3 {
  font-size: 18px;
  color: #1f1f1f;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 28px;
  margin-top: 11px;
  margin-bottom: 30px;
}

@media (max-width: 767px) {
  /* line 52, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
  .popular_courses .single_courses .courses_info h3 br {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* line 52, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
  .popular_courses .single_courses .courses_info h3 br {
    display: none;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  /* line 52, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
  .popular_courses .single_courses .courses_info h3 br {
    display: none;
  }
}

@media large_device {
  /* line 52, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
  .popular_courses .single_courses .courses_info h3 br {
    display: none;
  }
}

/* line 67, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses .courses_info h3 a:hover {
  color: #fdae5c;
}

/* line 72, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses .courses_info .star_prise {
  border-top: 1px solid #e8e8e8;
  padding-top: 16px;
}

/* line 76, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses .courses_info .star_prise .star i {
  font-size: 16px;
  color: #fd8e5e;
}

/* line 81, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses .courses_info .star_prise .star span {
  font-weight: 400;
  font-size: 14px;
  color: #919191;
}

/* line 88, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses .courses_info .star_prise .prise span {
  font-size: 16px;
}

/* line 90, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses .courses_info .star_prise .prise span.offer {
  color: #c7c7c7;
  text-decoration: line-through;
  margin-right: 14px;
}

/* line 95, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses
  .single_courses
  .courses_info
  .star_prise
  .prise
  span.active_prise {
  color: #1f1f1f;
}

/* line 103, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses:hover .thumb {
  overflow: hidden;
}

/* line 105, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses:hover .thumb img {
  width: 100%;
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

/* line 112, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .more_courses {
  margin-top: 30px;
}

/* line 116, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .course_nav .nav {
  -webkit-justify-content: space-between;
  -moz-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
  -ms-flex-pack: space-between;
  margin-bottom: 100px;
  border-bottom: 1px solid #e8e8e8;
}

@media (max-width: 767px) {
  /* line 116, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
  .popular_courses .course_nav .nav {
    margin-bottom: 30px;
  }
}

/* line 124, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .course_nav .nav li a {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding: 30px 0;
  font-size: 16px;
  color: #919191;
}

@media (max-width: 767px) {
  /* line 124, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
  .popular_courses .course_nav .nav li a {
    padding: 10px 0;
    font-size: 15px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* line 124, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
  .popular_courses .course_nav .nav li a {
    font-size: 13px;
  }
}

/* line 137, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .course_nav .nav li a.active {
  color: #1f1f1f;
  position: relative;
  z-index: 9;
}

/* line 142, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .course_nav .nav li a.active::before {
  content: "";
  background: #04d2c8;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  position: absolute;
}
</style>