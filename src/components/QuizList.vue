<template>
    <div v-for="(quiz,index) in quizzes" :key="index" class="quiz col-6">
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
            <button @click="changePage(currentPage -1)" :disabled="currentPage === 1" class="btn border-0" :class="{'text-white':darkModeStatus}"><i class="bi bi-arrow-left-square fs-3"></i></button>
            Page 1/4
        <button  @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="btn border-0" :class="{'text-white':darkModeStatus}"><i class="bi bi-arrow-right-square fs-3"></i></button>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import axios from 'axios'

export default {
    props: {
        darkModeStatus: Boolean,
        quizzes : Array,
    },
    data() {
        return {
            currentPage : 1,
            itemsPerPage : 4,
        }
    },
    methods: {
        ...mapActions(['setLoadingStatus']),
        changePage() {
            //
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
    transform: scale(1.15);
  }
</style>