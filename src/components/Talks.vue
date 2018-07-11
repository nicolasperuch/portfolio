<template>
    <div class="talks">
        <div class="title-margin">
            <h2> {{ getTalksTitle() }} </h2>
        </div>
        <div class="container padding-bottom-100" v-for="item in getTalkList()" :key="item.title">
            <div class="container">
                <div class="img-margin">
                    <a :href=item.slides target="_blank">
                        <img v-b-tooltip.hover v-bind:title="item.tooltip" v-bind:src=item.icon class="img-resize" alt=item.name>
                    </a>
                </div>
                <div id="talks-box">
                    <div>
                        <h5> {{ item.title }} </h5>
                        <p> description here </p>
                    </div>
                </div>
            </div>
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

<style scoped>
    h5 {
        text-align: left;
        font-size: 35px;
        font-family: 'Athiti', sans-serif;
        color: aliceblue;
        text-shadow: 2px 2px 5px black;
    }
    p {
        text-align: left;
        font-size: 20px;
        font-family: 'Athiti', sans-serif;
        color: aliceblue;
        text-shadow: 2px 2px 5px black;
    }

    .talks {
        background-image: url("../assets/tech-social-bg.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;

        filter: sepia(0.3)
    }

    .img-margin {
        margin: 0px;
    }

    .container {
        margin-left: 0px;
    }
</style>