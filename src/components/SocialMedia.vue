<template>
    <div>
        <div class="title-margin">
            <h2> {{ socialMediaTitle }} </h2>
        </div>  
        <div class="container">
            <div id="social-media" class="img-margin" v-for="item in socialMedia">
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
            data () {
                return  {
                    socialMediaTitle: 'Social Media',

                    socialMedia: [
                        {
                            icon: 'http://icons.iconarchive.com/icons/sicons/basic-round-social/512/linkedin-icon.png',
                            profile: 'https://www.linkedin.com/in/nicolasperuch/',
                            alt: 'linkedin logo'
                        },
                        {
                            icon: 'https://cdn0.iconfinder.com/data/icons/social-media-2092/100/social-62-512.png',
                            profile: 'https://medium.com/@nicolasperuch',
                            alt: 'medium logo'
                        },
                        {
                            icon: 'http://goinkscape.com/wp-content/uploads/2015/07/twitter-logo-final.png',
                            profile: 'https://twitter.com/nicolasperuch',
                            alt: 'twitter logo'
                        },
                        {
                            icon: 'https://image.flaticon.com/icons/svg/25/25231.svg',
                            profile: 'https://github.com/nicolasperuch',
                            alt: 'github logo'
                        }
                    ]
                }
            }
        }
</script>