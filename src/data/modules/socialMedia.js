const data = {
    state: {
        socialMediaTitle: 'Social Media',
        socialMedia: [
            {
                name: 'Linkedin',
                icon: './src/assets/linkedin-logo.svg',
                profile: 'https://www.linkedin.com/in/nicolasperuch/',
                alt: 'linkedin logo'
            },
            {
                name: 'Medium',
                icon: './src/assets/medium-logo.svg',
                profile: 'https://medium.com/@nicolasperuch',
                alt: 'medium logo'
            },
            {
                name: 'Twitter',
                icon: './src/assets/twitter-logo.svg',
                profile: 'https://twitter.com/nicolasperuch',
                alt: 'twitter logo'
            },
            {
                name: 'Github',
                icon: './src/assets/github-logo.svg',
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