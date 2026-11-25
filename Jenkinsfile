
pipeline {
    agent any

    options {
        timestamps()
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Retrieving source code from GitHub...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                bat 'npm ci'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated tests...'
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Checking application syntax...'
                bat 'node --check app.js'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying application to staging...'

                bat '''
                if not exist "%WORKSPACE%\\staging" mkdir "%WORKSPACE%\\staging"

                copy /Y app.js "%WORKSPACE%\\staging\\app.js"
                copy /Y package.json "%WORKSPACE%\\staging\\package.json"
                copy /Y package-lock.json "%WORKSPACE%\\staging\\package-lock.json"

                npm ci --prefix "%WORKSPACE%\\staging" --omit=dev
                '''

                echo 'Application successfully deployed to staging.'
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}
