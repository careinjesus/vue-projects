import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/views/HomeView.vue'
import ValueView from '../components/views/ValueView.vue'
import ServiceView from '../components/views/ServiceView.vue'
/*
import AboutView from '../views/AboutView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import ContactView from '../views/ContactView.vue'
import UserProfileView from '../views/UserProfileView.vue'
import UserPostsView from '../views/UserPostsView.vue'
*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'value',
      component: ValueView
    },
    {
      path: '/',
      name: 'service',
      component: ServiceView
    },

    /*
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyView
    },
    {
      path: "/user/:userId",
      name: "user",
      redirect : { name: "user-profile" },
      children: [
        {
          path: "profile",
          name: "user-profile",
          component: UserProfileView
        },

      ]
    }
    */
  ]
})

export default router

/* Original

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
*/


