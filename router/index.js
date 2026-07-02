import { createRouter, createWebHistory } from 'vue-router'
import Splash from '../view/Splash.vue'
import Login from '../view/Login.vue'
import Signup from '../view/Signup.vue'
import Dashboard from '../view/Dashboard.vue'
import AddMedicine from '../view/AddMedicine.vue'
import Schedule from '../view/Schedule.vue'
import Settings from '../view/Settings.vue'
import Profile from '../view/Profile.vue'
import EditProfile from '../view/EditProfile.vue'

const routes = [
  {
    path: '/',
    component: Splash
  },
  {
    path: '/login',
    component: Login
  },
  {
  path: '/signup',
  component: Signup
},
{
  path: '/dashboard',
  component: Dashboard
},
{
  path: '/add-medicine',
  component: AddMedicine
},
{
  path: '/schedule',
  component: Schedule
},

{
  path: '/profile',
  component: Profile
},
{
  path: '/settings',
  component: Settings
},
{
  path: '/edit-profile',
  component: EditProfile
}
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router