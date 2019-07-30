import Vue from 'vue'
import VueRouter from 'vue-router'
import AddGradebook from './components/AddGradebook.vue'
import AddProfessor from './components/AddProfessor.vue'
import GradebooksApp from './components/GradebooksApp.vue'
import Login from './components/Login.vue'
import MyGradebook from './components/MyGradebook.vue'
import ProfessorsApp from './components/ProfessorsApp.vue'
import Register from './components/Register.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'gradebooks', component: GradebooksApp },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/teachers', name: 'teachers', component: ProfessorsApp },
    { path: '/my-gradebook', name: 'my-gradebook', component: MyGradebook },
    { path: '/gradebooks/create', name: 'create-gradebook', component: AddGradebook },
    { path: '/professors/create', name: 'create-professor', component: AddProfessor }
  ]
})