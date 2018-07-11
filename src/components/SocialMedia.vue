<template>
    <div class="social-media">
        <div class="title-margin">
            <h2> {{ socialMediaTitle() }} </h2>
        </div>  
        <div class="container">
            <div class="img-margin  padding-bottom-100" v-for="item in getSocialMediaList()" :key="item.name">
                <a :href="item.profile" target="_blank">
                    <img v-b-tooltip.hover v-bind:title="item.name" v-bind:src=item.icon class="img-resize" alt=item.alt>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SocialMedia',
        methods: {
            socialMediaTitle: function () {
                return this.$store.getters.getSocialMediaTitle
            },
            getSocialMediaList: function () {
                return this.$store.getters.getSocialMediaList
            }
        }
    }
</script>

<style scoped>
    .social-media {
        background-image: url("../assets/tech-social-bg.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;

        filter: sepia(0.2)
    }
</style>
