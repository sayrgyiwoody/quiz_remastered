<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="row g-2 justify-content-between" :class="{'dark-mode':darkModeStatus}">
                <div class="">
                    <a @click="directHome()" class="text-decoration-none fs-5 fw-semibold"><i class="fa-solid fa-arrow-left me-2" style="cursor: pointer;"></i>Back</a>
                </div>
                <quiz-list @page="changePage" :quizzes="quizzes"></quiz-list>
            </div>
        </div>
    </div>
</template>

<script src="../assets/js/AllQuiz.js"></script>