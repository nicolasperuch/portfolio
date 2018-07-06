const data = {
    state: {
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
    },
    getters: {
        getSocialMediaTitle: state => {
            return state.socialMediaTitle
        },
        getSocialMediaList: state => {
            return state.socialMedia
        }
    }
}

export default {
    data
} 