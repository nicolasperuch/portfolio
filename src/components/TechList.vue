<template>
    <div>
        <div class="title-margin">
            <h2> {{ getTechnologyTitle() }} </h2>
        </div>
        <div class="container">
            <div class="img-margin" v-for="item in getTechList()">
                <img v-bind:src=item.icon class="img-resize" alt=item.name>
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