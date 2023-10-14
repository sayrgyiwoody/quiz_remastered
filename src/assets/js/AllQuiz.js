import QuizList from '@/components/QuizList'
import axios from 'axios'
import { mapActions,mapGetters } from 'vuex'

export default {
    props: {

    },
    components: {
        QuizList,
    },
    data() {
        return {
            quizzes: {},
            currentPage : 1,
        }
    },
    computed: {
        ...mapGetters(["darkModeStatus"])
    },
    methods: {
        ...mapActions(['setLoadingStatus']),
        getQuizzes() {
            this.setLoadingStatus(true);
            axios.get(`http://127.0.0.1:8000/api/quiz/all?page=${this.currentPage}`,{
                'searchKey' : this.search_input
            }).then((response) => {
                this.quizzes = response.data.quizzes;
                this.setLoadingStatus(false);
            }).catch(error => console.log(error));
        },
        //get page number from child component
        changePage(page = 1){
        this.currentPage = page;
        this.searchQuiz();
        },
        directHome() {
            this.$router.push({
                name : "home"
            })
        },
    },
    mounted () {
        this.getQuizzes();
    },

}