pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: 'github-credentials', url: 'https://github.com/Ilham06/portfolio'
            }
        }
        stage('Build the app') {
            steps {
                echo 'Building...'
                bat 'npm run build'  // Sesuaikan dengan build tool-mu
            }
        }
        stage('Start the app') {
            steps {
                echo 'Running...'
                bat 'npm run start'  // Sesuaikan jika menggunakan testing
            }
        }
      //   stage('Deploy') {
      //       steps {
      //           echo 'Deploying...'
      //           sh './deploy.sh'  // Jika ada script deployment
      //       }
      //   }
    }
}
