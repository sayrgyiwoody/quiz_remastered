<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="row px-2 px-md-0 g-2 justify-content-between" :class="{'dark-mode':darkModeStatus}">
                <div class="d-flex justify-content-between align-items-center">
                    <a @click="directHome()" class="text-decoration-none fs-5 fw-semibold"><i class="fa-solid fa-arrow-left me-2" style="cursor: pointer;"></i>Back</a>
                    <span :class="{'text-white':darkModeStatus}">Total : <span class="text-primary fw-bold">{{quizzes.total}}</span> </span>
                </div>
                <quiz-list v-if="quizzes.total > 0" @page="changePage" :quizzes="quizzes"></quiz-list>
            </div>
        </div>
    </div>
</template>

<script src="../assets/js/AllQuiz.js"></script>