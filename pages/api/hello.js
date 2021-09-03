import {S3} from '../../lib/s3'
import { getScreenShoot } from "./_lib/getHtml";
import { getHtml } from "./_lib/template";

export default async (req, res) => {
  const { values } = req.body;
  const html = await getHtml(values);
  const file = await getScreenShoot(html, values.fileType);

  const fileName = "uploaded_on_" + Date.now() + "." + values.fileType;
  
  const params = {
    Bucket: 'next-image-generator',
    Key: fileName,
    Body: file
  }

  try {
    S3.upload(params, (error, data) => {
			console.log(error, data)
			if (error) {
				return res.json({
					status: 'error',
					error: error.message || 'Something went wrong'
				})
			}

			const params = {
				Bucket: 'next-image-generator',
				Key: fileName,
				Expires: 60
			}

			const signedURL = S3.getSignedUrl('getObject', params)

      return res.json({ url: signedURL });
		})

		// upload this buffer on AWS S3
	} catch (error) {
		console.log(error)
		res.json({
			status: 'error',
			data: error.message || 'Something went wrong'
		})
  }
};
    
