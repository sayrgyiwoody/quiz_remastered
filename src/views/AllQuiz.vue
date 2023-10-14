<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="row g-2 justify-content-between" :class="{'dark-mode':darkModeStatus}">
                <quiz-list @page="changePage" :quizzes="quizzes"></quiz-list>
            </div>
        </div>
    </div>
</template>

<script src="../assets/js/AllQuiz.js"></script>