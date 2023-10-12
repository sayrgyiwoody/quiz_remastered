<template>
    <div v-for="(quiz,index) in quizzes.data" :key="index" class="quiz col-6">
            <div class=" border-bottom mx-auto border-2 pb-2 mb-1 w-75">
                <i class="fa-solid fa-user-astronaut me-2"></i>
                <span class="fw-semibold">{{quiz.user_name}}</span>
            </div>
            <h3 class="my-1">{{quiz.title}}</h3>
            <p class=" mb-1" :class="{'text-muted':!darkModeStatus,'text-light opacity-50':darkModeStatus}">{{limitString(quiz.desc,50)}}</p>
            <button class="btn-play my-2"><i class="fa-solid fa-play me-2"></i>Play now</button>
    </div>
    
    <div class="d-flex justify-content-end me-md-2" :class="{'text-white':darkModeStatus}">
        <div class="">
            <button @click="changePage(currentPage -1)" :disabled="currentPage === 1" class="btn btn-paginate-left border-0" :class="{'text-white':darkModeStatus}">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-6.6 4.6L10.8 12l4.6-4.6L14 6l-6 6l6 6l1.4-1.4Z"/></svg>
            </button>
            Page {{currentPage}}/{{Math.ceil(quizzes.total/quizPerPage)}} 
        <button  @click="changePage(currentPage + 1)" :disabled="currentPage == Math.ceil(quizzes.total/quizPerPage)" class="btn btn-paginate-right border-0" :class="{'text-white':darkModeStatus}">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-12 6l6-6l-6-6l-1.4 1.4l4.6 4.6l-4.6 4.6L10 18Z"/></svg>
        </button>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import axios from 'axios'

export default {
  emits: ['page'],
    props: {
        currentPage : Number,
        darkModeStatus: Boolean,
        quizzes : Object,
    },
    data() {
        return {
          quizPerPage : 6,
        }
    },
    methods: {
        ...mapActions(['setLoadingStatus']),
        changePage(page) {
            this.$emit('page',page);
            // console.log(page);
        },
        // limit description 
        limitString(str, limit) {
            if (str.length > limit) {
                return str.substring(0, limit) + "...";
            } else {
                return str;
            }
        },
        // format date to MM dd
        formatDate(dateString) {
            const options = { month: 'short', day: 'numeric' };
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', options);
        }
    },
    mounted () {
        //
    },
    watch: {
        
    }
}
</script>

<style  scoped>
.quiz {
    width : 49%;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    border-radius: 5px;
    text-align: center;
    margin-bottom: 5px;
  }

  .dark-mode .quiz {
    background-color: #1f2937;
    color: #fff;
  }

  .dark-mode .quiz:hover {
    background-color: #374151;
  }

  .btn-play {
    border: none;
    background-color: #f1f5f9;
    padding: 10px 15px;
    transition: .5s;
    border-radius: 5px;
  }

  .dark-mode .btn-play {
    background-color: #4b5563;
    color: #f1f5f9;
  }

  .dark-mode .btn-play:hover {
    background-color: #1f2937;
    color: #e5e7eb;
  }

  .btn-play:hover {
    background-color: #e5e7eb;
  }

  .fa-play {
    transition: .5s;
  }

  .quiz:hover .fa-play{
    transform: rotate(125deg);
  }

  .btn svg {
    transition: .5s;
    color:#2563eb;
  }

  .btn-paginate-right:hover svg {
    color: #60a5fa;
    transform: translateX(6px);
  }

  .btn-paginate-left:hover svg {
    color: #60a5fa;
    transform: translateX(-6px);
  }
  
</style>