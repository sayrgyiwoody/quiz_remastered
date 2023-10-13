<template>
    <div class="row">
        <div class="col-12">
            <div class="quiz-detail">
                <h2 class="fw-bold">Quiz title</h2>
                <div class="fw-semibold">
                    <img width="50" src="https://ui-avatars.com/api/?name=woody&background=0D8ABC&color=fff" alt="" class="rounded-circle">
                    <span class="ms-2">Woody</span>
                |   <span>30 quizzes</span>
                </div>
                <div class="desc-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nihil expedita beatae corrupti reiciendis non sequi, dolore nostrum laborum officiis earum facilis perspiciatis ex quod eum dolores quo est magni debitis repellendus? A reprehenderit nulla velit quisquam ex! Cupiditate, unde.
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
export default {
    methods: {
        directHome() {
            this.$router.push({
                name : "home"
            })
        }
    },
}
</script>

<style>
    .quiz-detail {
        padding: 20px;
        color: #222222;
        background-color: #ffffff;
        border-radius: 5px;
    }

    .dark-mode .quiz-detail {
        background-color: #27272a;
    }

    .desc-body {
        padding: 20px;
        background-color: #f8fafc;
        margin-top: 20px;
        border-radius: 10px;
    }

    button {
        padding: 15px 25px;
        border: none;
    }

    button:hover {
        background-color: #f8fafc ;
    }

    button svg {
        color : #2563eb;
        transition: .5s;
    }


    .btn-back:hover svg {
        transform: translateX(-6px);
    }

    .btn-play:hover svg {
        transform: translateX(6px);
    }

</style>