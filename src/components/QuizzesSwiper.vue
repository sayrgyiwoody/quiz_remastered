<template>

    <!--  quizzes start -->
    
    <swiper
      :slidesPerView="'auto'"
      :spaceBetween="30"
      
      :modules="modules"
      class="mySwiper" :class="{'dark-mode' :darkModeStatus}"
    >
        

        <swiper-slide class="swiper-quiz " v-for="(quiz,index) in quizzes" :key="index">
            <div class="swiper-slide d-flex flex-column">
                <div class=" border-bottom border-2 pb-2 mb-1 w-75">
                    <i class="fa-solid fa-user-astronaut me-2"></i>
                    <span class="fw-semibold">{{quiz.user_name}}</span>
            |       <span class="fw-semibold">{{formatDate(quiz.created_at)}}</span>
                </div>
                <h3 class="my-1">{{quiz.title}}</h3>
                <p class=" mb-1" :class="{'text-muted':!darkModeStatus,'text-light opacity-50':darkModeStatus}">{{limitString(quiz.desc,130)}}</p>
                <a @click="viewQuiz(quiz.id)" class="btn btn-play my-2"><i class="fa-solid fa-play me-2"></i>Play now</a>
            </div>
        </swiper-slide>
      
    </swiper>
    <!--  quizzes end  -->
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
  
  
    // import required modules
    import { Pagination } from 'swiper/modules';
    import { mapGetters } from 'vuex'

    export default {
        props: {
            quizzes : Object,
        },
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Pagination],
        };
      },
      computed: {
        ...mapGetters(["darkModeStatus"]),
      },
      data() {
        return {
            
        }
      },
      methods: {
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
        },
        // view quiz 
        viewQuiz(id){
          this.$router.push({
            name :'viewQuiz',
            params : {
              id : id,
            }
            
          })
        }
      },
    };
  </script>
  

  <style  scoped>
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide {
    width: 80%;
    transition: .5s;
    cursor: pointer;
  }

  .swiper-quiz {
    background-color: #ffffff;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    border-radius: 5px;
  }

  .dark-mode .swiper-quiz {
    background-color: #1f2937;
    color: #fff;
  }

  .dark-mode .swiper-quiz:hover {
    background-color: #374151;
  }

  .btn-play {
    background-color: #f1f5f9;
    padding: 15px 20px;
    transition: .5s;
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

  .swiper-quiz:hover .fa-play{
    transform: rotate(125deg);
  }

  </style>