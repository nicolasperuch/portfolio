<template>
    <div>
        <div class="title-margin">
            <h2> {{ socialMediaTitle() }} </h2>
        </div>  
        <div class="container">
            <div id="social-media" class="img-margin" v-for="item in getSocialMediaList()">
                <a :href="item.profile" target="_blank">
                <img v-bind:src=item.icon class="img-resize" alt=item.alt>
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