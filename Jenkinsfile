pipeline {
  agent none
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:10-alpine'
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
        sh 'docker run -d --name smarthome-gui smarthome-continuum/smarthome-gui'
        sh 'docker image prune -a -f'
      }
    }
  }
}
