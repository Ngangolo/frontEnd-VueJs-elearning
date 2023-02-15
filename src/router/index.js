import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue';
import Register from '../views/register.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: Register
  },
 
  {
    path: '/home',
    component: Home
  },
 
  {
    path: '/profile',
    name: 'profile',
    // lazy-loaded
    component: () => import('../views/profile.vue')
  },
  
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/BoardAdmin.vue')
  },
  {
    path: '/mod',
    name: 'mod',
    component: () => import('../views/BoardModerator.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/BoardUser.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue')
  },
  {
    path: '/Tutorial/:id',
    name: 'Tutorial',
    component: () => import('../components/Tutorial.vue')
  },
  {
    path: '/AddTutorial',
    name: 'AddTutorial',
    component: () => import('../components/AddTutorial.vue')
  },
  {
    path: '/TutorialsList',
    name: 'TutorialsList',
    component: () => import('../components/TutorialsList.vue')
  },

  {
    path: '/AjouterQcm',
    name: 'AjouterQcm',
    component: () => import('../components/AjouterQcm.vue')
  },

  {
    path: '/pageQcm/:matiere',
    name: 'pageQcm',
    component: () => import('../components/pageQcm.vue')
  },

  {
    path: '/ListEvaluation',
    name: 'ListEvaluation',
    component: () => import('../components/ListEvaluation.vue')
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home', '/contact'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});
export default router
