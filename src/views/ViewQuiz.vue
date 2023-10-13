<template>
    <div class="row" :class="{'dark-mode':darkModeStatus}">
        <div class="col-12">
            <div class="quiz-detail">
                <h2 class="fw-bold">{{quiz.title}}</h2>
                <div class="fw-semibold">
                    <img width="50" :src="'https://ui-avatars.com/api/?name=' + quiz.user_name + '&background=0D8ABC&color=fff'" alt="" class="rounded-circle">
                    <span class="ms-2">{{quiz.user_name}}</span>
                |   <span><span class="fw-bold">{{question_count}}</span> quizzes</span>
                </div>
                <div class="desc-body">
                    {{quiz.desc}}
                </div>
                <div class="mt-4">
                    <button @click="directHome" class="btn-back me-3 rounded fw-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m-3.29 13.59L14.29 18l-6-6l6-6l1.42 1.41L11.12 12l4.59 4.59Z"/></svg>
                        Back
                    </button>
                    <button class="btn-play rounded fw-semibold">
                        Play
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m-9 13V8l5 4"/></svg>
                    </button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { mapGetters , mapActions } from 'vuex'
import axios from 'axios'


export default {
    computed: {
        ...mapGetters(["darkModeStatus"]),
    },
    data() {
        return {
            quiz: {},
            question_count : 0,
        }
    },
    methods: {
        ...mapActions(["setLoadingStatus"]),
        directHome() {
            this.$router.push({
                name : "home"
            })
        },
        getDetail(){
            this.setLoadingStatus(true);
            let id = this.$route.params.id;
            axios.get(`http://127.0.0.1:8000/api/quiz/${id}`)
            .then((response) => {
                this.quiz = response.data.quiz;
                this.question_count = response.data.question_count;
                this.setLoadingStatus(false);
            }).catch(error => console.log(error));
            
            
        }
    },
    mounted () {
        this.getDetail();
    },
}
</script>

<style>
    .quiz-detail {
        padding: 20px;
        color: #222222;
        background-color: #ffffff;
        border-radius: 5px;
        transition: .5s;
    }

 

    .dark-mode .quiz-detail {
        background-color: #1f2937;
        color : #f8fafc;
    }

    

    .desc-body {
        padding: 20px;
        background-color: #f1f5f9;
        margin-top: 20px;
        border-radius: 10px;
    }

    .dark-mode .desc-body {
        background-color: #333e4f;
    }

    button {
        padding: 10px 15px;
        border: none;
    }

    button:hover {
        background-color: #f8fafc ;
    }

    button svg {
        color : #2563eb;
        transition: .5s;
    }

    .dark-mode button {
        background-color: #2563eb;
        color: #fff;
    }

    .dark-mode button svg {
        color :#fff;
    }


    .btn-back:hover svg {
        transform: translateX(-6px);
    }

    .btn-play:hover svg {
        transform: translateX(6px);
    }

</style>