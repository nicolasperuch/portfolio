<template>
    <div class="parallax">
        <div class="header-margin">  
            <h1> {{ getTitle() }} </h1>
        </div>  
        
        <div class="paragraph-margin">
            <p> {{ getDescription() }} </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        methods: {
            getTitle: function () {
                return this.$store.getters.getTitle
            },
            getDescription: function () {
                return this.$store.getters.getDescription
            }
        }
    }
</script>

<style scoped>
    h1 {
        margin-top: 0px;
        margin-right: 30vw;
        text-align: left;
        font-size: 80px;
        font-family: 'Athiti', sans-serif;
    }
    p {
        text-align: left;
        font-size: 25px;
        margin-right: 34vw;
    }
    .header-margin {
        padding-top: 25px;
        margin-left: 50px;
    }
    .parallax {
        /* The image used */
        background-image: url("../assets/capa.png");

        /* Set a specific height */
        min-height: 350px; 

        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

    }
</style>