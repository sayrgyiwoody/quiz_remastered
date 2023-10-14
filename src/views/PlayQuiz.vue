<template>
    <div class="row justify-content-center" :class="{'dark-mode':darkModeStatus}">
        <div class="col-md-8">
            <div class="px-2">
                <a @click="goBack()" class="text-decoration-none fs-5 fw-semibold"><i class="fa-solid fa-arrow-left me-2" style="cursor: pointer;"></i>Back</a>
            </div>
            
                    <div class="px-2 mt-3"  >
                      <h5 class="mb-3 fw-semibold p-3">{{quiz.title}}</h5>
                      <div class="progress mb-1 bg-white shdw" style="height: 10px;" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" :style="{width: currentQuiz / (questionList.length/100) + '%'}" ></div>
                      </div>
                      <p class="mb-3 text-end" :class="{'text-light':darkModeStatus}"><b class="text-success">{{currentQuiz}}</b><b> / {{questionList.length}}</b></p>
                      <div v-if="loading" class="spinner-container"><div class="spinner"></div><span class="fw-semibold ms-2" :class="{'text-light':darkModeStatus}">Loading..</span></div>
                      <div  v-html="answerMessage" v-if="answerStatus !== null" class="alert text-light fw-semibold" :class="{'text-dark':!darkModeStatus}" role="alert">
                      </div>
                      <div class="" v-for="question in paginatedQuizzes" :key="question.id">
                          <div class="d-flex align-items-center justify-content-between">
                            <button class="btn rounded-bottom-0 me-1 fw-bold text-light bg-primary" >
                              Quiz 1
                            </button>
                            <button @click="showAnswer(question.id)" class="btn " :class="{'text-light':darkModeStatus}">need answer<i class="fa-solid fa-question text-danger ms-2 fs-5"></i></button>
                          </div>
                          <div class="quiz-box mb-3">
            
                            <div class="d-flex justify-content-between">
                              <div class="mb-2">
                                <p class="fw-semibold mb-1" v-if="question.questionText">{{question.questionText}}</p>
                                <div v-if="question.multipleText">
                                  <p class="mb-0 fw-semibold">{{question.multipleText}}</p>
                                </div>
                              </div>
                            </div>
                            <div v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex" class="form-check">
                              <input class="form-check-input me-2" :name="'choice'+question.id"
                                :id="'choice' + question.id + choiceIndex" type="radio" v-model="selectedChoice"
                                :value="choice">
                              <label class="form-check-label" :for="'choice' + question.id + choiceIndex">
                                {{choice}}
                              </label>
                            </div>
                            <input class="answerInput" @keyup.enter="checkAnswer(question.id)"  v-if="question.questionText" placeholder="Your answer here" v-model="answer" name="userAnswer" type="text">
                          </div>
                        <button :disabled="answerStatus" @click="checkAnswer(question.id)" class="btn btn-primary mb-4 w-100"><i class="bi bi-journal-check me-2"></i>Check Answer</button>
                        </div>
            
            
                        <div class="d-flex justify-content-between">
                          <button @click="changeQuiz(currentQuiz + 1)" :hidden="currentQuiz === (questionList.length + 1) || !answerStatus" class="btn ms-auto" :class="{'text-light':darkModeStatus}">{{nextQuiz}}<i class="bi bi-caret-right-fill ms-2"></i></button>
                        </div>
                      </div>
            </div>
        </div>

</template>

<script src="../assets/js/PlayQuiz.js"></script>


<style  scoped>

.quiz-box {
    padding: 20px;
    background-color: #fff;
    border-radius: 0px 5px 5px 5px;
    border: 1.5px solid #0d6efd;
}

.dark-mode .quiz-box {
    background-color: #1f2937;
    color : #fff;
}

h5 {
    background-color: #fff;
    border-radius: 5px;
    color: #222222;
}

.dark-mode h5 {
    background-color: #1f2937;
    color: #fff;
}

.answerInput {
    width: 100%;
    padding: .7em 1em;
    border: none;
    background-color: #f3f4f6;
    border-radius: 5px;
}

.dark-mode .answerInput {
    background-color: #333e4f;
    color: #fff;
}

.dark-mode .answerInput::placeholder {
    color : #f1f5f9;
}

.answerInput:focus {
    outline: none;
    border: 1.5px solid #1d4ed8;
}

button {
    padding: 10px;
}

.bg-dark_1{
    background-color: #1f2937;
}

.bg-dark_2{
    background-color: #333e4f;
}

.spinner-container {
    position: relative;
    top: 0;
    backdrop-filter: blur(5px); /* Adds a blur effect to the background */
    display: flex;
    justify-content: center;
    align-items: center;
  }

.spinner {
    width: 56px;
    height: 56px;
    display: grid;
    border: 4.5px solid #0000;
    border-radius: 50%;
    border-color: #dbdcef #0000;
    animation: spinner-e04l1k 1s infinite linear;
  }

  .spinner::before,
  .spinner::after {
    content: "";
    grid-area: 1/1;
    margin: 2.2px;
    border: inherit;
    border-radius: 50%;
  }

  .spinner::before {
    border-color: #474bff #0000;
    animation: inherit;
    animation-duration: 0.5s;
    animation-direction: reverse;
  }

  .spinner::after {
    margin: 8.9px;
  }

  @keyframes spinner-e04l1k {
    100% {
      transform: rotate(1turn);
    }
  }

</style>../assets/js/PlayQuiz.js../assets/js/PlayQuiz.js