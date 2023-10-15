<template>
      <div class="row pe-3" :class="{'dark-mode':darkModeStatus}">
          <div class="input-gp col-8 mb-3" >
              <input @input="searchQuiz" v-model="search_input"  required="" name="" id="search_input" type="text" class="input">
              <label style="left:30px" for="" class="label">Search Quizzes <span class="d-none d-md-inline">Here</span></label>
              <svg v-if="search_input == ''" class="maginfy-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11.5" cy="11.5" r="9.5"/><path stroke-linecap="round" d="M18.5 18.5L22 22"/></g></svg>
              <svg @click="clearSearchInput" v-else class="maginfy-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10ZM8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>

          </div>
          <div @click="allQuizzes()" class="rule-box col-4 mb-3 d-flex justify-content-center align-items-center" >
              <div class="text-center " >
                <svg class="me-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.33 12.91c.09 1.55-.62 3.04-1.89 3.95l.77 1.49c.23.45.26.98.06 1.45c-.19.47-.58.84-1.06 1l-.79.25a1.687 1.687 0 0 1-1.86-.55L14.44 18c-.89-.15-1.73-.53-2.44-1.1c-.5.15-1 .23-1.5.23c-.88 0-1.76-.27-2.5-.79c-.53.16-1.07.23-1.62.22c-.79.01-1.57-.15-2.3-.45a4.105 4.105 0 0 1-2.43-3.61c-.08-.72.04-1.45.35-2.11c-.29-.75-.32-1.57-.07-2.33C2.3 7.11 3 6.32 3.87 5.82c.58-1.69 2.21-2.82 4-2.7c1.6-1.5 4.05-1.66 5.83-.37c.42-.11.86-.17 1.3-.17c1.36-.03 2.65.57 3.5 1.64c2.04.53 3.5 2.35 3.58 4.47c.05 1.11-.25 2.2-.86 3.13c.07.36.11.72.11 1.09m-5-1.41c.57.07 1.02.5 1.02 1.07a1 1 0 0 1-1 1h-.63c-.32.9-.88 1.69-1.62 2.29c.25.09.51.14.77.21c5.13-.07 4.53-3.2 4.53-3.25a2.592 2.592 0 0 0-2.69-2.49a1 1 0 0 1-1-1a1 1 0 0 1 1-1c1.23.03 2.41.49 3.33 1.3c.05-.29.08-.59.08-.89c-.06-1.24-.62-2.32-2.87-2.53c-1.25-2.96-4.4-1.32-4.4-.4c-.03.23.21.72.25.75a1 1 0 0 1 1 1c0 .55-.45 1-1 1c-.53-.02-1.03-.22-1.43-.56c-.48.31-1.03.5-1.6.56c-.57.05-1.04-.35-1.07-.9a.968.968 0 0 1 .88-1.1c.16-.02.94-.14.94-.77c0-.66.25-1.29.68-1.79c-.92-.25-1.91.08-2.91 1.29C6.75 5 6 5.25 5.45 7.2C4.5 7.67 4 8 3.78 9c1.08-.22 2.19-.13 3.22.25c.5.19.78.75.59 1.29c-.19.52-.77.78-1.29.59c-.73-.32-1.55-.34-2.3-.06c-.32.27-.32.83-.32 1.27c0 .74.37 1.43 1 1.83c.53.27 1.12.41 1.71.4c-.15-.26-.28-.53-.39-.81a1.038 1.038 0 0 1 1.96-.68c.4 1.14 1.42 1.92 2.62 2.05c1.37-.07 2.59-.88 3.19-2.13c.23-1.38 1.34-1.5 2.56-1.5m2 7.47l-.62-1.3l-.71.16l1 1.25l.33-.11m-4.65-8.61a1 1 0 0 0-.91-1.03c-.71-.04-1.4.2-1.93.67c-.57.58-.87 1.38-.84 2.19a1 1 0 0 0 1 1c.57 0 1-.45 1-1c0-.27.07-.54.23-.76c.12-.1.27-.15.43-.15c.55.03 1.02-.38 1.02-.92Z"/></svg><span>All Quizzes</span>

              </div>
          </div>
      </div>

    <div v-if="search_input == ''">
      <div v-if="showHomeAlert" class="row justify-content-center">
        <div class="col-12">
          <div class=" p-4 home-alert " :class="{'bg-white text-dark' : !darkModeStatus}" role="alert">
            <div class="d-flex align-items-center h4 ">
                <span class="me-3"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.8-.6 1.8-.2 2.6c.4.7 1 1.2 1.7 1.3V16c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.7 4-4.4 4-7.5c0-5-4-9-9-9m1 13h-2v-1h2v1m1.6-4.5c-.3.4-.6.8-1.1 1.1V12h-3v-1.4c-1.4-.8-1.9-2.7-1.1-4.1s2.7-1.9 4.1-1.1s1.9 2.7 1.1 4.1Z"/></svg></span>
                <span class="fw-semibold txt-primary fw-bold">Welcome to Quiz Plus,</span>
            </div>
            <span  class="text-start">You can play Quiz games for free with your friend or on your own. Enjoy a variety of quizzes and unleash your creativity. Let's start quizzing!</span>
      
            <svg  class="hideHomeSvg" @click="hideHomeAlert" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5"/></g></svg>
          
            <button @click="showRules" class="btn-explore mt-3 d-block">Show Rules
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
          <div class="col-12">
            <div class="d-flex justify-content-between align-items-center">
              <p class="mb-3 fs-5" :class="{'text-light':darkModeStatus,}"><i class="fa-solid fa-bell txt-primary me-2"></i>Latest Quizzes</p>
              <!-- <a href="" class="text-decoration-none" style="cursor: pointer;" :class="{'text-light':darkModeStatus,}">See all<i class="fa-solid fa-angles-right txt-primary ms-2"></i></a> -->
            </div>
            <quizzes-swiper :quizzes="latest_quizzes"></quizzes-swiper>
          </div>
          
        </div>
    
        <div class="row justify-content-center" style="margin-top:4.5rem"> 
          <div class="col-12">
            <div class="d-flex justify-content-between align-items-center">
              <p class="mb-3 fs-5" :class="{'text-light':darkModeStatus,}"><i class="fa-solid fa-arrow-trend-up txt-primary me-2"></i>Most Played Quizzes</p>
              <!-- <a href="" class="text-decoration-none" style="cursor: pointer;" :class="{'text-light':darkModeStatus,}">See all<i class="fa-solid fa-angles-right txt-primary ms-2"></i></a> -->
            </div>
            <quizzes-swiper :quizzes="latest_quizzes"></quizzes-swiper>
          </div>
          
        </div>
    </div>
    <div v-else>
      <div class="row justify-content-center mt-3">
        <div class="col-12">
          <div class="row px-2 px-md-0 g-2 justify-content-between" :class="{'dark-mode':darkModeStatus}">
            <div class="d-flex justify-content-between align-items-center">
                <p class="mb-2 fs-5" :class="{'text-light':darkModeStatus,}"><i class="fa-solid fa-magnifying-glass txt-primary me-2"></i>Searched Quizzes : <span class="text-success fw-semibold">{{searched_quiz.total}}</span></p>
              </div>
              <div v-if="searched_quiz.total == 0" class="fw-semibold" :class="{'text-white':darkModeStatus}">No Quiz Found for <span class="text-primary fw-bold">{{search_input}}</span> </div>
              <quiz-list v-else @page="changePage" :quizzes="searched_quiz"></quiz-list>
        </div>
        </div>
      </div>
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuizzesSwiper from '../components/QuizzesSwiper.vue'
import QuizList from '../components/QuizList.vue'
import axios from 'axios';
import Swal from 'sweetalert2';
import { mapActions , mapGetters } from 'vuex';


export default defineComponent({
  props: {
    
  },
  name: 'HomeView',
  components: {
    QuizzesSwiper,
    QuizList,
  },
  computed: {
    ...mapGetters(["darkModeStatus"]),
  },
  data() {
    return {
      search_input: '',
      showHomeAlert : true,
      latest_quizzes : {},
      popular_quizzes : {},
      searched_quiz : {},
      currentPage : 1,
    }
  },
  methods: {
    ...mapActions(['setLoadingStatus']),
    clearSearchInput() {
      this.search_input = '';
    },
    hideHomeAlert(){
      this.showHomeAlert = false;
    },
    // get latest_quizzes from api 
    getLatestQuizzes(){
      this.setLoadingStatus(true);
      axios.get('http://127.0.0.1:8000/api/quiz/latest')
      .then((response) => {
        if(response.data.status == true){
          this.setLoadingStatus(false);
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
        "If you get it right on your first try, you get a mark. If you have a problem with the answer, click <span class='text-primary'>Need Answer?</span> However, requesting answers does not earn marks for that quiz.",
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
    },
    // get searched quizzes
    searchQuiz(){
      this.setLoadingStatus(true);
        axios.post(`http://127.0.0.1:8000/api/search?page=${this.currentPage}`,{
            'searchKey' : this.search_input
        }).then((response) => {
            this.searched_quiz = response.data.searched_quiz;
            this.setLoadingStatus(false);
        }).catch(error => console.log(error));
    },
    // direct to all quizzes page
    allQuizzes(){
      this.$router.push({
        name : 'allQuiz',
      })
    },
    //get page number from child component
    changePage(page = 1){
      this.currentPage = page;
      this.searchQuiz();
    }
  },
  mounted () {
    this.getLatestQuizzes();
  },
});
</script>
