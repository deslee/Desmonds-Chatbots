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
      deployLambda([alias: '', artifactLocation: './', awsAccessKeyId: 'AKIAIE2HU45YAIJCPMIQ', awsRegion: 'us-east-1', awsSecretKey: '{AQAAABAAAAAwhA3h93wIxb7Tk9YkV73fT2fMZSqtjVfU8pwaYi2PFjzahUFJWDIsmKFNw3mNtjldllXbYHGZ4SO2YP94HknjBA==}', deadLetterQueueArn: '', description: '', environmentConfiguration: [kmsArn: ''], functionName: 'Desmonds-Chatbot', handler: 'index.handler', memorySize: '128', role: 'arn:aws:iam::205556789738:role/lambda_basic_execution', runtime: 'nodejs6.10', securityGroups: '', subnets: '', timeout: '30', updateMode: 'full'])
			}
		}
  }

}
