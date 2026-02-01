pipeline{
    agent any 

    stages{
        stage('checkout'){
            steps {
                git 'https://github.com/niraj1703/backend.git'
            }
        }
        stage('Build Docker Image'){
            steps {
                sh 'docker build-t ni969/backend-app:latest .'
            }
        }
        stage('Push Image') {
            steps{
                sh 'docker push ni969/backend-app:latest '
            }
        }
        stage ('Deploy to Kubernetes'){
            step{
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}