pipeline{
    agent any
    stages{
        stage("clone the code"){
        steps{
            echo "Clone The Code"
            git url:"https://github.com/gitbsns/ReactJS.git", branch: "main" 
            
        }
        }
        stage("docker build image"){
        steps{
            echo "Build The Image"
            sh "docker build -t vital-app ."
        }
        }
        stage("docker run container"){
        steps{
            echo "Deploye The Containers"
           sh "docker stop vitalapp || true"
           sh "docker rm -f vitalapp || true"
           sh "docker run -d --name vitalapp -p 8300:8300 vital-app"
        }
        }
    }
    
}
