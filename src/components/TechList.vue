<template>
    <div class="tech">
        <div class="title-margin">
            <h2> {{ getTechnologyTitle() }} </h2>
        </div>
        <div class="container">
            <div class="img-margin" v-for="item in getTechList()" :key="item.name">
                <img v-b-tooltip.hover v-bind:title="item.name" v-bind:src=item.icon class="img-resize" alt=item.name>
            </div>
        </div>
    </div>  
</template>

<script>
    export default {
        name: 'TechList',
        methods: {
            getTechnologyTitle: function () {
                return this.$store.getters.getTechnologyTitle
            },
            getTechList: function () {
                return this.$store.getters.getTechList
            }
        }
    }
</script>

<style scoped>
    .tech {
        background-image: url("../assets/tech-social-bg.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;

        filter: sepia(0.22)
    }
</style>
