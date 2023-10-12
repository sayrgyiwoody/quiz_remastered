<template>
  <div :class="{'dark-mode':darkModeStatus}" class="row justify-content-center">
    <div class="col-md-6" style="margin-top: 100px;">
      <div class="row pe-3">
          <div class="input-gp col-8 mb-3" >
              <input v-model="search_input"  required="" name="" id="search_input" type="text" class="input">
              <label style="left:30px" for="" class="label">Search Quizzes Here</label>
              <svg v-if="search_input == ''" class="maginfy-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11.5" cy="11.5" r="9.5"/><path stroke-linecap="round" d="M18.5 18.5L22 22"/></g></svg>
              <svg @click="clearSearchInput" v-else class="maginfy-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10ZM8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>

          </div>
          <div @click="showRules" class="rule-box col-4 mb-3 d-flex justify-content-center align-items-center" >
              <div class="text-center " >
                  <span><i class="fa-solid fa-scale-balanced me-2"></i><span class="d-none d-md-inline">Quiz</span> Rules</span>

              </div>
          </div>
      </div>
    </div>
  </div>
  <div v-if="showHomeAlert" class="row justify-content-center">
    <div class="col-md-6">
      <div v-if="search_input===''" class=" p-4 home-alert " :class="{'bg-white text-dark' : !darkModeStatus}" role="alert">
        <div class="d-flex align-items-center h4 ">
            <span class="me-3"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.8-.6 1.8-.2 2.6c.4.7 1 1.2 1.7 1.3V16c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.7 4-4.4 4-7.5c0-5-4-9-9-9m1 13h-2v-1h2v1m1.6-4.5c-.3.4-.6.8-1.1 1.1V12h-3v-1.4c-1.4-.8-1.9-2.7-1.1-4.1s2.7-1.9 4.1-1.1s1.9 2.7 1.1 4.1Z"/></svg></span>
            <span class="fw-semibold txt-primary fw-bold">Welcome to Quiz Plus,</span>
        </div>
        <span  class="text-start">You can play Quiz games for free with your friend or on your own. Enjoy a variety of quizzes and unleash your creativity. Let's start quizzing!</span>
  
        <svg  class="hideHomeSvg" @click="hideHomeAlert" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5"/></g></svg>
      
        <button class="btn-explore mt-3 d-block">Create quizzes
          <svg class="ms-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M12.2533 8.46667C9.53332 11.52 7.66666 15.9067 7.49332 16.32L2.66666 14.2533L8.06666 8.85333C8.69332 8.22667 9.59999 7.94667 10.48 8.12L12.2533 8.46667ZM14.8933 22.6667C14.8933 22.6667 19.88 20.6 22.7467 17.7333C29.9467 10.5333 28.7467 4.90667 28.36 3.64C27.0933 3.24 21.4667 2.05333 14.2667 9.25333C11.4 12.12 9.33332 17.1067 9.33332 17.1067L14.8933 22.6667ZM23.5333 19.7467C20.48 22.4667 16.0933 24.3333 15.68 24.5067L17.7467 29.3333L23.1467 23.9333C23.7733 23.3067 24.0533 22.4 23.88 21.52L23.5333 19.7467ZM12 24C12 25.1067 11.5467 26.1067 10.8267 26.8267C9.25332 28.4 2.66666 29.3333 2.66666 29.3333C2.66666 29.3333 3.59999 22.7467 5.17332 21.1733C5.73172 20.612 6.44432 20.2293 7.22065 20.0738C7.99699 19.9182 8.80202 19.9969 9.53355 20.2998C10.2651 20.6027 10.8901 21.1162 11.3292 21.775C11.7684 22.4338 12.0019 23.2082 12 24ZM17.3333 12C17.3333 10.5333 18.5333 9.33333 20 9.33333C21.4667 9.33333 22.6667 10.5333 22.6667 12C22.6667 13.4667 21.4667 14.6667 20 14.6667C18.5333 14.6667 17.3333 13.4667 17.3333 12Z"
              fill="white" />
          </svg>
        </button>
      </div>
      
    </div>
    </div>

    <div class="row justify-content-center mt-4">
      <div class="col-md-6">
        <div class="d-flex justify-content-between align-items-center">
          <p class="mb-3 fs-5" :class="{'text-light':darkModeStatus,}"><i class="fa-solid fa-bell txt-primary me-2"></i>Latest Quizzes</p>
          <!-- <a href="" class="text-decoration-none" style="cursor: pointer;" :class="{'text-light':darkModeStatus,}">See all<i class="fa-solid fa-angles-right txt-primary ms-2"></i></a> -->
        </div>
        <quizzes-swiper :quizzes="latest_quizzes" :darkModeStatus="darkModeStatus"></quizzes-swiper>
      </div>
      
    </div>

    <div class="row justify-content-center" style="margin-top:4.5rem"> 
      <div class="col-md-6">
        <div class="d-flex justify-content-between align-items-center">
          <p class="mb-3 fs-5" :class="{'text-light':darkModeStatus,}"><i class="fa-solid fa-arrow-trend-up txt-primary me-2"></i>Most Played Quizzes</p>
          <!-- <a href="" class="text-decoration-none" style="cursor: pointer;" :class="{'text-light':darkModeStatus,}">See all<i class="fa-solid fa-angles-right txt-primary ms-2"></i></a> -->
        </div>
        <quizzes-swiper :quizzes="latest_quizzes" :darkModeStatus="darkModeStatus"></quizzes-swiper>
      </div>
      
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuizzesSwiper from '../components/QuizzesSwiper.vue'
import axios from 'axios';
import Swal from 'sweetalert2';


export default defineComponent({
  props: {
    darkModeStatus: Boolean,
  },
  name: 'HomeView',
  components: {
    QuizzesSwiper,
  },
  data() {
    return {
      search_input: '',
      showHomeAlert : true,
      latest_quizzes : {},
      popular_quizzes : {},
    }
  },
  methods: {
    clearSearchInput() {
      this.search_input = '';
    },
    hideHomeAlert(){
      this.showHomeAlert = false;
    },
    // get latest_quizzes from api 
    getQuizzes(){
      this.$emit('loadingStatus', true);
      axios.get('http://127.0.0.1:8000/api/quiz/latest')
      .then((response) => {
        if(response.data.status == true){
          this.$emit('loadingStatus', false);
          this.latest_quizzes = response.data.quizzes.data;
        }
      })
      .catch(error => console.log(error));
    },
    showRules(){
      Swal.fire({
      title: '<strong>Quiz Rules</strong>',
      icon: 'info',
      html:
        "If you get it right on your first try, you get a mark. If you have a problem with an answer or don't know an answer, click Need Answer?. However, requesting answers does not earn marks for this quiz.",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    })
    }
  },
  mounted () {
    this.getQuizzes();
  },
});
</script>
