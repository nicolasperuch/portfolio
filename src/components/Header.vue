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