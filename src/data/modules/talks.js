const data = {
    state: {
        talksTitle: 'Talks that I did',
        talkList: [
          {
              title: 'My first step with node and elasticsearch',
              slides: 'https://docs.google.com/presentation/d/1eYRAMhEvu0902FoLEKZ8K6feOp2F7D6uw4O_EXGhayg/edit?usp=sharing',
              icon: './src/assets/google-presentation-logo.png',
              tooltip: 'Slides from presentation',
              description: 'In this talk, I share my experience learning elasticsearch and integrating ' +
              'with nodejs. Content: Apache Lucene, Index, Type, Document, Field, Examples with basic requests, Elasticsearch Architecture, Query, and Filter'
          },
          {
            title: 'My first step with node and elasticsearch',
            slides: 'https://docs.google.com/presentation/d/1eYRAMhEvu0902FoLEKZ8K6feOp2F7D6uw4O_EXGhayg/edit?usp=sharing',
            icon: './src/assets/google-presentation-logo.png',
            tooltip: 'Slides from presentation',
            description: 'In this talk, I share my experience learning elasticsearch and integrating ' +
            'with nodejs. Content: Apache Lucene, Index, Type, Document, Field, Examples with basic requests, Elasticsearch Architecture, Query, and Filter'
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