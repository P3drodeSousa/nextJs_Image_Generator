
import AWS from 'aws-sdk'

AWS.config.update({region: 'us-west-2', signatureVersion: 'v4'});

const S3 = new AWS.S3({
	credentials: {
		accessKeyId: process.env.S3_accessKeyId,
		secretAccessKey: process.env.S3_secretAccessKey
	}
})

export default S3;