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
                name: 'Ansible',
                icon: './src/assets/ansible-logo.png'
            },
            {
                name: 'Kubernetes',
                icon: './src/assets/kubernetes-logo.png'
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
                name: 'Mongo DB',
                icon: './src/assets/mongo-logo.png'
            },
            {
                name: 'MySql',
                icon: './src/assets/mysql-logo.png'
            },
            {
                name: 'Oracle Database',
                icon: './src/assets/oracle-database-logo.png'
            },
            {
                name: 'Java',
                icon: './src/assets/java-logo.png'
            },
            {
                name: 'Node',
                icon: './src/assets/node-logo.png'
            },
            {
                name: 'Vue',
                icon: './src/assets/vue-logo.png'
            },
            {
                name: 'Angular',
                icon: './src/assets/angular-logo.png'
            },
            {
                name: 'ReactiveX',
                icon: './src/assets/rx.png'
            },
            {
                name: 'RabbitMQ',
                icon: './src/assets/rabbit-logo.png'
            },
            {
                name: 'Gradle',
                icon: './src/assets/gradle-logo.png'
            },
            {
                name: 'Maven',
                icon: './src/assets/maven-logo.png'
            },
            {
                name: 'GoLang',
                icon: './src/assets/go-lang-logo.png'
            },
            {
                name: 'Netflix OSS',
                icon: './src/assets/netflix.png'
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