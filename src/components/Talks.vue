<template>
    <div>
        <div class="title-margin">
            <h2> {{ getTalksTitle() }} </h2>
        </div>
        <div class="paragraph-margin" v-for="item in getTalkList()">
            <a :href=item.slides target="_blank">
                <h5> {{ item.title }} </h5>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Talks',
        methods: {
            getTalksTitle: function () {
                return this.$store.getters.getTalksTitle
            },
            getTalkList: function () {
                return this.$store.getters.getTalkList
            }
        }
    }
</script>