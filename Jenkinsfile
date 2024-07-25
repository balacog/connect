pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        PATH = "$NODEJS_HOME/bin:$PATH"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your/repository.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'  // Replace with your build command if needed
            }
        }

        stage('Start Application with PM2') {
            steps {
                sh 'pm2 start app.js'  // Replace 'app.js' with your main entry point
            }
        }

        stage('Monitor Application') {
            steps {
                sh 'pm2 list'
            }
        }

        stage('Stop Application') {
            steps {
                sh 'pm2 stop app.js'  // Replace 'app.js' with your main entry point
            }
        }

        stage('Cleanup') {
            steps {
                sh 'npm prune --production'  // Remove development dependencies
            }
        }
    }

    post {
        always {
            // Clean up PM2 processes on completion
            sh 'pm2 kill'
        }
    }
}

