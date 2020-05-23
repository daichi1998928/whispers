import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)

import { firestorePlugin } from 'vuefire'          
import firebase from 'firebase'     
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({                
  apiKey: "AIzaSyCbXfNRjrGsjtVK0-82xyotakMvEJboQEQ",
  authDomain: "vue-twitter-9045e.firebaseapp.com",
  databaseURL: "https://vue-twitter-9045e.firebaseio.com",
  projectId: "vue-twitter-9045e",
  storageBucket: "vue-twitter-9045e.appspot.com",
  messagingSenderId: "497608437535",
  appId: "1:497608437535:web:44c8685b50c69447eb8a2a"
})

export const db = firebase.firestore()
export const auth = firebase.auth()

Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
