<template>
  <div class="container-fluid" :class="darkModeStatus ?'bg-image-dark':'bg-image-light'" style="min-height: 100vh;padding-bottom: 80px;">
    <div class="row">
      <nav class="navbar fixed-top" :class="darkModeStatus ? 'card-body-dark border-bottom':'bg-white shdw border-bottom border-2 border-primary'">
        <div class="container">
          <a class="navbar-brand ms-2" @click="directHome()">
            <img src="../public/images/logo.png" alt="logo" width="50">
            <span class="me-auto fw-bold" style="color:#3e79d5;">QUIZ PLUS</span>
          </a>
          
            <button @click="toggleDarkMode" class="btn rounded-circle border border-2 fs-5" :class="darkModeStatus ? 'btn-outline-light' :'text-dark '"><i :class="darkModeStatus ? 'bi bi-moon-stars-fill ':'bi bi-sun-fill'"></i></button>
        </div>
      </nav>
      
    </div>
    
   
    
    <div class="row justify-content-center" style="margin-top:100px;">
      <div class="col-md-6">
        <router-view  :darkModeStatus="darkModeStatus"></router-view>
      </div>
    </div>
  </div>
  <div v-if="$store.state.loadingStatus" class="loader-container" :class="darkModeStatus?'loader-container-dark':''">
    <div class="w-100 d-flex justify-content-center align-items-center " style="height:100vh">
      <div class="loader" >
        <span class="loader-text">loading</span>
          <span class="load"></span>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}



</style>

<script>
import HomeView from '@/views/HomeView'
import AllQuiz from '@/views/AllQuiz' 
import { mapGetters , mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(["darkModeStatus"]),
  },
  components: {
    
  },
  data() {
    return {
      loadingStatus : false,
    }
  },
  methods: {
    ...mapActions(["setDarkMode"]),
    checkDarkMode(){
      const localDarkMode = localStorage.getItem('darkMode');
      if(localDarkMode != null){
        if(JSON.parse(localDarkMode) == true){
        this.setDarkMode(true);
      }
      }
      
    },
    // toggle dark mode
    toggleDarkMode() {
            this.setDarkMode(!(this.darkModeStatus));
            localStorage.setItem('darkMode', JSON.stringify(this.darkModeStatus));
    },
    directHome(){
      this.$router.push({
        name : 'home',
      })
    }
  },
  mounted () {
    this.checkDarkMode();
  },
}
</script>
