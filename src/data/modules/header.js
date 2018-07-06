const data = {
    state: {
        title: 'My name is Nicolas Peruch & I\'m a technology enthusiast ',
        description: 'Hello! I\'m a brazilian software engineer. I have being working with developement since 2017, '+
        'and I\'m building my path to be the best version of myself!'
    },
    getters: {
        getTitle: state => {
            return state.title
        },
        getDescription: state => {
            return state.description
        }
    }
}

export default {
    data
} 