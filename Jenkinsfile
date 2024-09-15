pipeline{
    agent any
    stages{
        stage("git clone the code"){
        steps{
            echo "Clone The Code"
            git url:"https://github.com/gitbsns/ReactJS.git", branch: "main" 
            
        }
        }
        stage("docker build image"){
        steps{
            echo "Build The Image"
            sh "sudo docker build -t vital-app ."
        }
        }
        stage("docker run container"){
        steps{
            echo "Deploye The Containers"
           sh "sudo docker stop vitalapp || true"
           sh "sudo docker rm -f vitalapp || true"
           sh "sudo docker run -d --name vitalapp -p 80:80 vital-app"
        }
        }
    }
    
}
