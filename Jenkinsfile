pipeline {
  agent none
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:8.16.0-alpine'
          args '-p 3000:3000'
        }
      }
      steps {
        sh 'npm install'
      }
    }
    stage ('Build Container') {
      agent any
      steps {
        sh 'docker build -t smarthome-continuum/smarthome-gui .'
        sh 'docker-compose up -d'
      }
    }
  }
}
