const data = {
    state: {
        talksTitle: 'Talks that I did',
        talkList: [
          {
              title: 'My first step with node and elasticsearch',
              slides: 'https://docs.google.com/presentation/d/1eYRAMhEvu0902FoLEKZ8K6feOp2F7D6uw4O_EXGhayg/edit?usp=sharing',
              icon: 'https://3.bp.blogspot.com/-Xgy8k-BxOfg/WgW4jipZLsI/AAAAAAAAulA/kRs0H-cGFXkIsdql6TMunGY5fzY4ZP4NgCK4BGAYYCw/s1600/google_slides1600.png'
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