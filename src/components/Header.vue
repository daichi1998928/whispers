<template>
    <header>
        <router-link to="/"> 
            whisp
        </router-link>
        <div v-if="currentUser" class="btns">
          
          <router-link :to="'/user/' + currentUser.uid">
             <p> Mypage </p> 
          </router-link>
         
          <button @click="signOut">
            sign_out
          </button>
        </div>
        <div v-else class="btns">
          <button @click="signIn">
            sign_in
          </button>
        </div>
    </header>
</template>
<script>
import firebase from "firebase"
import { auth } from "../main"
import { db } from "../main"
export default {

  data(){
    return{
      currentUser: {}
    }
  },
  created(){
    auth.onAuthStateChanged(user=>{
      this.currentUser = user
    })
  },
  methods:{
    signIn (){
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider)
      .then((result) =>{
        this.$router.push('user/'+result.user.uid)
        alert("hello," + result.user.displayName + "!")

        this.createUser(result.user)
      })
    },
    createUser (user){
      db.collection('users').doc(user.uid).set({
       'name': user.displayName,
       'photoURL': user.photoURL,
       "email": user.email
      },{merge: true})
    },
    signOut(){
      if(window.confirm('Are You Sure to Sign Out?')){
        auth.signOut()
        .then(()=>{
          alert('You Safely Signed Out.')
          this.$router.push('/'),
          location.reload()
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
header
  position fixed
  top 0
  width 100%
  text-align center
  padding 10px
  h1
    width fit-content
    margin 0 auto
    font-size 1.4rem
  .btns
    position absolute
    top 10px
    right 30px
    cursor pointer
    img
      width 100%
    button
      width 100px
</style>
