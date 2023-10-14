import Swal from 'sweetalert2'
import axios from 'axios';
import { mapActions , mapGetters } from 'vuex'
export default {
    data() {
        return {
            currentQuiz : 1,
            selectedChoice : '',
            answer : '',
            questionText : '',
            answerStatus : null,
            multipleText : '',
            questionList : [],
            quiz : {},
            loading :false,
            marks : 0,
            try : 1,
            answerMessage : '',
            nextQuiz : 'Next Quiz',
        }
    },
    computed: {
        ...mapGetters(["darkModeStatus"]),
        paginatedQuizzes() {
            return this.questionList.slice(this.currentQuiz-1,this.currentQuiz);
        },
    },
    methods: {
        ...mapActions(["setLoadingStatus"]),
        goBack(){
            history.back();
        },
        directHome() {
            this.$router.push({
                name : "home"
            })
        },
        getQuestionList(){
            this.setLoadingStatus(true);
            let id = this.$route.params.id;
            axios.get(`http://127.0.0.1:8000/api/questionList/${id}`)
            .then((response) => {
                this.questionList = response.data.question_list;
                this.quiz = response.data.quiz;
                this.setLoadingStatus(false);
            }).catch(error => console.log(error));
        },
        // change next question 
        changeQuiz(quizNumber) {

          this.try = 1;
          this.answerStatus = null;
          this.currentQuiz = quizNumber;
          this.selectedChoice = '';
          this.answer = '';

          if(quizNumber === (this.questionList.length + 1)) {
              const marks = Math.floor(this.marks / (this.questionList.length/100));
              Swal.fire({
                  title: 'Congratulations',
                  html: `<b class="text-primary fs-4">You got ${marks}/100 marks.</b>`,
                  imageUrl: '/images/congratulation.gif',
                  imageAlt: 'Congratulation',
                  confirmButtonText: 'Back to Home',
              }).then((result)=> {
                  if(result.isConfirmed) {
                      this.marks = 0;
                      this.currentQuiz = 1;
                  }
                  this.directHome();
              });
          }

        },
        checkAnswer(question_id){
            this.answerMessage = null;
            if(this.answer !== '') {
                this.loading = true;
            }else if (this.answer === '' && this.selectedChoice) {
                this.loading = true;
            }
            if((this.selectedChoice!=='' || this.answer !== '') && this.answerStatus !== true) {
                axios.post('http://127.0.0.1:8000/api/checkAnswer',{quiz_id : this.$route.params.id , question_id : question_id,user_answer:this.answer,user_choice:this.selectedChoice})
                .then(response=>{
                    this.loading = false;
                    this.answerStatus=response.data;
                    if(this.answerStatus === true) {
                        if(this.try ==1) {
                            this.marks++;
                            this.try--;
                        }
                        this.nextQuiz = (this.currentQuiz === this.questionList.length)? 'View Your Marks' : 'Next Quiz';
                        if(this.currentQuiz === this.questionList.length){
                            this.answerMessage = "<i class='fa-solid fa-thumbs-up me-2'></i>Congratulations on finishing all the quizzes! Now it's time to check your marks. Good luck, and remember to be proud of your hard work.";
                        }else {
                            this.answerMessage = '<i class="fa-solid fa-thumbs-up me-2"></i>Your answer is correct and now you can move to the next quiz.';
                        }
                    }else{
                        this.answerMessage = '<i class="fa-solid fa-thumbs-down me-2"></i>Your answer is incorrect, try again for the correct answer.';
                        if(this.try === 1) {
                            this.try--;
                        }
                    }
                }).catch(error=>{
                    this.loading = false;
                    console.log('error')
                })

            }
        },
        showAnswer(question_id) {
            Swal.fire({
                title: 'Need answer?',
                text: "You won't get any marks if you request for the answer,",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                cancelButtonText : "No, I'll try myself"
              }).then((result) => {
                if (result.isConfirmed) {
                    this.try--;
                    axios.post('http://127.0.0.1:8000/api/getAnswer',{quiz_id : this.$route.params.id , question_id : question_id}).then(response=>{
                        const answer = response.data;
                        Swal.fire({
                            title: 'Answer for Quiz ' + this.currentQuiz ,
                            html: `<b class="text-primary fs-4">${answer}</b>`,
                            imageUrl: '/images/hint.gif',
                            imageAlt: 'Preett',
                        });
                    }).catch(error=>{
                        console.log('error');
                    })

                }
              })

        },
    },
    mounted () {
        this.getQuestionList();
    },

}