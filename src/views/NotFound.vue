<template>
    <div>
        <div class="d-flex flex-column justify-content-center align-items-center mx-auto">
            <img src="../assets/notFound_2.png" width="400" alt="notFound">
            <p class="text-center" :class="{'text-white':darkModeStatus}">
                The page you are trying to access doesn't exist or has been moved.<br class="d-none d-md-block">
                Try going back to our homepage.
            </p>
            <button @click="directHome" class="btn btn-primary px-3 py-2">Go to homepage</button>

        </div>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters(["darkModeStatus"]),
    },
    methods: {
        directHome() {
            this.$router.push({
                name : "home"
            })
        },
    },
    
}
</script>