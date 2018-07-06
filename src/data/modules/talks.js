const data = {
    state: {
        talksTitle: 'Talks that I did',
        talkList: [
          {
              title: 'My first step with node and elasticsearch',
              slides: 'https://docs.google.com/presentation/d/1eYRAMhEvu0902FoLEKZ8K6feOp2F7D6uw4O_EXGhayg/edit?usp=sharing'
          }
        ]
    },
    getters: {
        getTalksTitle: state => {
            return state.talksTitle
        },
        getTalkList: state => {
            return state.talkList
        }
    }
}

export default {
    data
} 