pipeline {
    agent {
        docker {
            image 'node:8.16.0-alpine'
            args '-p 3000:3000'
      }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
        }
      }
      stage ('Build Container') {
        steps {
          script {
            docker.build('test')
          }
        }
      }
    }
}
