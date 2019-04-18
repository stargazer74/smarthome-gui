node {
       stage ('Checkout'){
              deleteDir()
              checkout scm
       }
       stage('NPM Install') {
              withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
              sh 'npm install'
              }
       }
}