pipeline {
  agent {
    label "master"
  }

  tools {
    nodejs 'Node 6.10.3'
  }

	stages {
		stage('Build') {
			steps {
				sh 'npm install'
			}
		}

		stage('Test') {
			steps {
				sh 'echo No tests yet'
			}
		}

		stage('Deploy') {
			steps {
      deployLambda([alias: '', artifactLocation: './', awsAccessKeyId: 'AKIAIRYYRDKI67MKOROA', awsRegion: 'us-east-1', awsSecretKey: '{AQAAABAAAAAwLV1XgheyJw/LBzo3XTBNwkYyUHnS3wDxLFWIgsUlYAQMfdVx63ve6EE/DfH73HEwSe3alROz5QeNagAGtSDQyw==}', deadLetterQueueArn: '', description: '', environmentConfiguration: [kmsArn: ''], functionName: 'gettingStartedJenkins', handler: 'index.handler', memorySize: '128', role: 'arn:aws:iam::205556789738:role/lambda_basic_execution', runtime: 'nodejs6.10', securityGroups: '', subnets: '', timeout: '10', updateMode: 'full'])
			}
		}
  }

}
