pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/mahendra1904/node-app-project-jenkins.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm i'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
