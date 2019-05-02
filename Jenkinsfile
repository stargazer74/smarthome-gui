pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    node {
        def app
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build image') {
            /* This builds the actual image; synonymous to
             * docker build on the command line */

            app = docker.build("smarthome-continuum/smarthome-gui")
        }
    }
}
