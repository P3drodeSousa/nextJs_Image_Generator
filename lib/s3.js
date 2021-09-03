
import AWS from 'aws-sdk'

export const S3 = new AWS.S3({
	credentials: {
		accessKeyId: process.env.S3_accessKeyId,
		secretAccessKey: process.env.S3_secretAccessKey
	}
})