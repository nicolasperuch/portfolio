const data = {
    state: {
        technologyTitle: 'Studied Technologies',
        techList: [
            {
                name: 'Elasticsearch',
                icon: './src/assets/elasticsearch-logo.svg'
            },
            {
                name: 'Docker',
                icon: './src/assets/docker-logo.svg'
            },
            {
                name: 'Kafka',
                icon: './src/assets/kafka-logo.png'
            },
            {
                name: 'Spring boot',
                icon: './src/assets/spring-boot-logo.png'
            },
            {
                name: 'Grafana',
                icon: './src/assets/grafana-logo.png'
            },
            {
                name: 'FluentD',
                icon: './src/assets/fluentd-logo.png'
            },
            {
                name: 'MySql',
                icon: './src/assets/mysql-logo.png'
            },
            {
                name: 'Java',
                icon: './src/assets/java-logo.png'
            },
            {
                name: 'Node',
                icon: './src/assets/node-logo.png'
            }    
        ]
    },
    getters: {
        getTechnologyTitle: state => {
            return state.technologyTitle
        },
        getTechList: state => {
            return state.techList
        }
    }
}

export default {
    data
} 