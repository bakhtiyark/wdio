﻿pipeline {
  agent any
  stages {

    stage('Installation') {
      steps {
        script {
          echo 'npm install'
          npm install
        }
      }
    }

    stage('Build') {
      steps {
        script {
          echo 'Build phase'
          npm start test2
        }
      }
    }

  }
}