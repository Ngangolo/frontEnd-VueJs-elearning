//import http from "../http-common";
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/test/';

class TutorialDataService {

  create(data) {
    //console.log("my", data, config)
    return axios.post(API_URL + 'Ajouter', data);
  }
  createQCM(data) {
    //console.log("my", data, config)
    return axios.post(API_URL + 'AjouterQCM', data);
  }
 
  getAll() {
   return axios.get(API_URL + 'getAll');
  }


  deleteAll() {
    return axios.delete(API_URL + 'delAll');
  }


  findByTitle(titre) {
    return axios.get(API_URL  + `findByTitle/${titre}`);
  }

  update(id, data) {
    return axios.put(API_URL  + `update/${id}`, data);
  }
  
  get(id) {
    return axios.get(`http://localhost:8080/api/test/getid/${id}`);
  }

  delete(id) {
    return axios.delete(API_URL  + `delete/${id}`);
  }

  getQcm(matiere) {
    return axios.get(`http://localhost:8080/api/test/getQcm/${matiere}`);
  }

 /*
 
get(id) {
    return axios.get(API_URL + `getid/${id}`);
  }

  getAll() {
    return http.get("/tutorials");
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  } */
}

export default new TutorialDataService();