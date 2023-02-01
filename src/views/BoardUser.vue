<template>
 <div>
    <tete></tete><br>
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
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                        aria-controls="home" aria-selected="true">All Courses</a>
                                </li>
                                <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                        aria-controls="home" aria-selected="true">Nos activités</a>
                                </li>
                                <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="./Home.vue" role="tab"
                                        aria-controls="home" aria-selected="true">Autres</a>
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
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row" >
                                    <div class="col-xl-4 col-lg-4 col-md-6" v-for="(tutorial,i) in tutorials" :key="i">
                                        <div class="single_courses">
                                            <div class="thumb" style="height:320px; width:350px;">                       
                                                    <img  :src="tutorial.imgURL" width="100%" height="100%">
                                            </div>
                                            <div class="courses_info">
                                                <h3><a> 
                                               <strong style="color:green">{{tutorial.titre}} </strong></a></h3>
                                                <span>{{tutorial.description}}</span>
                                                <div class="star_prise d-flex justify-content-between">
                                                    <div class="prise">
                                                        <span >Publier par:</span>
                                                        <strong class="active_prise">
                                                          {{tutorial.nomduprof}} <br>
                                                        </strong>
                                                        <strong>
                                                          <a :href="tutorial.contenu" target="_blank" >telecharger cours</a>
                                                        </strong>
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
      <pied></pied>
    <!-- popular_courses_end-->
 </div>
 
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import UserService from '../services/user.service';
import tete from '../components/header.vue';
import pied from '../components/footer.vue';

export default {
  name: 'BoardUser',
  components:{
   tete,
   pied,
 },
  data() {
    return {
      content: '',
      tutorials: [],
          titrerecherche:"",
          page:1,
          count:0,
          error:false
      
    }
  },
  computed : {
    
},
  mounted() {
    UserService.getUserBoard().then(
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
 
    TutorialDataService.getAll()
        .then(response => {
          this.tutorials = response.data;
        /*  for (let i = 0 ; i < this.tutorials.length; i++){
            if(this.tutorials[i].image !== undefined)
            {  console.log(JSON.stringify(this.tutorials[i]))
              var arrayBufferView = new Uint8Array( this.tutorials[i].image.data );
    var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL( blob );
              this.tutorials[i].image = "data:image/png;base64," + Buffer.from(this.tutorials[i].image.data).toString('base64')
              //'data:image/png;base64,' + toBase64(this.tutorials[i].image.data)
              console.log(imageUrl, window.URL || window.webkitURL );
            }
          }*/
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  }
};
/*
function toBase64(arr) {
  var data = uri.split(',')[1]; 
var buf = Buffer.from(data).toString('base64');
   //arr = new Uint8Array(arr) if it's an ArrayBuffer
   return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
   );
}
*/
//$('#two').prepend($('<img>',{id:'theImg2',src:`data:image/png;base64,${toBase64( selected[0].image2.data)}`}))

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
  color: #4D4D4D;
  font-family: "Poppins", sans-serif;
}

/* line 44, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses .courses_info h3 {
  font-size: 18px;
  color: #1F1F1F;
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
  color: #FDAE5C;
}

/* line 72, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses .courses_info .star_prise {
  border-top: 1px solid #E8E8E8;
  padding-top: 16px;
}

/* line 76, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses .courses_info .star_prise .star i {
  font-size: 16px;
  color: #FD8E5E;
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
  color: #C7C7C7;
  text-decoration: line-through;
  margin-right: 14px;
}

/* line 95, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .single_courses .courses_info .star_prise .prise span.active_prise {
  color: #1F1F1F;
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
  border-bottom: 1px solid #E8E8E8;
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
  color: #1F1F1F;
  position: relative;
  z-index: 9;
}

/* line 142, C:/Users/SPN Graphics/Desktop/CL September/Edu mark/207 Education/HTML/scss/_popular_courses.scss */
.popular_courses .course_nav .nav li a.active::before {
  content: "";
  background: #04D2C8;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  position: absolute;
}

</style>